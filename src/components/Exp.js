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
            showHideform: false,
            showHidebtn: true,
            showHideEditbtn: false,
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
            jobs: this.state.jobs.concat([new job(this.state.position, this.state.company, this.state.yearstart, this.state.yearend, this.state.description)]),
            position: "",
            company: "",
            yearstart: "",
            yearend: "",
            description: "",
            showHideform: !this.state.showHideform,
            showHideEditbtn: !this.state.showHideEditbtn,
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
            position: "",
            company: "",
            yearstart: "",
            yearend: "",
            description: "",
            showHideform: !this.state.showHideform,
            showHideEditbtn: !this.state.showHideEditbtn,
        })
    }

    cancelForm = () => {
        this.setState({
            position: "",
            company: "",
            yearstart: "",
            yearend: "",
            description: "",
            showHideform: !this.state.showHideform,
            showHideEditbtn: !this.state.showHideEditbtn,
        })
    }

    render() {
        const { position, company, yearstart, yearend, description, jobs, showHideform, showHideEditbtn, showHidebtn } = this.state;

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
                    <button type="button" onClick={this.saveSection}>Save Work Experience</button>
                    <button type="button" onClick={this.cancelForm}>Cancel</button>
                </form>
                )}
                <div>
                    {jobs.map(job => {
                        return (
                            <div key={uniqid()}>
                                <h2>Position: {job.position}</h2>
                                <h2>Company: {job.company}</h2>
                                <h4>Starting Year: {job.yearstart}</h4>
                                <h4>Ending Year: {job.yearend}</h4>
                                <h4>Description: {job.description}</h4>
                                <button className="formBtn" onClick={this.editForm}>Edit Job</button>
                            </div>
                        )
                    })}
                    <button type="button" onClick={this.toggleForm}>Add New Work Experience</button>
                </div>
            </div>
        )
    }
}

export default Exp;

