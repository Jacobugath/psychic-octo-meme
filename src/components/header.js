import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/becca.png'

const links = {
  display: 'inlineBlock',
  fontSize: 20,
  float: 'right'
}
const left = {
  float: 'left'
}
const Header = ({ siteTitle }) => (
  <header>
  <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >


        </Link>

      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
