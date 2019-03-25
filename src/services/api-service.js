export default class gitApi {

  url = "https://api.github.com/users?per_page=100";

  fetchUsers = async(url) => {
    const res = await fetch(url);
    if(!res.ok){
      throw new Error('Could not fetch , received:'+ res.status + ' status from server');
    }
    const data = await res.json();
    return data;
  }
  fetchUserinfo = async(username) => {
    const res = await fetch('https://api.github.com/users/'+username);
    if(!res.ok){
      throw new Error('Could not fetch , received:'+ res.status + ' status from server');
    }
    const data = await res.json();
    return data;
  }
  getUsers() {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if (Math.random()> 0.75){
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.fetchUsers(this.url).catch((err)=>
          {console.error('Could not fetch response from git api, try later',err)}));
        }
      }, 700)
    })
  }
  getUserinfo(username) {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if (Math.random()> 0.75){
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.fetchUserinfo(username).catch((err)=>
          {console.error('Could not fetch response from git api, try later',err)}));
        }
      }, 700)
    })
  }
}