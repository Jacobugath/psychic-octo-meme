import React from "react"
import { Link } from "gatsby"
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

          <span className = 'active'><Link to="/">HOME</Link>{' '}</span>
          <Link to="/about">ABOUT</Link>
          <Link to='/pp'> {'  '}<u>PRICES<span id='regspace1'>{' '}AND{' '}</span>POLICIES</u></Link>
          <Link to= '/contact'>{'  '}CONTACT<span id = 'regspace2'>{' '}</span>ME</Link>
          </span>

          <div className="keyboard">
          <img src={keyboard} id='keyboard' alt='keyboard'></img>
          </div>


          <div className="pp">
          <h1>Prices and Policies</h1></div>




          <div className="generalinfo">
          <h2>General Info<br/></h2>
          Weekly private lessons are offered in 30 minute lessons. As student skill level and age increase, longer lessons may be recommended. In the coming months, I may offer a monthly master class in music theory.<br/>

          <h2>At Lessons <br/></h2>
          Students are expected to arrive for lessons on time with all of their materials, music, and practice record. Parents and siblings may quietly wait in the dining room, play at the park down the street, wait in their vehicle in the driveway, jump on the trampoline in the backyard, swim in the pool, or run errands, so long as they return to pick up their student in a timely fashion. Please make me aware if your student walks or rides their bike to lessons. To discuss student progress, parents are welcome to talk with their teacher during the first five minutes of the student’s lesson - but not afterwards, in order to respect the next student’s time slot.
          <br/>
          <h2>Practice<br/></h2>

          Students are expected to arrive for lessons on time with all of their materials, music, and practice record. Parents and siblings may quietly wait in the dining room, play at the park down the street, wait in their vehicle in the driveway, jump on the trampoline in the backyard, swim in the pool, or run errands, so long as they return to pick up their student in a timely fashion. Please make me aware if your student walks or rides their bike to lessons. To discuss student progress, parents are welcome to talk with their teacher during the first five minutes of the student’s lesson - but not afterwards, in order to respect the next student’s time slot.<br/>

       <h2>Instrument<br/></h2>
          The best instrument for a piano student to learn on is a well-maintained acoustic piano, which should be tuned twice annually. I realize some students begin on a keyboard or digital piano, but where possible, these should be replaced with a traditional, acoustic piano as soon as possible. Digital pianos are not the same as acoustic pianos. <br/>

          <h2>Hymns</h2><br/>
         Many of my students have a desire to learn to play and accompany someone singing hymns at church or other places. To learn this skill, I will often recommend that mother, dad, or siblings practice singing with the student as they learn to play the piano while someone sings. This will begin at a young age and the more practice they get while someone sings, the better. Please be patient with them, but do not stop singing for mistakes. Keep singing. The student needs to learn to catch up with you and begin playing again. This is crucial in learning to accompany someone. We will practice this in lesson, but the more practice they get, the easier it will become for them. <br/>

          <h2>Method<br/></h2>
          Books: I do not use one particular series of books/method for all students. Each 	student is unique in their likes and dislikes, learning styles, and abilities, so piano books and pieces will vary by student. At the beginning of lessons and as students progress, I will send you a list of books to purchase (most can be purchased from Amazon.com or Linton-Milano Music in Mesa). Books could include technique books, such as Hanon, methodology books such as Bastien, Alfred, Glover, Jon Schmidt or Piano Pronto, etc, and specialty books or songs. I almost never have siblings learn from the same method. I feel this helps eliminate competition, as students vary in their progression. As students progress, I will email you books to purchase as they advance in levels.
<br/><br/>
Computer/Phone/Tablet Apps: To help students with technique, the piano keyboard, and learning to read music, I may recommend you purchase certain apps on your tablet/phone or a computer game. I will include this in an email as the need arises. Time on the tablet or computer is in addition to their regular practice time.
<br/>

