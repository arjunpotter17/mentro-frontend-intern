
import './App.css';
import img1 from './assets/img-1.png'
import img2 from './assets/img-2.png'
import img3 from './assets/img-3.png'
import img4 from './assets/img-4.png'
import img5 from './assets/img-5.png'
import {CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import arrow from './assets/Arrow 1.svg'


function App() {

  /*Declaring required constants */


  const [toggle, setToggle] = useState({
    count: 0,
    val: 0
  })
  const [inProp, setInProp] = useState(true);

  /* Creating a profile object for each person. Usually fetched through an API */

  const profiles = [{
    name: 'Saurav Pal',
    designation: 'SDE 2 @Amazon',
    rating: '5.0',
    ratingStars: '',
    about: 'I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.',
    img: img1,
  }, {
    name: 'Prankur Gupta ',
    designation: 'SDE 2 @Amazon',
    rating: '4.9',
    ratingStars: '',
    about: 'I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.',
    img: img5,

  },
  {
    name: 'Keshav Bathla',
    designation: 'SDE-1 @Groww',
    rating: '5.0',
    ratingStars: '',
    about: 'A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor',
    img: img4,

  },
  {
    name: 'Saumya Singh',
    designation: 'Software Engineer @ Redhat',
    rating: '5.0',
    ratingStars: '',
    about: 'Engineer @RedHat | Program Manager20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner19 | Mentor GCI',
    img: img3,
  },
  {
    name: 'Ankita',
    designation: 'ML Engineer @Firework',
    rating: '5.0',
    ratingStars: '',
    about: 'Working my way to build the worlds future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. ',
    img: img2,
  },
  ]


  /*Declaring functions for each arrow click*/


  const clockWise = () => {
    setInProp(false)
    if (toggle.count < profiles.length - 1) {
      setTimeout(() => { setToggle({ count: toggle.count + 1, val: toggle.val + 36 }) }, 400)
      setTimeout(() => { setInProp(true) }, 300)
    }
    else {
      setTimeout(() => { setToggle({ count: 0, val: 0 }) }, 400)
      setTimeout(() => { setInProp(true) }, 600)
    }
  }

  const antiClock = () => {
    setInProp(false)
    if (toggle.count <= 0) {
      setTimeout(() => { setToggle({ count: profiles.length - 1, val: 144 }) }, 400)
      setTimeout(() => { setInProp(true) }, 600)
    }
    else {
      setTimeout(() => { setToggle({ count: toggle.count - 1, val: toggle.val - 36 }) }, 400)
      setTimeout(() => { setInProp(true) }, 300)
    }
  }


  /*Returning Data*/

  useEffect(()=>{
    console.log('this is count', toggle.count)
  },[toggle.count])


  return (
    <div className="App">


      {/*Booking button*/}
      <CSSTransition  in={inProp} timeout={300} classNames="dropdown">
        <button id="booking-btn" style={{ backgroundColor: toggle.count === 0 || toggle.count === 3 ? '#7ABD87' : '#4CAF50' }}>Book a session</button>
      </CSSTransition>

      

      {/*Mentor Details*/}
      <div className="text-content">
        <CSSTransition  in={inProp} timeout={300} classNames="dropdown">
          <p id="rating" >{profiles[toggle.count]?.rating}</p>
        </CSSTransition>
        <div className="stars">
        <i className='fas fa-star' style={{color:'#4CAF50', fontSize:'52px'}}></i>
        <i className='fas fa-star' style={{color:'#4CAF50', fontSize:'52px'}}></i>
        <i className='fas fa-star' style={{color:'#4CAF50', fontSize:'52px'}}></i>
        <i className='fas fa-star' style={{color:'#4CAF50', fontSize:'52px'}}></i>
        {toggle.count !==1 && <i className='fas fa-star' style={{color:'#4CAF50', fontSize:'52px'}}></i>}
        </div>
        <CSSTransition  in={inProp} timeout={300} classNames="dropdown">
          <p id="name" >{profiles[toggle.count]?.name}</p>
          </CSSTransition>
        <CSSTransition  in={inProp} timeout={300} classNames="dropdown">
          <p id="role" >{profiles[toggle.count]?.designation}</p>
        </CSSTransition>
        <CSSTransition  in={inProp} timeout={300} classNames="dropdown">
          <p id="about" >{profiles[toggle.count]?.about}
          </p>
        </CSSTransition>

      </div>


      {/*Mentor Name under big image*/}
      <CSSTransition in={inProp} timeout={300} classNames="name-card">

        <div className="name-plate" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button id="name-plate-name">{profiles[toggle.count]?.name}</button>
        </div>

      </CSSTransition>


      {/*Mentor Image*/}
      <CSSTransition appear={true} in={inProp} timeout={300} classNames='image'>
        
          <div id="main-img" style={{
            backgroundColor: '#fff',
          }}>
            <img src={profiles[toggle.count]?.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="mentor" id="main-pic" />
            {console.log('this is url', profiles[toggle.count]?.img)}
          </div>
        
      </CSSTransition>


      {/*Arrows to toggle carousel and change mentor data*/}
      <div id="arrow-left" onClick={antiClock} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={arrow} alt='toggle-arrow'/>
      </div>

      <div id="arrow-right" onClick={clockWise} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        <img src={arrow} alt='toggle-arrow'/>
      </div>

      {/*Green background blob*/}
      <div className="green-circle" style={{ backgroundColor: toggle.count === 0 || toggle.count === 3 ? '#7ABD87' : '#C5F8C7' }}>
        <div className="track-circle" id="track-circle" style={{ transform: `rotate(${toggle.val}deg)`, transition: 'all 0.5s linear' }}>



          {/*rotating mentor carousel*/}
          <div className="img-carousel" >
            <div className="img" id="img-1">
              <img src={img1} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
            <div className="img" id="img-2">
              <img src={img2} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
            <div className="img" id="img-3">
              <img src={img3} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
            <div className="img" id="img-4">
              <img src={img4} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
            <div className="img" id="img-5">
              <img src={img5} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
            <div className="img" id="img-6">
              <img src={img3} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
            <div className="img" id="img-7">
              <img src={img2} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
            <div className="img" id="img-8">
              <img src={img1} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
            <div className="img" id="img-9">
              <img src={img4} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
            <div className="img" id="img-10">
              <img src={img5} alt='carousel-profile-logo' style={{ transform: toggle.val > 0 ? `rotate(-${toggle.val}deg)` : `rotate(${toggle.val}deg)`, transition: 'all 0.5s ease-in-out' }} />
            </div>
          </div>

        </div>

      </div>




    </div>


  );
}

export default App;
