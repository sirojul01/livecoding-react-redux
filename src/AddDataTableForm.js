import React, { Component } from "react";

export default class AddDataTableForm extends Component{

    handleCancel = () => {
        this.props.cancel(true)
    }

    handleSubmit = (e) => {
        this.props.submit(e)
    }

    handleChange = (e) => {
        this.props.onChange(e)
    }

    render(){
        return(
            <>
                <div className="center-food">
                    <h1>Add Data Table</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="text-field">
                            <input type="text" name='name' onChange={this.handleChange} required/>
                            <span></span>
                            <label>Number Table</label>
                        </div>
                        <div className="text-field">
                            <input type="text" name='statusTable' onChange={this.handleChange} required/>
                            <span></span>
                            <label>Status</label>
                        </div>
                        <button type="submit" className="btn-add btn-cancel" onClick={this.handleCancel}>Cancel</button>
                        <button type="submit" className="btn-add">Add</button>
                        <div className="signup-link">
                        </div>
                    </form>
                </div>
            </>
        )
    }
}