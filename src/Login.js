import React, { Component } from 'react';

export default class Login extends Component{

    handleSubmit = (e) => {
        this.props.submitLogin(e)
        e.target.reset()
    }

    handleOnChange = (e) => {
        this.props.changeLogin(e)
    }

    render(){
        console.log(this.props.errMsg);
        return(
            <>
                <div className="center">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="text-field">
                            <input type="text" name='uname' ref={this.props.refUsername} onChange={this.handleOnChange} required/>
                            <span></span>
                            <label>Username</label>
                        </div>
                        <div className="text-field">
                            <h4>{this.props.errMsg}</h4>
                            <input type="password" name='pwd' ref={this.props.refPassword} onChange={this.handleOnChange}  required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className="pass">Forgot Password?</div>
                        <button type="submit" className='btn-login' disabled={this.props.disableBtn}>Login</button>
                        <div className="signup-link">
                            Not a member? <a href='#' onClick={this.register}>Signup</a>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}