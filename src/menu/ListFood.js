import React from "react";
import { connect, useSelector } from 'react-redux';
import { deleteDataMenu, showDashboard, showLogin, showMenuForm } from "../redux";



const ListFood = (props) =>{

    // const data = useSelector();
    // console.log(data);

    const handleAddFood = () => {
        props.setShowMenuForm(true)
        props.showLogin(false)
        props.showDashboard(false)
    }

    const handleDeleteMenu = (e) => {
        const data = e;
        props.deleteDataMenu(data)
    }


        return(
            <>
                <div className="container-md m-2 mx-auto">
                    <h1 className="text-center"> List Data Food </h1>
                    <div className="d-grid gap-2 col-4 mx-auto shadow-lg my-5">
                        <button id="add_data" className="btn btn-primary" type="button" onClick={handleAddFood}><i className="bi bi-plus-lg"></i> Add Data Food Menu</button>
                    </div>
                    <table className="table">
                        <thead className="table-dark table-header">
                        <tr className="text-white">
                            <td>#</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tbody id="table_body">
                            
                                {
                                props.listFood.map((data, i) => {
                                    return(
                                        <tr className="text-white" key={i}>
                                            <td id="number">{i+1}</td>
                                            <td id="first">{data.name}</td>
                                            <td id="last">{data.price}</td>
                                            <td><button className="btn btn-danger" onClick={handleDeleteMenu}>Delete</button></td>
                                        </tr>
                                    )}
                                )}
                        </tbody>
                    </table>
                </div>
            </>
        )
}

    const mapStateToProps = (state) => {
        return{
            listFood : state.menu.data
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            showLogin : (set) => dispatch(showLogin(set)),
            showDashboard: (set) => dispatch(showDashboard(set)),
            setShowMenuForm: (set)=> dispatch(showMenuForm(set)),
            deleteDataMenu: (data) => dispatch(deleteDataMenu(data)),
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(ListFood)
// export default ListFood;