const usersRequested =()=>{
  return {
    type:'FETCH_USERS_REQUEST',
  }
}

const usersLoaded =(newUsers)=>{
  return {
    type:'FETCH_USERS_SUCCESS',
    payload: newUsers
  }
}
const userinfoLoaded =(userinfo)=>{
  return {
    type:'FETCH_USERINFO_SUCCESS',
    payload: userinfo
  }
}

const usersError =(error)=>{
  return {
    type:'FETCH_USERS_FAILURE',
    payload: error
  }
}

const fetchUsers = (apiService, dispatch) => () => {
  dispatch(usersRequested());
  apiService.getUsers().then((data) => dispatch(usersLoaded(data))).catch((err)=> dispatch(usersError(err))); 
}
const fetchUserInfo = (apiService, dispatch) => (username) => {
  dispatch(usersRequested());
  apiService.getUserinfo(username).then((data) => dispatch(userinfoLoaded(data))).catch((err)=> dispatch(usersError(err))); 
}

export {
  fetchUsers,
  fetchUserInfo
  // usersLoaded,
  // usersRequested,
  // usersError
}