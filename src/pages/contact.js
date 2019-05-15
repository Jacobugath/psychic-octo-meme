import React from "react"
import { Link } from "gatsby"
import './index.css'
import './pp.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import keyboard from '../images/keyboard.jpg'
import hamburger from '../images/hamburger.png'


const ppPage = () => {
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

          <Link to="/">HOME</Link>{' '}
          <Link to="/about">ABOUT</Link>
          <Link to='/pp'> {'  '}PRICES<span id='regspace1'>{' '}AND{' '}</span>POLICIES</Link>
          <Link to= '/contact'>{'  '}<u>CONTACT<span id = 'regspace2'>{' '}</span>ME</u></Link>
          </span>
            <div className="headings"><h1>Contact Me</h1></div>
          <div className="kak"></div>
          <div className="blue">
          <br/>
            EMAIL <br/>
            <input type='text'></input>

            MESSAGE<br/>
            <textarea></textarea><br/><br/>
            <button id='ka'>Send Message</button>
          </div>

          <div className="logo">
          <div className="rev">Rebecca Alexander<br/><hr/></div>
          <div className="pi">Piano Studio</div>
          </div>



    </div> {/*.container*/}
    </Layout>
)
  }
export default ppPage
