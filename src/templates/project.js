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

const Project = props => (
  <Layout>
    <Hero
      imageData={props.data.markdownRemark.frontmatter.featuredImage}
      headline={props.data.markdownRemark.frontmatter.title}
    />
    <section>
      <div className="container">
        <h2 className="center">Summary</h2>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
        <h2 className="center">Technology</h2>
        <ul className="technology">
          {props.data.markdownRemark.frontmatter.tags.map((tag, i) => {
            return (
              <li key={i}>
                <Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  </Layout>
)

export default Project
