import React from 'react';
import { Link } from 'react-router-dom';
import './user-details.css';

const UserDetails = ({user}) =>{
  const {login, html_url,avatar_url} = user;

  return (
    <div className='user-list'>
     <div className='user-details'>
     <Link to={'users/'+login}><img className="user-img" src={avatar_url} alt="avatar"/></Link>
      <div className="user-login">Login: <span className="user-login-text">{login}</span></div>
      <div className="user-link">Profile link: <a href={html_url} target="_blank" rel="noopener noreferrer">{html_url}</a></div>
     </div>
    </div>

  )
}

export default UserDetails;