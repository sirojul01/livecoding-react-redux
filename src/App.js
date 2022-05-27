import React, { Component } from 'react';
import AddDataFoodForm from './menu/AddDataFoodForm';
import AddDataTableForm from './table/AddDataTableForm';
import './css/styles.css';
import Dashboard from './home/Dashboard';
import Login from './auth/Login';
import { connect } from 'react-redux';

const App = (props) => {

    if(props.showDashboard || props.logout){
      return(
        <>
           <Dashboard />
        </>
      )
    } else if(props.showLogin){
      return(
        <>
          <Login />
        </>
      )
    } else if(props.showMenuForm){
      return(
      <>
        <AddDataFoodForm />
      </>
      )
    } else if(props.showTableForm){
      return(
      <>
        <AddDataTableForm />
      </>
      )
    }
  }

  const mapStateToProps = (state) => {
    return{
      showDashboard: state.home.showDashboard,
      showMenuForm: state.menu.showMenuForm,
      showTableForm: state.table.showTableForm,
      showLogin: state.login.showLogin,
      logout: state.logout.logout
    }
  }

export default connect(mapStateToProps, null)(App)