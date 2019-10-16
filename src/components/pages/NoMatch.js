import React from 'react'
import {Link} from "react-router-dom"
const NoMatch= () => {
  return (
    <div className="NoMatch">
      <h2>We couldnt find that page</h2>
      <Link to="/">click here to go to homepage</Link>
    </div>
  )
}

export default NoMatch