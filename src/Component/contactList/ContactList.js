import React from "react";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import ContactListItem from "../contactListItem/ContactListItem";

const ContactList = () => {
  const filterContact = useSelector((state) => state.contacts.filter);
  const contacts = useSelector(({ contacts: { items } }) =>
    items.filter(({ name }) => name.toLowerCase().includes(filterContact))
  );

  return (
    <>
      <div>
        <ol className={s.list}>
          {contacts &&
            contacts.map((contact) => (
              <ContactListItem key={contact.id} contact={contact} />
            ))}
        </ol>
      </div>
    </>
  );
};

export default ContactList;
