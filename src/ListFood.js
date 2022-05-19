import React, { Component } from "react";



export default class ListFood extends Component{

    handleAddFood = () => {
        this.props.addFood(true)
    }

    render(){
        return(
            <>
                <div className="container-md m-2 mx-auto">
                    <h1 className="text-center p-5"> List Data Food </h1>
                    <div className="d-grid gap-2 col-4 mx-auto shadow-lg my-5">
                        <button id="add_data" className="btn btn-primary" type="button" onClick={this.handleAddFood}><i className="bi bi-plus-lg"></i> Add Data Food Menu</button>
                    </div>
                    <table className="table">
                        <thead className="table-dark table-header">
                        <tr className="text-white">
                            <td>#</td>
                            <td>Name</td>
                            <td>Price</td>
                            {/* <td>Stock</td> */}
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tbody id="table_body">
                            
                                {this.props.data.map((data, i) => {
                                    return(
                                        <>
                                        <tr className="text-white">
                                            <td id="number">{data.id}</td>
                                            <td id="first">{data.name}</td>
                                            <td id="last">{data.price}</td>
                                            {/* <td>Available</td> */}
                                            <td><button className="btn btn-danger">Delete</button></td>
                                        </tr>
                                        </>
                                    )}
                                )}
                            
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}