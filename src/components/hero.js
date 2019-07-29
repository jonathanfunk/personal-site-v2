import React from "react"
import BackgroundImage from "gatsby-background-image"
import classnames from "classnames"

const Hero = ({ imageData, headline, subheadline, smallHeight }) => {
  return (
    <BackgroundImage
      className={classnames("hero", {
        small: smallHeight,
      })}
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
