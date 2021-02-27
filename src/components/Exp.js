import React, { Component } from "react";
import uniqid from "uniqid";

class job {
    constructor(position, company, yearstart, yearend, description) {
        this.position = position;
        this.company = company;
        this.yearstart = yearstart;
        this.yearend = yearend;
        this.description = description;
    }
}

class Exp extends Component {
    constructor() {
        super();

        this.state = {
            position: "",
            company: "",
            yearstart: "",
            yearend: "",
            description: "",
            jobid: 0,
            jobs: [],
            editid: 0,
            showHideform: false,
            showHideAddbtn: true,
            showHideSaveExpbtn: false,
            showHideEditExpbtn: false,
            showHideSaveEditbtn: false,
            showHideCancelbtn: false,
            showHideDeletebtn: false
        }
    }

    positionChange = (e) => {
        this.setState({
            position: e.target.value,
        })
    }

    companyChange = (e) => {
        this.setState({
            company: e.target.value,
        })
    }

    yearstartChange = (e) => {
        this.setState({
            yearstart: e.target.value,
        })
    }

    yearendChange = (e) => {
        this.setState({
            yearend: e.target.value,
        })
    }

    descriptionChange = (e) => {
        this.setState({
            description: e.target.value,
        })
    }

    saveSection = () => {
        this.setState({
            jobs: this.state.jobs.concat(new job(this.state.position, this.state.company, this.state.yearstart, this.state.yearend, this.state.description)),
            position: "",
            company: "",
            yearstart: "",
            yearend: "",
            description: "",
            jobid: this.state.jobid + 1,
            showHideform: false,
            showHideEditExpbtn: true,
            showHideCancelbtn: false,
            showHideEditExpbtn: false,
            showHideAddbtn: true,
            showHideSaveExpbtn: false,
        })
    }

    toggleForm = () => {
        this.setState({
            position: "",
            company: "",
            yearstart: "",
            yearend: "",
            description: "",
            showHideSaveEditbtn: false,
            showHideform: true,
            showHideAddbtn: false,
            showHideSaveExpbtn: true,
            showHideCancelbtn: true
        })
    }

    editForm = (e) => {
        this.setState({
            position: this.state.jobs.map((array) => array.position)[
                e.target.parentElement.id
            ],
            company: this.state.jobs.map((array) => array.company)[
                e.target.parentElement.id
            ],
            yearstart: this.state.jobs.map((array) => array.yearstart)[
                e.target.parentElement.id
            ],
            yearend: this.state.jobs.map((array) => array.yearend)[
                e.target.parentElement.id
            ],
            description: this.state.jobs.map((array) => array.description)[
                e.target.parentElement.id
            ],
            editid: e.target.parentElement.id,
            showHideform: true,
            showHideEditExpbtn: false,
            showHideSaveEditbtn: true,
            showHideAddbtn: false,
            showHideCancelbtn: true,
            showHideSaveExpbtn: false,
            showHideDeletebtn: true
        })
    }

    saveEdit = () => {
        const newArray = this.state.jobs.slice();

        newArray[this.state.editid] = new job(
            this.state.position,
            this.state.company,
            this.state.yearstart,
            this.state.yearend,
            this.state.description,
            this.state.editid
        );

        this.setState({
            jobs: newArray,
            showHideSaveEditbtn: false,
            showHideAddbtn: true,
            showHideEditExpbtn: true,
            showHideCancelbtn: false,
            showHideform: false,
            showHideSaveExpbtn: false,
            showHideDeletebtn: false
        });
    };

    deleteExp = () => {
        const newArray = this.state.jobs.slice();

        newArray.splice(this.state.editid, 1)

        this.setState({
            jobs: newArray,
            position: "",
            company: "",
            yearstart: "",
            yearend: "",
            description: "",
            showHideform: false,
            showHideEditExpbtn: true,
            showHideAddbtn: true,
            showHideCancelbtn: false,
            showHideSaveExpbtn: false,
            showHideDeletebtn: false
        })
    }

    cancelForm = () => {
        this.setState({
            position: "",
            company: "",
            yearstart: "",
            yearend: "",
            description: "",
            showHideform: false,
            showHideEditExpbtn: true,
            showHideAddbtn: true,
            showHideCancelbtn: false,
            showHideSaveExpbtn: false
        })
    }

    render() {
        const { position,
            company,
            yearstart,
            yearend,
            description,
            jobs,
            showHideform,
            showHideSaveEditbtn,
            showHideAddbtn,
            showHideCancelbtn,
            showHideSaveExpbtn,
            showHideDeletebtn } = this.state;

        return (
            <div>
                {showHideform && (
                    <form id="expForm" className="resForm">
                        <input
                            type="text"
                            placeholder="Enter the Position Name"
                            id="positionName"
                            value={position}
                            onChange={this.positionChange}>
                        </input>
                        <input
                            type="text"
                            placeholder="Enter the Company"
                            id="companyName"
                            value={company}
                            onChange={this.companyChange}>
                        </input>
                        <input
                            type="text"
                            placeholder="Enter the starting year"
                            id="yearStart"
                            value={yearstart}
                            onChange={this.yearstartChange}>
                        </input>
                        <input
                            type="text"
                            placeholder="Enter the ending year"
                            id="yearEnd"
                            value={yearend}
                            onChange={this.yearendChange}>
                        </input>
                        <input
                            type="text"
                            placeholder="Enter a summary of your duties"
                            id="description"
                            value={description}
                            onChange={this.descriptionChange}>
                        </input>
                        {showHideSaveEditbtn && (
                            <button type="button" onClick={this.saveEdit} className="formBtn">
                                Save Edit
                            </button>
                        )}
                        {(showHideDeletebtn &&
                            <button type="button" onClick={this.deleteExp} className="formBtn">
                                Delete Work Experience
                            </button>
                        )}
                        {showHideSaveExpbtn && (
                            <button type="button" onClick={this.saveSection} className="formBtn">
                                Save Work Experience
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
                    {jobs.map((job, index) => {
                        return (
                            <div key={uniqid()} id={index}>
                                <h2>Position: {job.position}</h2>
                                <h2>Company: {job.company}</h2>
                                <h4>Starting Year: {job.yearstart}</h4>
                                <h4>Ending Year: {job.yearend}</h4>
                                <h4>Description: {job.description}</h4>
                                <button className="formBtn" onClick={this.editForm}>Edit Job</button>
                            </div>
                        )
                    })}
                    {showHideAddbtn && (
                        <button type="button" onClick={this.toggleForm} className="formBtn">
                            Add New Work Experience
                        </button>
                    )}
                </div>
            </div>
        )
    }
}

export default Exp;

