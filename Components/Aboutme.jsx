
import image from "../src/assets/Image.jpg";

export default function AboutMe(){
    return (
        <div className="container" id="about">

      <div className="topPart">
        <h1 className="gradient-h1">Hi ! I&apos;m Naveenkumar Jayapal</h1>
        <h1 className="stackInfo">I&apos;m studying Full Stack Development</h1>  
        <div className="notes">
        <p>Dedicated and highly motivated individual.</p>
        <p>If you are not the most talented one, Be the most consistent one!</p>
        <button className="btn">Download CV</button>
      </div>
      </div>
      
      
      <div className="imgPart">
          <img className="profile" src={image}></img>
      </div>
    </div>
    )
}