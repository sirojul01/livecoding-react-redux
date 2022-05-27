import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ListFood from "../menu/ListFood";
import { setAuthLogin, logout, showDashboard, showLogin } from "../redux";
import { showMenu } from "../redux/menu/MenuAction";
import { showTable } from "../redux/table/TableAction";
import ListTable from "../table/ListTable";

const Dashboard = (props) => {

    const data = useSelector(state=> state);
    const dispatch = useDispatch();
    console.log(data);
    console.log(dispatch);

    const login = () => {
        props.showDashboard(false)
        props.showLogin(true)
        props.logout(false)
    }

    const logout = () => {
        props.showLogin(false)
        props.logout(false)
        props.setAuthLogin(false)
    }

    const listFood = () => {
        props.showTable(false)
        props.showMenu(true)
    }

    const listTable = () => {
        props.showMenu(false)
        props.showTable(true)
    }

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
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                            {props.authLogin ? (
                                    <>
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        Our List Menu
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#" onClick={listTable}>List Table Menu</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={listFood}>List Food Menu</a></li>
                                        {/* <li><a className="dropdown-item" href="#">Product Three</a></li> */}
                                    </ul>
                                </div>
                                
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 p-2">{props.dataAdmin}</span>
                                    <button className="btn btn-danger ms-3" onClick={logout} href="">Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <button className="btn btn-light ms-3" onClick={login}>Login</button>
                                    </>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {props.authLogin ? (
                
                <>
                {props.table ?(
                    <>
                            <ListTable /> 
                    </>
                ):(
                    <>
                        {props.menu ?(
                            <>
                                <ListFood />
                            </>
                        ):(
                            <>
                                <h1 className="text-center pt-5">Welcome {props.dataAdmin}</h1>
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

    const mapStateToProps = (state) => {
        return{
            menu: state.menu.showMenu,
            table: state.table.showTable,
            authLogin: state.login.authLogin,
            dataAdmin: state.login.dataAdmin.username
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            showLogin : (set) => dispatch(showLogin(set)),
            setAuthLogin : (set) => dispatch(setAuthLogin(set)),
            showDashboard: (set) => dispatch(showDashboard(set)),
            showMenu: (set) => dispatch(showMenu(set)),
            showTable: (set) => dispatch(showTable(set)),
            logout: (set) => dispatch(logout(set))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);