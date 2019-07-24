import React from "react"
import { Link } from "gatsby"
import Hero from "./../components/hero"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero headline="Jonathan Funk" />
  </Layout>
)

export default IndexPage
