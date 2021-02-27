import { findAllByTestId } from "@testing-library/react";
import React, { Component } from "react";
import uniqid from "uniqid";

class edu {
    constructor(school, prog, yearstart, yearend, gpa) {
        this.school = school;
        this.prog = prog;
        this.yearstart = yearstart;
        this.yearend = yearend;
        this.gpa = gpa;
    }
}

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: "",
            prog: "",
            yearstart: "",
            yearend: "",
            gpa: "",
            schools: [],
            schoolid: 0,
            editid: 0,
            showHideform: false,
            showHideAddbtn: true,
            showHideSaveEdubtn: false,
            showHideEditEdubtn: false,
            showHideSaveEditbtn: false,
            showHideCancelbtn: false,
            showHideDeletebtn: false
        };
    }

    schoolChange = (e) => {
        this.setState({
            school: e.target.value
        });
    };

    progChange = (e) => {
        this.setState({
            prog: e.target.value
        });
    };

    yearstartChange = (e) => {
        this.setState({
            yearstart: e.target.value
        });
    };

    yearendChange = (e) => {
        this.setState({
            yearend: e.target.value
        });
    };

    gpaChange = (e) => {
        this.setState({
            gpa: e.target.value
        });
    };

    saveSection = () => {
        this.setState({
            schools: this.state.schools.concat(
                new edu(
                    this.state.school,
                    this.state.prog,
                    this.state.yearstart,
                    this.state.yearend,
                    this.state.gpa,
                    this.state.schoolid
                )
            ),
            school: "",
            prog: "",
            yearstart: "",
            yearend: "",
            gpa: "",
            schoolid: this.state.schoolid + 1,
            showHideform: false,
            showHideEditEdubtn: true,
            showHideCancelbtn: false,
            showHideEditEdubtn: false,
            showHideAddbtn: true,
            showHideSaveEdubtn: false,
        });
    };

    toggleForm = () => {
        this.setState({
            school: "",
            prog: "",
            yearstart: "",
            yearend: "",
            gpa: "",
            showHideSaveEditbtn: false,
            showHideform: true,
            showHideAddbtn: false,
            showHideSaveEdubtn: true,
            showHideCancelbtn: true
        });
    };

    editForm = (e) => {
        this.setState({
            school: this.state.schools.map((array) => array.school)[
                e.target.parentElement.id
            ],
            prog: this.state.schools.map((array) => array.prog)[
                e.target.parentElement.id
            ],
            yearstart: this.state.schools.map((array) => array.yearstart)[
                e.target.parentElement.id
            ],
            yearend: this.state.schools.map((array) => array.yearend)[
                e.target.parentElement.id
            ],
            gpa: this.state.schools.map((array) => array.gpa)[
                e.target.parentElement.id
            ],
            editid: e.target.parentElement.id,
            showHideform: true,
            showHideEditEdubtn: false,
            showHideSaveEditbtn: true,
            showHideAddbtn: false,
            showHideCancelbtn: true,
            showHideSaveEdubtn: false,
            showHideDeletebtn: true
        });
    };

    saveEdit = () => {
        const newArray = this.state.schools.slice();

        newArray[this.state.editid] = new edu(
            this.state.school,
            this.state.prog,
            this.state.yearstart,
            this.state.yearend,
            this.state.gpa,
            this.state.editid
        );

        this.setState({
            schools: newArray,
            showHideSaveEditbtn: false,
            showHideAddbtn: true,
            showHideEditEdubtn: true,
            showHideCancelbtn: false,
            showHideform: false,
            showHideSaveEdubtn: false,
            showHideDeletebtn: false
        });
    };

    deleteEdu = () => {
        const newArray = this.state.schools.slice();

        newArray.splice(this.state.editid, 1)

        this.setState({
            schools: newArray,
            school: "",
            prog: "",
            yearstart: "",
            yearend: "",
            gpa: "",
            showHideform: false,
            showHideEditEdubtn: true,
            showHideAddbtn: true,
            showHideCancelbtn: false,
            showHideSaveEdubtn: false,
            showHideDeletebtn: false
        })
    }

    cancelForm = () => {
        this.setState({
            school: "",
            prog: "",
            yearstart: "",
            yearend: "",
            gpa: "",
            showHideform: false,
            showHideEditEdubtn: true,
            showHideAddbtn: true,
            showHideCancelbtn: false,
            showHideSaveEdubtn: false
        });
    };



    render() {
        const {
            school,
            prog,
            yearstart,
            yearend,
            gpa,
            schools,
            schoolid,
            showHideform,
            showHideSaveEditbtn,
            showHideAddbtn,
            showHideCancelbtn,
            showHideSaveEdubtn,
            showHideDeletebtn
        } = this.state;

        return (
            <div>
                {showHideform && (
                    <form id="eduForm" className="resForm">
                        <input
                            type="text"
                            placeholder="Enter the Institution Name"
                            id="schoolName"
                            value={school}
                            onChange={this.schoolChange}
                        ></input>
                        <input
                            type="text"
                            placeholder="Enter the Programme Name"
                            id="progName"
                            value={prog}
                            onChange={this.progChange}
                        ></input>
                        <input
                            type="text"
                            placeholder="Enter the Starting Year"
                            id="yearStart"
                            value={yearstart}
                            onChange={this.yearstartChange}
                        ></input>
                        <input
                            type="text"
                            placeholder="Enter the Ending Year"
                            id="yearEnd"
                            value={yearend}
                            onChange={this.yearendChange}
                        ></input>
                        <input
                            type="text"
                            placeholder="Enter your GPA"
                            id="gpaInput"
                            value={gpa}
                            onChange={this.gpaChange}
                        ></input>
                        {showHideSaveEditbtn && (
                            <button type="button" onClick={this.saveEdit} className="formBtn">
                                Save Edit
                            </button>
                        )}
                        {(showHideDeletebtn &&
                            <button type="button" onClick={this.deleteEdu} className="formBtn">
                                Delete Education
                            </button>
                        )}
                        {showHideSaveEdubtn && (
                            <button type="button" onClick={this.saveSection} className="formBtn">
                                Save Education
                            </button>
                        )}
                        {showHideCancelbtn && (
                            <button type="button" onClick={this.cancelForm} className="formBtn">
                                Cancel
                            </button>
                        )}
                    </form>
                )}
                <div>
                    {schools.map((item, index) => {
                        return (
                            <div key={uniqid()} id={index}>
                                <h2>School: {item.school}</h2>
                                <h2>Programme: {item.prog}</h2>
                                <h4>Starting Year: {item.yearstart}</h4>
                                <h4>Ending Year: {item.yearend}</h4>
                                <h4>GPA: {item.gpa}</h4>
                                <button type="button" onClick={this.editForm} className="formBtn">
                                    Edit Education
                                </button>
                            </div>
                        );
                    })}
                    {showHideAddbtn && (
                        <button type="button" onClick={this.toggleForm} className="formBtn">
                            Add New Education
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default Education;
