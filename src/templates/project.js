import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tags
      }
      html
    }
  }
`

const Project = ({ data, pageContext }) => (
  <Layout>
    <Hero
      imageData={data.markdownRemark.frontmatter.featuredImage}
      headline={data.markdownRemark.frontmatter.title}
    />
    <section>
      <div className="container">
        <h2 className="center">Summary</h2>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        <h2 className="center">Technology</h2>
        <ul className="technology">
          {data.markdownRemark.frontmatter.tags.map((tag, i) => {
            return (
              <li key={i}>
                <Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
              </li>
            )
          })}
        </ul>
        <div className="project-pagination">
          <div>
            {pageContext.prev && (
              <Link to={`/${pageContext.prev.fields.slug}`}>
                « {pageContext.prev.frontmatter.title}
              </Link>
            )}
          </div>
          <div>
            {pageContext.next && (
              <Link to={`/${pageContext.next.fields.slug}`}>
                {pageContext.next.frontmatter.title} »
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Project
