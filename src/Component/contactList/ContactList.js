import React from "react";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import ContactListItem from "./contactListItem/ContactListItem";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  // const filter = useSelector((state) => state.contacts.filter);

  return (
    <>
      <div>
        <ol className={s.list}>
          {contacts.map((contact) => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default ContactList;
