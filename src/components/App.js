import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
// import { v4 as uuidv4 } from "uuid";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
// import Notification from "./Notification/Notification";
import PhonebookTitle from "./PhonebookTitle/PhonebookTitle";
// import checkSameContact from "../helpers/checkSameContact";
import "./styles.css";

export class App extends Component {
  // state = {
  // contacts: [],
  // filter: "",
  // sameName: null,
  // showNotification: false,
  // showContactList: false,
  // showContactListItem: false,
  // };

  // componentDidMount() {
  //   const persistedTasks = localStorage.getItem("contacts");
  //   if (persistedTasks) {
  //     this.setState({
  //       contacts: JSON.parse(persistedTasks),
  //       showContactList: true,
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.conacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  //   let timeoutID;
  //   if (prevState.showNotification !== this.state.showNotification) {
  //     timeoutID = setTimeout(
  //       () => this.setState(() => ({ showNotification: false })),
  //       3000
  //     );
  //   } else {
  //     clearTimeout(timeoutID);
  //   }
  // }

  render() {
    // const {
    //   contacts,
    //   filter,
    //   sameName,
    //   showNotification,
    //   showContactList,
    //   showContactListItem,
    // } = this.state;
    // const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <PhonebookTitle />

        <ContactForm />

        {/* <CSSTransition
          in={showNotification}
          timeout={1000}
          classNames="Fade"
          unmountOnExit
        >
          <Notification name={sameName} />
        </CSSTransition> */}

        <h2 className={"Contacts"}>Contacts</h2>

        <CSSTransition in={true} timeout={1000} classNames="Fade" unmountOnExit>
          <Filter />
        </CSSTransition>

        <CSSTransition
          in={true}
          timeout={500}
          classNames="SlideIn"
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </>
    );
  }
}
