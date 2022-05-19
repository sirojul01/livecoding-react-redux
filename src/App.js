import React, { Component } from 'react';
import AddDataFoodForm from './AddDataFoodForm';
import AddDataTableForm from './AddDataTableForm';
import './css/styles.css';
import Dashboard from './Dashboard';
import ListFood from './ListFood';
import ListTable from './ListTable';
import Login from './Login';

export default class App extends Component{

  state = {
    isAuth: false,
    isLogin: false,
    addFood: false,
    listFood: false,
    addTable: false,
    listTable: false,
    isLogout: true,
    isDashboard: true,
    dataAdmin: {
      username: "admin@example.com",
      password: "12345678"
    },
    formFood: {
      id : 0,
      name: "",
      price: ""
    },
    dataFood: [],
    formTable: {
      id: 0,
      name: "",
      statusTable: "",
    },
    dataTable: [],
    errMsg : "",
    disableBtn: false

  }

  inputName = React.createRef(null)
  inputPassword = React.createRef(null)

  setIsDashboard = (auth) => {
    this.setState({
      isDashboard : auth
    })
  }

  setIsLogin = (auth) => {
    this.setState({
      isLogin: auth
    })
  }

  handleSubmitLogin = (e) => {
    if( this.inputName.current.name === 'uname' &&  
    this.inputName.current.value === this.state.dataAdmin.username &&
    this.inputPassword.current.name === 'pwd' &&  
    this.inputPassword.current.value === this.state.dataAdmin.password
    ){
      this.setState({
        isAuth : true,
        isDashboard: true,
        isLogout : true
      })
    } else {
      this.setIsDashboard(false)
      this.setIsLogin(true)
      this.setState({
        isDashboard: false,
        isAuth: false,
        isLogin: true,
        isLogout: true
      })
      console.log(this.state.isDashboard, this.state.isLogin);
      alert('password salah')
    }
  }

  handleChangeLogin = (e) => {
    if(e.target.name === 'pwd' && e.value.length < 6){
      this.setState({
        errMsg: "6 min length character",
        disableBtn: true
      })
    }
  }

  handleListFood = (auth) => {
    this.setState({
      listFood:auth
    })
  }

  handleListTable = (auth) => {
    this.setState({
      listTable:auth
    })
  }

  handleLogout = (auth) => {
    this.setState({
      isLogout : true,
      isAuth: false,
      listFood: false
    })
  }

  handleAddFood = (auth) => {
      this.setState({
        // addTable:false,
        addFood: auth,
        isDashboard: false,
        isLogin: false,
        // listFood:false
      })
  }

  handleAddTable = (auth) => {
    this.setState({
      addFood: false,
      addTable: auth,
      isDashboard: false,
      isLogin: false,
      // listTable:false,
    })
}

  handleCancelAddFormFood = (auth) => {
    this.setState({
      isDashboard: auth,
      addFood:false
    })
  }

  handleCancelAddFormTable = (auth) => {
    this.setState({
      isDashboard: auth,
      addTable:false
    })
  }

  handleSubmitFood = (e) =>{
    const list = [...this.state.dataFood]
    list.push(this.state.formFood)
    this.setState({
      dataFood: list,
      isDashboard: true,
      listFood: true,
      // listTable: false
    })
    e.preventDefault();
  }

  handleChangeFood = (e) =>{
    if(e.target.name === 'name'){
      this.setState({
        formFood : {...this.state.formFood, id: this.state.formFood.id+1, name: e.target.value}
      })
    } else if(e.target.name === 'price'){
      this.setState({
        formFood : {...this.state.formFood, price: e.target.value}
      })
    } else {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
  }

  handleSubmitTable = (e) =>{
    const list = [...this.state.dataTable]
    list.push(this.state.formTable)
    this.setState({
      dataTable: list,
      isDashboard: true,
      listTable: true,
      // listFood:false
    })
    e.preventDefault();
  }

  handleChangeTable = (e) =>{
    if(e.target.name === 'name'){
      this.setState({
        formTable : {...this.state.formTable, id: this.state.formTable.id + 1, name: e.target.value}
      })
    } else if(e.target.id === 'statusTable'){
      this.setState({
        formTable : {...this.state.formTable, statusTable: e.target.value}
      })
    } else {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
  }


  render(){
    if(this.state.isDashboard || !this.state.isLogout){
      return(
        <>
           <Dashboard 
           authLogin={this.state.isAuth} 
           dataAdmin={this.state.dataAdmin} 
           login={this.setIsLogin}
           logout={this.handleLogout} 
           dashboard={this.setIsDashboard}
           listFood={this.handleListFood}
           listTable={this.handleListTable}
           food={this.state.listFood}
           table={this.state.listTable}
           addFood={this.handleAddFood}
           addTable={this.handleAddTable}
           dataFood={this.state.dataFood}
           dataTable={this.state.dataTable}
           />
        </>
      )
    } else if(this.state.isLogin){
      return(
        <>
          <Login 
          refUsername={this.inputName}
          refPassword={this.inputPassword}
          submitLogin={this.handleSubmitLogin}
          changeLogin={this.handleChangeLogin}
          errMsg={this.state.errMsg}
          disableBtn={this.state.disableBtn}
          />
        </>
      )
    } else if(this.state.addFood){
      return(
      <>
        <AddDataFoodForm cancel={this.handleCancelAddFormFood} submit={this.handleSubmitFood} onChange={this.handleChangeFood}/>
      </>
      )
    } else if(this.state.addTable){
      return(
      <>
        <AddDataTableForm cancel={this.handleCancelAddFormTable} submit={this.handleSubmitTable} onChange={this.handleChangeTable}/>
      </>
      )
    }
    // return(
    //   <>
    //     {/* <Login /> */}
    //     {/* <ListFood /> */}
    //     {/* <ListTable /> */}
       
    //     {/* <AddDataFoodForm /> */}
    //     {/* <AddDataTableForm /> */}
      // </>
    // )
  }
}