import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   return savedContacts ?? initContacts;
  // });

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
