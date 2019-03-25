import React from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import {  MainPage, UserPage} from '../pages';
import Paginator from '../paginator' ;

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
    {/* <Paginator/> */}
     <Switch>
       <Route path='/' render = {() =>  
       <React.Fragment>
        <h2>Welcome to Git Api</h2>
        <Link to='/users'> go to Users list</Link>
       </React.Fragment>
       } 
       exact/>
       <Route path='/users' component={MainPage} exact/>
       <Route path='/users/:username' render={({match}) =>{ 
         const {username} = match.params;
         return <UserPage username={username}/>}} exact/>
       <Route render ={()=>
        <React.Fragment>
         <h2>404 Page not found</h2>
         <Link to='/users'> go to Users list</Link>
       </React.Fragment>
       }  />
       {/* <Redirect to='/'/>  */}
     </Switch>
    </main>
  )
}
export default App;