import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./contactListItem.module.css";

function ContactListItem({ text, number, onRemove }) {
  return (
    <li className={styles.contactsCards}>
      <p className={styles.contactsCardsItems}>{text}:</p>
      <p className={styles.contactsCardsItems}>{number}</p>
      <button className={styles.button} type="button" onClick={onRemove}>
        x
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  text: PropTypes.string,
  number: PropTypes.string,
  onRemove: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsActions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
