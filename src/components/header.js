import React, { Component } from "react"
import { Link } from "gatsby"
import CodeIcon from "./icons/CodeIcon"
import classnames from "classnames"

class Header extends Component {
  state = {
    scrollPositionTop: true,
    expanded: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ scrollPositionTop: false })
    } else {
      this.setState({ scrollPositionTop: true })
    }
  }

  toggleExpand = e => {
    e.preventDefault()
    const currentState = this.state.expanded
    this.setState({ expanded: !currentState })
  }

  removeToggleExpand = e => {
    this.setState({ expanded: false })
  }

  render() {
    return (
      <header className={!this.state.scrollPositionTop ? "nav-inverse" : ""}>
        <div className="container">
          <div className="logo">
            <Link to="/" onClick={this.removeToggleExpand}>
              <CodeIcon />
            </Link>
          </div>
          <nav className="menu-wrap">
            <div className="hamburger-menu" onClick={this.toggleExpand}>
              <div
                className={classnames("bar", {
                  animate: this.state.expanded,
                })}
              ></div>
            </div>
            <ul
              className={classnames("primary-menu", {
                expanded: this.state.expanded,
              })}
            >
              <li>
                <Link to="/#about" onClick={this.removeToggleExpand}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/#projects" onClick={this.removeToggleExpand}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#clients" onClick={this.removeToggleExpand}>
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/#contact" onClick={this.removeToggleExpand}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
