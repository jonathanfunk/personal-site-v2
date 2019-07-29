import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "./../components/Hero"

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    desktop: file(relativePath: { eq: "archive-background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Hero imageData={data.desktop} headline={tag} smallHeight={true} />
      <section>
        <div className="container">
          <ul>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <li key={slug}>
                  <Link to={slug}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Tags
