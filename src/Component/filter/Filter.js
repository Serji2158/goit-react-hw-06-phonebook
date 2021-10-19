import React from "react";
import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/Contacts/contactsActions";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.form}>
        <label>
          <p className={s.inputName}>Find contacts by name</p>
          <input
            className={s.input}
            type="text"
            name="filter"
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
      </div>
    </>
  );
};

export default Filter;
