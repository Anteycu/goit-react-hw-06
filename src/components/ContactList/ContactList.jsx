import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const searchedName = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(searchedName.toLowerCase())
  );

  return (
    <ul className={css.contacts}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <Contact username={name} phoneNum={number} contactId={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
