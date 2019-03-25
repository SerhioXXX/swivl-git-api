import React from 'react';
import UserPageContainer from '../user-page';

const UserPage = (props) => {
  return <UserPageContainer username={props.username}/>
}

export default UserPage;