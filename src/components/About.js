import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import websiteDesign from "./../images/website-design.jpg"
// import websiteDevelopment from "./../images/website-development.jpg"
// import webAppDevelopment from "./../images/web-app-development.jpg"

const About = props => {
  const data = useStaticQuery(graphql`
    query {
      websiteDesign: file(relativePath: { eq: "website-design.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      websiteDevelopment: file(
        relativePath: { eq: "website-development.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webAppDevelopment: file(relativePath: { eq: "web-app-development.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="center">Who I am</h2>
        <p>
          Hi! My name is Jonathan Funk. I am a software developer based in
          Vancouver. My journey into software development began when I took New
          Media Design at McKay Career Training in Saskatoon. We learned web
          design and how to code using HTML and CSS. It was my favorite subject.
          After graduating, I taught myself how to use jQuery and WordPress and
          built websites for several clients while I worked as a
          designer/technician at a vehicle decal/sign shop.
        </p>
        <p>
          I moved to Vancouver in January 2014 and started working as a graphics
          operator at a print shop. After working there for a couple years, I
          decided to catch up with what I’ve been missing and took the
          Full-stack Web Development Program at RED Academy in September 2016.
          I’m currently working at{" "}
          <a href="https://rtown.ca" target="_blank">
            RTOWN
          </a>{" "}
          as a Web Developer/Designer.
        </p>
        <h2 className="center">What I do</h2>
        <ul className="what-i-do grayscale-hover">
          <li>
            <div className="image-wrapper">
              <Img
                fluid={data.websiteDesign.childImageSharp.fluid}
                objectFit="contain"
                alt="Website Design"
              />
            </div>
            <h3 className="center">Website Design</h3>
          </li>
          <li>
            <div className="image-wrapper">
              <Img
                fluid={data.websiteDevelopment.childImageSharp.fluid}
                objectFit="contain"
                alt="Website Development"
              />
            </div>

            <h3 className="center">Website Development</h3>
          </li>
          <li>
            <div className="image-wrapper">
              <Img
                fluid={data.webAppDevelopment.childImageSharp.fluid}
                objectFit="contain"
                alt="Web App Development"
              />
            </div>
            <h3 className="center">Web App Development</h3>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
