import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <section className="projects" id="projects">
      <div className="container full-width">
        <h2 className="center">Projects</h2>
        <ul className="project-list">
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <Link to={`/${edge.node.fields.slug}`}>
                  <h3>{edge.node.frontmatter.title}</h3>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects
