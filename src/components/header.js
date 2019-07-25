import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import CodeIcon from "./icons/CodeIcon"

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
