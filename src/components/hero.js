import React from "react"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ imageData, headline, subheadline }) => {
  return (
    <BackgroundImage
      className="hero"
      Tag="section"
      fluid={[
        "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))",
        imageData.childImageSharp.fluid,
      ]}
      backgroundColor={`#040e18`}
    >
      <div className="container">
        <h1>{headline}</h1>
        {subheadline ? <p>{subheadline}</p> : ""}
      </div>
    </BackgroundImage>
  )
}

export default Hero
