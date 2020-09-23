import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import "./Filter.css";

function Filter({ value, onChangeFilter }) {
  return (
    <div className={"Container"}>
      <input
        className={"FilterInput"}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
