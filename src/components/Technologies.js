import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Technologies() {
  return (
    <div className='text-center'>
      <p className="lead display-2">Technologies</p>
      <div className="bg-dark mb-3">
      <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link text-white" to="Reactjs" >
          Reactjs
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white" to="Angular" >
          Angular
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white" to="Vue" >
          Vue
        </Link>
      </li>

   
    </ul>

    </div>

    {/*placeholder*/}
    <Outlet />

    </div>
  )
}

export default Technologies