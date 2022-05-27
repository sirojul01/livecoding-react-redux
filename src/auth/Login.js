import React, { useState } from 'react';
import { connect } from 'react-redux';
import {setAuthLogin, showDashboard, showLogin } from '../redux';

const Login = (props) => {
    const [errMsg , setErrMsg] = useState({username: "", password: ""})
    const [disableBtn, setDisableBtn] = useState(false)
    const [dataAdmin, setDataAdmin] = useState({username: "admin@example.com", password: "12345678"})

    const refUsername = React.createRef()
    const refPassword = React.createRef()

    let handleSubmit = (e) => {
        if( refUsername.current.name === 'uname' &&  
        refUsername.current.value === dataAdmin.username &&
        refPassword.current.name === 'pwd' &&  
        refPassword.current.value === dataAdmin.password
        ){
            props.isAuthLogin(true)
            props.showLogin(false)
            props.showDashboard(true)
        } else {
            alert('password salah')
            e.preventDefault()
            e.target.reset()
            props.login(true)
            props.showDashboard(false)
            props.logout(false)
        }
      }

    const handleOnChange = (e) => {
        if(e.target.name === 'uname' && !e.target.value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/)){
            setErrMsg({username: "*Invalid email format"})
            setDisableBtn(true)
        }else
        if(e.target.name === 'pwd' && e.target.value.length < 6){
            setErrMsg({password: "*6 min length character"})
            setDisableBtn(true)
        } else {
            setErrMsg({username: "", password: ""})
            setDisableBtn(false)
        }
    }

        return(
            <>
                <div className="center">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="text-field">
                            <input type="text" name='uname' ref={refUsername} onChange={handleOnChange} required/>
                            <span></span>
                            <label>Username</label>
                        </div>
                        <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}>{errMsg.username}</span>
                        <div className="text-field">
                            <input type="password" name='pwd' ref={refPassword} onChange={handleOnChange}  required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}>{errMsg['password']}</span>
                        <div className="pass">Forgot Password?</div>
                        <button type="submit" className='btn-login' disabled={disableBtn}>Login</button>
                        <div className="signup-link">
                            Not a member? <a href='#' style={{ textDecoration: 'none' }}>Signup</a>
                        </div>
                    </form>
                </div>
            </>
        )
    
}

    const mapStateToProps = (state) => {
        return {
            authLogin : state.login.authLogin
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            showDashboard: (set) => dispatch(showDashboard(set)),
            isAuthLogin : (set) => dispatch(setAuthLogin(set)),
            showLogin : (set) => dispatch(showLogin(set))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Login)