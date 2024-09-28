import css from "./Contact.module.css";

const Contact = ({ username, phoneNum, contactId }) => {
  return (
    <>
      <div className={css.contactInfo}>
        <h2>{username}</h2>
        <p>{phoneNum}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          console.log(contactId);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
