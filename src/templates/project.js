import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/Layout"
import Hero from "./../components/Hero"

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
      }
      html
    }
  }
`

const project = props => (
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
      </div>
    </section>
  </Layout>
)

export default project
