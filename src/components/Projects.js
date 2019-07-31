import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <section className="projects" id="projects">
      <div className="container full-width">
        <h2 className="center">Projects</h2>
        <ul className="project-list">
          {data.allMarkdownRemark.edges.map(({ node }) => {
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
  )
}

export default Projects
