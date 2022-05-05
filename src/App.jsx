import { useState } from 'react'
import './App.css'
import users from "./users";
import image from "./linkedin.png"



function App() {
  const [search, setSearch] = useState('');
  const [checkboxS, setCBstudent] = useState(false);
  const [checkboxT, setCBteacher] = useState(false);
  const [campus, setCampus] = useState('')

  const handleInputChange = event => {
    setSearch(event.target.value)
  }

  const handleInputStudentCB = event => {
    setCBstudent(event.target.checked)
  }

  const handleInputTeacherCB = event => {
    setCBteacher(event.target.checked)
  }

  const handleInputDropDown = event => {
    setCampus(event.target.value)
    console.log(campus);
  }

  let filtered = users.filter(user => {
    return user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase())
  })

  if (checkboxS || checkboxT){
    filtered = filtered.filter(user => {
      return user.role === "teacher" && checkboxT || user.role === "student" && checkboxS
    })
  }

  if (campus !== ''){
    filtered = filtered.filter(user => {
      return user.campus === campus
    })
  }



  return (
  <>
    <h1>IronBook</h1>

    <div>
      <input type="text" placeholder="Search..." name="search" onChange={handleInputChange}/>
    </div>
    <div>
      <input type="checkbox" onClick={handleInputStudentCB}/> Student
    </div> 
    <div>
      <input type="checkbox" onClick={handleInputTeacherCB}/> Teacher
    </div>   
    <div>
      <label>
        Campus:
        <select name="campus" id="campus" onChange={handleInputDropDown}>
          <option value=''> -- select an option -- </option>
          <option value="Berlin">Berlin</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
        </select>
      </label>
    </div>

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
        {filtered.map(user => (
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
