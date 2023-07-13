import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="bg-dark">
      <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/" >
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white" to="/Signin" >
          Signin
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white" to="/Signup" >
          Signup
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white" to="/Technologies" >
          Technologies
        </Link>
      </li>

     
   
    </ul>

    </div>
    
  )
}

export default Navbar