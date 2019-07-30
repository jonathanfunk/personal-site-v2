import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectCard = ({ title, slug, image }) => {
  return (
    <li className="project-card">
      <Link to={`/${slug}`}>
        <Img fluid={image} alt={title} />
      </Link>
    </li>
  )
}

export default ProjectCard
