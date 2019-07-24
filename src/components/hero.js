import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ headline }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "jellyfish-background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid

      return (
        <BackgroundImage
          className="hero"
          Tag="section"
          fluid={["linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))", imageData]}
          backgroundColor={`#040e18`}
        >
          <h1>{headline}</h1>
        </BackgroundImage>
      )
    }}
  />
)

export default Hero
