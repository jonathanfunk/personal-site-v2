import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import websiteDesign from "./../images/website-design.jpg"
import websiteDevelopment from "./../images/website-development.jpg"
import webAppDevelopment from "./../images/web-app-development.jpg"

const IndexPage = () => {
  const { desktop, site } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "jellyfish-background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        imageData={desktop}
        headline={site.siteMetadata.author}
        subheadline={site.siteMetadata.description}
      />
      <section className="about" id="about">
        <div className="container">
          <h2 className="center">Who I am</h2>
          <p>
            Hi! My name is Jonathan Funk. I am a software developer based in
            Vancouver. My journey into software development began when I took
            New Media Design at McKay Career Training in Saskatoon. We learned
            web design and how to code using HTML and CSS. It was my favorite
            subject. After graduating, I taught myself how to use jQuery and
            WordPress and built websites for several clients while I worked as a
            designer/technician at a vehicle decal/sign shop.
          </p>
          <p>
            I moved to Vancouver in January 2014 and started working as a
            graphics operator at a print shop. After working there for a couple
            years, I decided to catch up with what I’ve been missing and took
            the Full-stack Web Development Program at RED Academy in September
            2016. I’m currently working at{" "}
            <a href="https://rtown.ca" target="_blank">
              RTOWN
            </a>{" "}
            as a Web Developer/Designer.
          </p>
          <h2 className="center">What I do</h2>
          <ul className="what-i-do grayscale-hover">
            <li>
              <img src={websiteDesign} alt="Website Design" />
              <h3 className="center">Website Design</h3>
            </li>
            <li>
              <img src={websiteDevelopment} alt="Website Development" />
              <h3 className="center">Website Development</h3>
            </li>
            <li>
              <img src={webAppDevelopment} alt="Web App Development" />
              <h3 className="center">Web App Development</h3>
            </li>
          </ul>
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="container full-width">
          <h2 className="center">Projects</h2>
        </div>
      </section>
      <section className="clients" id="clients">
        <div className="container">
          <h2 className="center">Feature Clients</h2>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="center">Contact</h2>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
