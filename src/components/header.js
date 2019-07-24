import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import CodeIcon from "./icons/code-icon"
import logo from "./../images/code.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="logo">
        <Link to="/">
          <CodeIcon />
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
