import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"

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
            featuredImage {
              childImageSharp {
                fluid(quality: 90, maxWidth: 650) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
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
      <SEO title={tag} />
      <Hero imageData={data.desktop} headline={tag} smallHeight={true} />
      <section>
        <div className="container full-width">
          <ul className="project-list">
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title, featuredImage } = node.frontmatter
              return (
                <ProjectCard
                  title={title}
                  slug={slug}
                  image={featuredImage.childImageSharp.fluid}
                  key={slug}
                />
              )
            })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Tags
