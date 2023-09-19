import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Directives Assistant</title>
        <meta property="og:title" content="Regional Directives Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
