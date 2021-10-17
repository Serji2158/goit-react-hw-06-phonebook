import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../../../redux/actions";
import s from "../ContactList.module.css";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const deleteContactItem = () => dispatch(deleteContact(contact.id));

  return (
    <li className={s.data}>
      <p>
        {contact.name} : {contact.number}
      </p>
      <button
        className={s.btn}
        type="button"
        id={contact.id}
        onClick={deleteContactItem}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.string,
};

export default ContactListItem;
