import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectCard = ({ title, slug, image }) => {
  return (
    <li className="project-card">
      <Link to={`/${slug}`}>
        <Img fluid={image} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
        </div>
      </Link>
    </li>
  )
}

export default ProjectCard
