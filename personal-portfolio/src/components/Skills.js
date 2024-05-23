import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

const skillItems = [
  { img: meter1, title: "Web Development" },
  { img: meter2, title: "React, Tailwind, Python" },
  { img: meter1, title: "HTML, CSS, JavaScript" },
  { img: meter1, title: "Agile Development" }
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a skilled software developer, I specialize in web development with a strong focus on creating dynamic, responsive interfaces. 
                My expertise includes React, allowing me to build robust and interactive user experiences. I utilize Tailwind for efficient and aesthetically 
                pleasing designs, while my proficiency in HTML and CSS ensures a solid foundation for any project. Python is another key strength, enabling me 
                to develop powerful backend solutions. I thrive in Agile development environments, where I can collaborate effectively and adapt to changing 
                requirements. My comprehensive skill set ensures I deliver high-quality, scalable solutions that meet client needs and drive innovation.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillItems.map(({ img, title }, index) => (
                  <div key={index} className="item">
                    <img src={img} alt={title} />
                    <h5>{title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
