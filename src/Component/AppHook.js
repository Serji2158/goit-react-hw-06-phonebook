import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import ContactForm from "./contactForm/ContactForm";
import { connect } from "react-redux";

const AppHook = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? ""
  );
  const [filter, setFilter] = useState("");

  // useEffect(() => {
  //  const contacts = localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (newContact) => {
    setContacts((prev) => [...prev, { id: uuidv4(), ...newContact }]);
  };

  const isExistContact = (name) =>
    contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

  const deletContact = (e) => {
    const id = e.target.id;
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const onHandleChangeFilter = (e) => {
    const filter = e.target.value;
    setFilter(filter);
  };

  const filteredContacts = () => {
    const normolizedFilter = filter.toLowerCase();
    return normolizedFilter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normolizedFilter)
        )
      : contacts;
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          isExistContact={isExistContact}
          addNewContact={addNewContact}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onHandleChangeFilter} />
        <ContactList
          contacts={filteredContacts()}
          deletContact={deletContact}
        />
      </div>
    </>
  );
};

export default connect()(AppHook);
