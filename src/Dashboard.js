import React, { Component } from "react";
import ListFood from "./ListFood";
import ListTable from "./ListTable";

export default class Dashboard extends Component{

    login = () => {
        this.props.login(true);
        this.props.dashboard(false);
    }

    logout = () => {
        this.props.logout(true)
    }

    listFood = () => {
        this.props.listTable(false)
        this.props.listFood(true)
    }

    listTable = () => {
        this.props.listFood(false)
        this.props.listTable(true)
    }

    render(){
        return(
            <>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="container">
                            <a className="navbar-brand" href="#">WMB</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            View More
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Web Development</a></li>
                                            <li><a className="dropdown-item" href="#">Web Designing</a></li>
                                            <li><a className="dropdown-item" href="#">Android Development</a></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact Us</a>
                                    </li>
                                </ul>
                                <div className="d-flex">
                                {this.props.authLogin ? (
                                        <>
                                    <div className="dropdown">
                                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Our List Menu
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><a className="dropdown-item" href="#" onClick={this.listTable}>List Table Menu</a></li>
                                            <li><a className="dropdown-item" href="#" onClick={this.listFood}>List Food Menu</a></li>
                                            {/* <li><a className="dropdown-item" href="#">Product Three</a></li> */}
                                        </ul>
                                    </div>
                                    
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 p-2">{this.props.dataAdmin.username}</span>
                                        <button className="btn btn-danger ms-3" onClick={this.logout}>Logout</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="btn btn-light ms-3" onClick={this.login}>Login</button>
                                        </>
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                {this.props.authLogin ? (
                    
                    <>
                    {this.props.table ?(
                        <>
                             <ListTable addTable={this.props.addTable} data={this.props.dataTable}/> 
                        </>
                    ):(
                        <>
                            {this.props.food ?(
                                <>
                                    <ListFood addFood={this.props.addFood} data={this.props.dataFood}/>
                                </>
                            ):(
                                <>
                                    <h1 className="text-center pt-5">Welcome {this.props.dataAdmin.username}</h1>
                                </>
                            )}
                        </>
                    )}
                         
                    </>
                ) : (
                    <>
                        <h1 className="text-center pt-5">Silahkan Login</h1>
                    </>
                )}
            </>
        )
    }
}