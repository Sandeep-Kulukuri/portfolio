import './about.css'
//import SocialContact from '../../Common/Social-Contact/Social-Contact'
function About() {
    return (
        <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Sandeep Kulukuri</span>.<br /> 
        </div>
        <div className="about-photo">
          <img src={require("../../../Assets/ResumePic.png").default}
            className="picture" alt='Sandeep Kulukuri'
          />
        </div>
      </div>
      {/* <i class="fab fa-linkedin"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-facebook"></i>
      <i class="fab fa-twitter"></i> */}
    </div>
    )
}

export default About
