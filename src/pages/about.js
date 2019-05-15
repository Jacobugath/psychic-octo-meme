import React from "react"
import { Link } from "gatsby"
import './index.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import piano from '../images/piano.png'
import reb from '../images/reb.jpg'
import hamburger from '../images/hamburger.png'

const AboutPage = () => {
  const [click, setclick] = React.useState(false);
  return(
    <Layout>
    <div className="container">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div className="hamburger"><img src={hamburger}  onClick= {() =>{
            setclick(!click)
          }}/>
          {click?
          <div className="menu">
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to = '/pp'>PRICES AND POLICIES</Link></li>
            <li><Link to = '/contact'>CONTACT ME</Link></li>
          </ul>

          </div>

          :''}
          </div>

          <span className = 'links'>

          <span className = 'active'><Link to="/">HOME</Link>{' '}</span>
          <Link to="/about"><u>ABOUT</u></Link>
          <Link to='/pp'> {'  '}PRICES<span id='regspace1'>{' '}AND{' '}</span>POLICIES</Link>

          <Link to= '/contact'>{'  '}CONTACT<span id = 'regspace2'>{' '}</span>ME</Link>
          </span>
        <div className="reb">
          <img id='reb' src={reb}></img>
          </div>
          <div className="heading">
          <h1>About Me</h1></div>
          <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br></br><br></br>

          Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>



          </div>



          <div className="logo">
          <div className="rev">Rebecca Alexander<br/><hr/></div>
          <div className="pi">Piano Studio</div>
          </div>



    </div> {/*.container*/}
    </Layout>
)
  }

export default AboutPage
