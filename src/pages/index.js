import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi all, welcome to a Gatsby site owned by Alexander Bricken.</h1>
    <p>
    Have a look around, but make sure to check out my real website <a href="https://bricken.co">here</a>.
    </p>
    <p>
    Im just getting started... and cant wait to be at the FreeCodeCamp hackathon!
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
