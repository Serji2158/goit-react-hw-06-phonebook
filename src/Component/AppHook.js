import React, { useState } from "react";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import ContactForm from "./contactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/Contacts/contactsActions";

const AppHook = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const addNewContact = (newContact) => {
    dispatch(addNewContact(newContact));
  };

  const isExistContact = (name) =>
    contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

  const deletContact = (e) => {
    const id = e.target.id;
    dispatch(deleteContact(id));
  };

  const onHandleChangeFilter = (e) => {
    const filter = e.target.value;
    dispatch(setFilter(filter));
  };

  // const filteredContacts = () => {
  //   const normolizedFilter = filter.toLowerCase();
  //   return normolizedFilter
  //     ? contacts.filter((contact) =>
  //         contact.name.toLowerCase().includes(normolizedFilter)
  //       )
  //     : contacts;
  // };

  // import React from "react";
  // import { useDispatch, useSelector } from "react-redux";
  // import { setFilter } from "../../../redux/tasks/tasksActions";

  // const TasksFilter = () => {
  //   const dispatch = useDispatch();
  //   const filter = useSelector((state) => state.tasks.filter);
  //   const onHandleChange = (e) => {
  //     const { value } = e.target;
  //     dispatch(setFilter(value));
  //   };
  //   return <input type='text' onChange={onHandleChange} value={filter} />;
  // };

  // export default TasksFilter;

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
        <ContactList deletContact={deletContact} />
      </div>
    </>
  );
};

export default AppHook;
