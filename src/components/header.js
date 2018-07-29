import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => {
  return (
      <div className="Header">
        <h1>{siteTitle}</h1>
      </div>
  )
}

export default Header;