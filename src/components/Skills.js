import React, { Component } from 'react';
import uniqid from 'uniqid';

class Skills extends Component {
    constructor() {
        super();

        this.state = {
            skill: "",
            skills: [],
            skillid: 0,
            editid: 0,
            saveSkillbtn: true,
            deleteSkillbtn: false,
            editSkillbtn: false,
            saveEditSkillbtn: false,
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
            skillid: this.state.skillid + 1,
            editSkillListbtn: true,
        })
    }

    editSkill = (e) => {
        this.setState({
            skill: this.state.skills[e.target.parentElement.id],
            editid: e.target.parentElement.id,
            saveEditSkillbtn: true,
            saveSkillbtn: false,
        })
    }

    saveEdit = () => {
        const newArray = this.state.skills.slice();

        newArray[this.state.editid] = this.state.skill;

        this.setState({
            skill: "",
            skills: newArray,
            saveEditSkillbtn: false,
            saveSkillbtn: true,
        })
    }

    deleteSkill = (e) => {
        const newArray = this.state.skills.slice();

        newArray.splice(e.target.parentElement.id, 1);

        this.setState({
            skills: newArray,
        })
    }

    showEditDelete = () => {
        this.setState({
            deleteSkillbtn: !this.state.deleteSkillbtn,
            editSkillbtn: !this.state.editSkillbtn,
        })
    }

    checkList = () => {
        if (this.state.skills.length != 0) {
            this.setState({
                editSkillListbtn: true,
            })
        } else {
            this.setState({
                editSkillListbtn: false,
            })
        }
    }

    checkAndDelete = (e) => {
        this.deleteSkill(e);
        this.checkList();
        console.log(this.state.skills);
    }

    render() {
        const { skill, skills, deleteSkillbtn, editSkillbtn, saveEditSkillbtn, saveSkillbtn, editSkillListbtn } = this.state;

        return (
            <div>
                <form id="skillsForm" className="resForm">
                    <h3>Skills</h3>
                    <input
                        type="text"
                        id="skillInput"
                        placeholder="Enter a new Skill"
                        value={skill}
                        onChange={this.skillChange}
                    ></input>
                </form>
                {saveSkillbtn && (
                <button type="button" onClick={this.saveSection}>Save Skill</button>
                )}
                {saveEditSkillbtn && (
                    <button type="button" className="formBtn" onClick={this.saveEdit}>Save Edit</button>
                )}
                <ul>
                    {skills.map((item, index) => {
                        return (
                            <li key={uniqid()} id={index}>
                                {item}
                                {editSkillbtn && (
                                <button type="button" className="formBtn" onClick={this.editSkill}>&#9998;</button>
                                )}
                                {deleteSkillbtn && (
                                <button type="button" className="formBtn" onClick={this.checkAndDelete}>&#10005;</button>
                                )}
                            </li>
                        )
                    })}
                </ul>
                    {editSkillListbtn && (
                    <button type="button" className="formBtn" onClick={this.showEditDelete}>Edit Skill List</button>
                    )}
            </div>

        )
    }
}

export default Skills;