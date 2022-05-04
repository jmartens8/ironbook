import { useState } from 'react'
import './App.css'
import users from "./users";
import image from "./linkedin.png"



function App() {
 
  console.log(users);

  return (
  <>
 
    <h1>IronBook</h1>

    <table>
      <thead>
        <tr>
          <th>Frist Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>LinkedIn</th>
        </tr>
      </thead>
      
      <tbody>
        {
          users.map(user => (
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.campus}</td>
              <td>{user.role}</td>
              <td className='center'>
                {user.linkedin ? <a href={user.linkedin}>
                  <img src={image} alt="LinkedIn"/>
                </a> : null}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </>
  )
}

export default App
