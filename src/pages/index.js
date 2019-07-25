import React from "react"
import { Link } from "gatsby"
import Hero from "../components/Hero

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero headline="Jonathan Funk" />
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </Layout>
)

export default IndexPage
