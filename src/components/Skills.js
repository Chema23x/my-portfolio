import skill1 from "../assets/img/HTML5.png";
import skill2 from "../assets/img/css.png";
import skill3 from "../assets/img/bootstrap.png";
import skill4 from "../assets/img/react.png";
import skill5 from "../assets/img/javascript.png";
import skill6 from "../assets/img/java-svgrepo-com.svg";
import skill7 from "../assets/img/Spring_Boot.png";
import skill8 from "../assets/img/Git_icon.png";
import skill9 from "../assets/img/scrum-svgrepo-com.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      <div className="title">
                        <h2>Habilidades</h2>
                      </div>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img className="icons" src={skill1} alt="Image1" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img className="icons" src={skill2} alt="Image2" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img className="icons" src={skill3} alt="Image3" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img className="icons" src={skill4} alt="Image4" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img className="icons" src={skill5} alt="Image5" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img className="icons" src={skill6} alt="Image5" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img className="icons" src={skill7} alt="Image5" />
                                <h5>SPRINGBOOT</h5>
                            </div>
                            <div className="item">
                                <img className="icons" src={skill8} alt="Image5" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img className="icons" src={skill9} alt="Image5" />
                                <h5>METODOLOGIA SCRUM</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  )
}
