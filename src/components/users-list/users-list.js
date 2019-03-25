import React, {Component} from 'react';
import UserDetails from '../user-details';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


import {withApiService} from '../hoc';
import {fetchUsers}  from '../../actions';
import {compose} from '../../utils';

import './users-list.css';

const UsersList = ({users}) => {
  return (
    <ul className = "users-list">
    {users.map((user) =>{
      return (
        <li key={user.id}><UserDetails user={user}/></li>
      )
    }) }
    </ul>
  )
}

class UsersListContainer extends Component {

  componentDidMount(){
    this.props.fetchUsers();
  }

  render(){
    const { users, loading, error} = this.props;

    if(loading){
      return <Spinner/>
    }
    if(error){
      return <ErrorIndicator/>
    }

    return <UsersList users={users}/>
  }
}

const mapStateToProps = ({users, loading, error})=>{
  return {users, loading, error}
}
const mapDispatchToProps = (dispatch,ownProps) => {
  const {apiService} = ownProps;
  return {
    fetchUsers: fetchUsers(apiService, dispatch)
  }
  // usersLoaded,
  // usersRequested,
  // usersError
}
/*
const mapDispatchToProps = (dispatch) => {

/*with bindActionCreators*/
  // return bindActionCreators({
  //   usersLoaded
  // }, dispatch)

/*without bindActionCreators*/
  // return {
  //   usersLoaded: (newUsers)=>{

  //     dispatch(usersLoaded(newUsers))

  //     //1
  //     // dispatch({
  //     //   type: 'USERS_LOADED',
  //     //   payload: newUsers
  //     // })
  //   }
  // }
//}
export default compose (
  withApiService(),
  connect(mapStateToProps,mapDispatchToProps)
)(UsersListContainer)