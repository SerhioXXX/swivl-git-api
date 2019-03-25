import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


import {withApiService} from '../hoc';
import {fetchUserInfo}  from '../../actions';
import {compose} from '../../utils';

import './user-page.css';

class UserPageContainer extends Component {

  componentDidMount(){
    const {username} = this.props;
    this.props.fetchUserInfo(username);
  }

  render(){
    const { userinfo, loading, error} = this.props;
    console.log(userinfo);

    if(loading){
      return <Spinner/>
    }
    if(error){
      return <ErrorIndicator/>
    }

    return (
      <div className='user-page'>
       <Link className="user-link" to='/users'>go back to Users list</Link>
       <img className="user-img" src={userinfo.avatar_url} alt="avatar"/>
       <span className="user-info">Name: {userinfo.name}</span>
       <span className="user-info">Followers: {userinfo.followers}</span>
       <span className="user-info">Following: {userinfo.following}</span>
       <span className="user-info">Created at: {userinfo.created_at}</span>
       <span className="user-info">Company: {userinfo.company}</span>
       <span className="user-info">Email: {userinfo.email}</span>
       <span className="user-info">Location: {userinfo.location}</span>
       <a href={userinfo.blog} className="user-info" target="_blank" rel="noopener noreferrer">Blog: {userinfo.blog}</a>
       <span className="user-info">Bio: {userinfo.bio}</span>
      </div>
    )
  }
}

const mapStateToProps = ({userinfo, loading, error})=>{
  return {userinfo, loading, error}
}
const mapDispatchToProps = (dispatch,ownProps) => {
  const {apiService} = ownProps;
  return {
    fetchUserInfo: fetchUserInfo(apiService, dispatch)
  }
}

export default compose (
  withApiService(),
  connect(mapStateToProps,mapDispatchToProps)
)(UserPageContainer)