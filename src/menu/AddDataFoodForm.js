import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { addDataMenu, showDashboard, showMenuForm } from "../redux"

const AddDataFoodForm = (props) => {

    const [formFood, setFormFood] = useState({id: "", name: "", price: ""})

    const handleCancel = () => {
        props.showDashboard(true)
        props.cancelMenuForm(false)
    }

    const handleSubmit = (e) => {
        props.addDataMenu(formFood)
        props.showDashboard(true)
        e.preventDefault()
    }

    const handleChange = (e) => {
        if(e.target.name === 'id'){
            setFormFood({...formFood, id: e.target.value})
          }else if(e.target.name === 'name'){
            setFormFood({...formFood, name: e.target.value})
          } else if(e.target.name === 'price'){
            setFormFood({...formFood, price: e.target.value})
          } else {
            setFormFood({[e.target.name] : e.target.value})
          }
    }

        return(
            <>
                <div className="center-food">
                    <h1>Add Data Food Menu</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="text-field">
                            <input type="text" name='id' onChange={handleChange} required/>
                            <span></span>
                            <label>Id</label>
                        </div>
                        <div className="text-field">
                            <input type="text" name='name' onChange={handleChange} required/>
                            <span></span>
                            <label>Name Product</label>
                        </div>
                        <div className="text-field">
                            <input type="text" name='price' onChange={handleChange}  required />
                            <span></span>
                            <label>Price</label>
                        </div>
                        <button type="submit" className="btn-add btn-cancel" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="btn-add">Add</button>
                        <div className="signup-link">
                        </div>
                    </form>
                </div>
            </>
        )
}


    const mapDispatchToProps = (dispatch) => {
        return {
            addDataMenu: (data) => dispatch(addDataMenu(data)),
            cancelMenuForm: set => dispatch(showMenuForm(set)),
            showDashboard: (set) => dispatch(showDashboard(set))
        }
    }
export default connect(null, mapDispatchToProps)(AddDataFoodForm)