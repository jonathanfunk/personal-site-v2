import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => {
  const { desktop, site } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "jellyfish-background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        imageData={desktop}
        headline={site.siteMetadata.author}
        subheadline={site.siteMetadata.description}
      />
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </Layout>
  )
}

export default IndexPage
