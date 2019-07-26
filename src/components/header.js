import React, { Component } from "react"
import { Link } from "gatsby"
import CodeIcon from "./icons/CodeIcon"

class Header extends Component {
  state = {
    scrollPositionTop: true,
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

  render() {
    return (
      <header className={!this.state.scrollPositionTop ? "nav-inverse" : ""}>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <CodeIcon />
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
