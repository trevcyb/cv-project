import React, { Component } from 'react';
import uniqid from 'uniqid';

class Skills extends Component {
    constructor() {
        super();

        this.state = {
            skill: "",
            skills: [],
        }
    }

    skillChange = (e) => {
        this.setState({
            skill: e.target.value,
        })
    }

    saveSection = () => {
        this.setState({
            skills: this.state.skills.concat(this.state.skill),
            skill: "",
        })
    }

    render() {
        const { skill, skills } = this.state;

        return (
            <div>
                <form id="skillsForm" className="resForm">
                    <input
                        type="text"
                        id="skillInput"
                        placeholder="Enter a new Skill"
                        value={skill}
                        onChange={this.skillChange}
                    ></input>
                </form>
                <button type="button" onClick={this.saveSection}>Save Skill</button>
                <ul>
                    {skills.map((item) => {
                        return <li key={uniqid()}>{item}</li>
                    })}
                </ul>
            </div>

        )
    }
}

export default Skills;