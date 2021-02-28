import { Component } from "react";
import Education from "./components/Education";
import Exp from './components/Exp';
import uniqid from 'uniqid';
import Skills from "./components/Skills";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fname: "",
      lname: "",
      email: "",
      location: "",
      contact: "",
      fnamesaved: "",
      lnamesaved: "",
      emailsaved: "",
      locationsaved: "",
      contactsaved: "",
      showHideform: false,
      showHidebtn: true,
      showHideEditbtn: false,
    }
  }

  fnameChange = (e) => {
    this.setState({
      fname: e.target.value,
    })
  }

  lnameChange = (e) => {
    this.setState({
      lname: e.target.value,
    })
  }

  emailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  locationChange = (e) => {
    this.setState({
      location: e.target.value,
    })
  }

  contactChange = (e) => {
    this.setState({
      contact: e.target.value,
    })
  }

  saveSection = () => {
    this.setState({
      fnamesaved: this.state.fname,
      lnamesaved: this.state.lname,
      emailsaved: this.state.email,
      locationsaved: this.state.location,
      contactsaved: this.state.contact,
      fname: "",
      lname: "",
      email: "",
      location: "",
      contact: "",
      showHideEditbtn: !this.state.showHideEditbtn,
      showHideform: !this.state.showHideform,
    })
  }

  toggleForm = () => {
    this.setState({
      showHideform: !this.state.showHideform,
      showHidebtn: !this.state.showHidebtn,
    })
  }

  editForm = () => {
    this.setState({
      fname: this.state.fnamesaved,
      lname: this.state.lnamesaved,
      email: this.state.emailsaved,
      location: this.state.locationsaved,
      contact: this.state.contactsaved,
      showHideform: !this.state.showHideform,
      showHideEditbtn: !this.state.showHideEditbtn,
    })
  }

  cancelForm = () => {
    this.setState({
      fname: "",
      lname: "",
      email: "",
      location: "",
      contact: "",
      showHideform: !this.state.showHideform,
      showHideEditbtn: !this.state.showHideEditbtn,
    })
  }


  render() {
    const { fname, lname, email, location, contact, fnamesaved, lnamesaved, emailsaved, contactsaved, locationsaved, showHideform, showHideEditbtn, showHidebtn } = this.state;

    return (
      <div id="appDiv">
        <header>My Resume Builder</header>
        {showHideform && (
          <form id="nameForm" className="resForm">
            <h3>Personal Info</h3>
            <label htmlFor="fnameinput" className="formLabel">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              id="fnameInput"
              value={fname}
              onChange={this.fnameChange}
              className="formInput"
            ></input>
            <label htmlFor="lnameInput" className="formLabel">Last Name</label>
            <input type="text"
              placeholder="Last Name"
              id="lnameInput"
              value={lname}
              onChange={this.lnameChange}
              className="formInput"
            ></input>
            <label htmlFor="emailInput" className="formLabel">Email</label>
            <input
              type="text"
              placeholder="Email"
              id="emailInput"
              value={email}
              onChange={this.emailChange}
              className="formInput"
            ></input>
            <label htmlFor="locationInput" className="formLabel">Location</label>
            <input
              type="text"
              placeholder="Location"
              id="locationInput"
              value={location}
              onChange={this.locationChange}
              className="formInput"
            ></input>
            <label htmlFor="contactInput" className="formLabel">Contact</label>
            <input
              type="text"
              placeholder="Contact"
              id="contactInput"
              value={contact}
              onChange={this.contactChange}
              className="formInput"
            ></input>

            <button type="button" onClick={this.saveSection} className="formBtn">Save</button>

            <button type="button" onClick={this.cancelForm} className="formBtn">Cancel</button>

          </form>
        )}
        <div className="displayDiv" key={uniqid()}>
          <h2>Name: {fnamesaved} {lnamesaved}</h2>
          <h4>Email: {emailsaved}</h4>
          <h4>Location: {locationsaved}</h4>
          <h4>Contact: {contactsaved}</h4>

          {showHidebtn && (
            <button type="button" className="formBtn" onClick={this.toggleForm}>Add Personal Info</button>
          )}

          {showHideEditbtn && (
            <button type="button" className="formBtn" onClick={this.editForm}>Edit Personal Info</button>
          )}
        </div>

        <Exp />
        <Education />
        <Skills />
      </div>
    )
  }
}

export default App;
