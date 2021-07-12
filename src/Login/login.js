import { Component } from "react";
import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import './login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isError: ''
        }
    }

    componentDidMount() {
        if (this.props.userName === 'hruday@gmail.com' && this.props.password === 'hruday123') {
            this.props.history.push('/');
        }
    }

    handleLogin = () => {
        if (this.state.userName === 'hruday@gmail.com' && this.state.password === 'hruday123') {
            this.props.loginUser(this.state.userName, this.state.password);
            this.props.history.push('/user-list');
        } else if (!this.state.userName || !this.state.password) {
            this.setState({
                isError: 'Empty Field'
            }) 
        } else {
            this.setState({
                isError: 'Invalid user'
            }) 
        }
    }
    handleUserName = event => {
        this.setState({
            userName: event.target.value,
            isError: ''
        })
    }
    handlePassword = event => {
        this.setState({
            password: event.target.value,
            isError: ''
        })
    }
    render() {
        if (this.props.userName === 'hruday@gmail.com' && this.props.password === 'hruday123') {
            this.props.history.push('/user-list');
        }
        return (
            <div className="login-user">
                 <div className="user-login-card">
                    <div className="title-section">
                        <div>Login</div>
                    </div>
                    <div className="card-body">
                        <div className="data-row jc-sb-ai-c">
                            <input id="user-name" className="input-box" type="text" placeholder="User Name" onChange={this.handleUserName}/>
                        </div>
                        <div className="data-row jc-sb-ai-c">
                            <input className="input-box" type="password" placeholder="Password" onChange={this.handlePassword}/>
                        </div>
                        {
                            this.state.isError ?
                                <div className="validation-error">
                                    {this.state.isError}
                                </div>: null
                        }
                        <div>
                            <button className="login-user-button" type="button" onClick={this.handleLogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}

const mapStateToPros = state => {
    console.log('state: ', state);
    return {
      userName: state.userName,
      password: state.password
    };
  };
const mapDispatchToProps = dispatch => {
    return {
      loginUser: (userName, password) => dispatch({ 
          type: 'login-user',
          userName: userName,
          password: password
        })
    }
  };
export default connect(mapStateToPros, mapDispatchToProps)(Login);