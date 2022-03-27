import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>My VOCA</h1>
      </Link>
    </div>
    // {/* <button className="save">Toggle Mode</button> */}
  )
}

export default Header
