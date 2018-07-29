import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Manage and email your subscribers for far cheaper by connecting your Amazon SES account. Powerful analytics, bounce/complaint tracking and more.' },
        { name: 'keywords', content: 'emailoctopus, email, octopus, emails, amazon, aws, ses, simple email service, marketing, blast emails, sendy' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
