import React , {Component} from 'react';
import { connect } from 'react-redux';

import './userList.css';
class UserList extends Component {
    componentDidMount() {
        if (this.props.userName !== 'hruday@gmail.com' && this.props.password !== 'hruday123') {
            this.props.history.push('/');
        }
    }
    render() {
        const listItems = this.props.userList.map((d) => <div key={d.id} className="user-info ai-c"> 
            <div className="w-20-p title-column">{d.name}</div> 
            <div className="w-20-p title-column">{d.age}</div>
            <div className="w-20-p title-column">{d.gender}</div>
            <div className="w-20-p title-column">{d.email}</div>
            <div className="w-20-p title-column">{d.phoneNo}</div>
        </div>);
        return (
            <div className="main">
                <div className="w-100-p">
                    <div className="jc-sb-ai-c action-bar">
                        <div className="users">
                            Users
                        </div>
                    <div className="ai-c">
                        <div className="number-of-user">
                            Number of users: {this.props.userList.length}
                        </div>
                    </div>
                </div>
                <div className="table-title-bar d-flex">
                    <div className="w-20-p title-column">
                        User Name
                    </div>
                    <div className="w-20-p title-column">
                        Age
                    </div>
                    <div className="w-20-p title-column">
                        Gender
                    </div>
                    <div className="w-20-p title-column">
                        Email
                    </div>
                    <div className="w-20-p title-column">
                        Phone No.
                    </div>
                </div>
                {
                    listItems? 
                    <div>
                        {listItems}
                    </div>: null}
            </div>
        </div>
        )
    }
}

const mapStateToPros = state => {
    console.log('state: ', state);
    return {
        userList: state.userData,
        userName: state.userName,
        password: state.password
    };
  };

export default connect(mapStateToPros)(UserList);