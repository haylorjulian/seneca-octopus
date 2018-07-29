import React from 'react'
import Link from 'gatsby-link'
import './header.scss'

const Header = ({ siteTitle }) => {
  return (
      <div className="Header">

        <div className="navbar-row">
          <Link to="/">
            <img src="https://emailoctopus.com/bundles/emailoctopuswebsite/images/logo.svg?1532437360" height="40"/>
            <p>{siteTitle}</p>
          </Link>

          <ul className="navbar-collapse">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <button>Try us for free</button>
            </li>
            <li>
              <Link to="/">Sign in</Link>
            </li>
          </ul>

          <div className="hamburger-wrapper">
            <div className="menu icon"></div>
          </div>

        </div>

        <div className="header-body">
          <div className="text-col">
            <h1>Email marketing for less,<br/> via Amazon SES</h1>
            <button>Get started for free</button>
          </div>
          <div className="octopus-mail img-col"></div>
        </div>

        <div className="aws-partner"></div>
        <div className="shoals"></div>
        <div className="sea-life"></div>

      </div>
  )
}

export default Header;