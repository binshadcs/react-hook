import { useState } from 'react'
import GithubUser from './GithubUser';
import './FindUser.css';

function FindUser() {
 
    const [username, setUsername] = useState('')
    return (
      <>
        <div className='search'>
          <h2>Find User</h2>
          <input 
            type='text' 
            placeholder='Enter username'
            onChange={
              (event) => setUsername(event.target.value)
            } />
          <div className='result'>
            {
              username ?
              <GithubUser username={username} /> :
              <p>Please Initiate search....</p> 
            }
          </div>
  
        </div>
      </>
    )
  }
  
  export default FindUser;
  
  // https://api.github.com/users/binshadcs