import React from "react"
import { Link } from "gatsby"
import './index.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import piano from '../images/piano.png'
import hamburger from '../images/hamburger.png'


const IndexPage = () => {
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

          <span className = 'active'><Link to="/"><u>HOME</u></Link>{' '}</span>
          <Link to="/about">ABOUT</Link>
          <Link to='/pp'> {'  '}PRICES<span id='regspace1'>{' '}AND{' '}</span>POLICIES</Link>

          <Link to= '/contact'>{'  '}CONTACT<span id = 'regspace2'>{' '}</span>ME</Link>
          </span>
          <div className="piano">
            <img src={piano} id='piano' alt="image of piano"/>


          </div>

          <div className="headline">Weekly Private Lessons for all Ages.<br/></div>
          <div className="but">
          <button>contact me  </button></div>
          <div className="logo">
          <div className="rev">Rebecca Alexander<br/><hr/></div>
          <div className="pi">Piano Studio</div>
          </div>



    </div> {/*.container*/}
    </Layout>
  )
}

export default IndexPage