<h2>Materials<br/></h2>
Each student should have the following every time they practice and should bring to lessons:<br/><br/>
1. Canvas Tote Bag<br/><br/>
2. Books (as recommended by teacher)<br/><br/>
3. ½” Binder<br/><br/>
4. 25 Sheet Protectors (in their binder)<br/><br/>
5. Metronome (This can be an app on a smartphone or a device that sits at the piano - electronic or wood, your preference. I recommend Steinway Metronome if you are using an app.)<br/><br/>
6. Stopwatch or Kitchen Timer<br/><br/>
7. Pencil<br/><br/>
8. Highlighter<br/><br/>
Students are recommended to use a canvas tote bag to carry books and materials to and from lessons. The student will be given a temporary folder with practice record at their first lesson, which will be used to keep track of assigned pieces and practice suggestions/goals for each week. Please replace this with a sturdy ½” binder in the near future. Occasionally, I will supplement their lesson books and materials with a specialty or seasonal song, or music appreciation song. I will make every attempt to have them use my songs or free materials before asking you to purchase additional materials. However, if instructor’s songs are lost and unreturned, I will ask that you purchase a replacement.


<h2>Tuition and Payment<br/></h2>
Lesson fees are $15/lesson (30 minute lesson), due on the 1st of every month. Monthly, I will send you an invoice via Venmo (preferred) or PayPal. For late payments made after the 5th of every month, please add $1/day to your payment. The teacher reserves the right to raise lesson fees at the beginning of each academic year. <br/>

<h2>Missed and Make-up Lessons<br/></h2>
Due to teacher’s crazy schedule, makeup lessons cannot be guaranteed, but I will try. Saturdays are typically the day I can offer a makeup lesson. However, if an absence arises due to unforeseen situations such as an accident or family emergency and if the student indicates a desire for a makeup lesson, the teacher will make an effort to accommodate a makeup. Please be courteous and give me 24 hours hours heads up, where possible. Missed lessons for situations other than emergency or contagious illness are not refundable. Please have your student continue practicing their previous week’s lesson on a week that your student has missed. <br/>

<h2>Calender and Schedule<br/></h2>
Weekly lessons will be held every week, including smaller holidays. The only exception to this schedule are the following holidays: Memorial Day, the first week of July (July 1-7), Thanksgiving, the day after Thanksgiving, Christmas Eve, Christmas, and the 2-weeks following Christmas. If you desire to change your regular or temporary holiday lesson time, please contact me with enough advanced notice to arrange a different time. Due to my college schedule, I may need to change lesson times in the Fall 2019, but will give you as much notice as possible. I will be moving to the ASU Polytechnic Campus in August 2019 and plan to continue teaching lessons there (approx Power Rd & E Williams Field).
<br/>

<h2>Encouragement<br/></h2>
Please be positive and encouraging as your student is learning this new instrument. It is challenging to learn to read music (a new language) in addition to playing the piano (a new skill). Please use positive, reassuring words and give them praise for the amount of time they are practicing, dedication, in addition to perhaps learning a few notes that were particularly difficult. Praise, praise, praise! NEVER tell a student that they do not “sound good” or similar. Learning the piano is hard work.
<br/>

<h2>Comunication<br/></h2>
The best way to contact me is via email, which will be promptly returned with an email reply, text, or phone call. Tuesdays and Thursdays are very difficult to reach me via phone. I always welcome emails or text messages from students during the week if they have questions regarding their assignments or other matters.
<br/>

<h2>Discontinuing Lessons<br/></h2>

Every student stops taking lessons at some point. Ideally, this decision is made thoughtfully with plenty of discussion between the teacher, parent, and student so that lessons can cease with a positive sense of closure and accomplishment. For this reason, please notify me with at least one month’s notice prior to discontinuing lessons, however, I respect the student’s right to end lessons at any time. Note: at the discretion of the instructor, students may be recommended for dismissal or break in lessons for unpaid tuition, an excess or pattern of absences/unprepared lessons, or if they show a lack of interest.<br/></div>


          <div className="logo">
          <div className="reb">Rebecca Alexander<br/><hr/></div>
          <div className="pi">Piano Studio</div>
          </div>



    </div> {/*.container*/}
    </Layout>
)
  }
export default ppPage
