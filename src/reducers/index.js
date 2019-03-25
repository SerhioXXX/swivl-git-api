
const initialState = {
  users: [],
  userinfo:[],
  loading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "FETCH_USERS_REQUEST":
     return {
      users: [],
      userinfo:[],
      loading: true,
      error: null
     }
    case "FETCH_USERS_SUCCESS":
     return {
      users: action.payload,
      userinfo:[],
      loading: false,
      error: null
     }
    case "FETCH_USERINFO_SUCCESS":
    return {
      users: [],
      userinfo: action.payload,
      loading: false,
      error: null
     }
    case "FETCH_USERS_FAILURE":
     return {
       users: [],
       userinfo:[],
       loading: false,
       error: action.payload
     }
    default: return state;
  }

}

export default reducer;