import { Component } from "react";
import Education from "./components/Education";
import Exp from './components/Exp';
import uniqid from 'uniqid';

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
    })
  }


  render() {
    const { fname, lname, email, location, contact, fnamesaved, lnamesaved } = this.state;

    return (
      <div>
        <header>My Resume Builder</header>
        <form>
          <input
            type="text"
            placeholder="First Name"
            id="fnameInput"
            value={fname}
            onChange={this.fnameChange}
          ></input>
          <input type="text"
            placeholder="Last Name"
            id="lnameInput"
            value={lname}
            onChange={this.lnameChange}
          ></input>
          <input
            type="text"
            placeholder="Email"
            id="emailInput"
            value={email}
            onChange={this.emailChange}
          ></input>
          <input
            type="text"
            placeholder="Location"
            id="locationInput"
            value={location}
            onChange={this.locationChange}
          ></input>
          <input
            type="text"
            placeholder="Contact"
            id="contactInput"
            value={contact}
            onChange={this.contactChange}
          ></input>
          <button type="button" onClick={this.saveSection}>Save</button>
        </form>
        <h2 key={uniqid()}>{fnamesaved}{lnamesaved}</h2>
        <Exp />
        <Education />
      </div>
    )
  }
}

export default App;
