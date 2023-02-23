import "./Verticals.scss";

import ScrollContainer from "react-indiana-drag-scroll";

import automotive from "../../assets/images/content/automotive.png";
import automotiveWebp from "../../assets/images/content/automotive.webp";
import automotive2x from "../../assets/images/content/automotive@2x.png";
import automotiveWebp2x from "../../assets/images/content/automotive@2x.webp";
import fitness from "../../assets/images/content/fitness-wellness.png";
import fitnessWebp from "../../assets/images/content/fitness-wellness.webp";
import fitness2x from "../../assets/images/content/fitness-wellness@2x.png";
import fitnessWebp2x from "../../assets/images/content/fitness-wellness@2x.webp";
import healthcare from "../../assets/images/content/healthcare.png";
import healthcareWebp from "../../assets/images/content/healthcare.webp";
import healthcare2x from "../../assets/images/content/healthcare@2x.png";
import healthcareWebp2x from "../../assets/images/content/healthcare@2x.webp";
import multimedia from "../../assets/images/content/multimedia.png";
import multimediaWebp from "../../assets/images/content/multimedia.webp";
import multimedia2x from "../../assets/images/content/multimedia@2x.png";
import multimediaWebp2x from "../../assets/images/content/multimedia@2x.webp";
import { ReactComponent as VerticalsSvg } from "../../assets/images/text/verticals.svg";
import { Picture } from "../../components/Picture/Picture";

const projectsList = [
  {
    image: {
      path: healthcare,
      path2x: healthcare2x,
      webp: healthcareWebp,
      webp2x: healthcareWebp2x,
    },
    title: "Healthcare",
    counter: "13 projects",
  },
  {
    image: {
      path: automotive,
      path2x: automotive2x,
      webp: automotiveWebp,
      webp2x: automotiveWebp2x,
    },
    title: "Automotive",
    counter: "6 projects",
  },
  {
    image: {
      path: fitness,
      path2x: fitness2x,
      webp: fitnessWebp,
      webp2x: fitnessWebp2x,
    },
    title: "Fitness & Wellness",
    counter: "4 projects",
  },
  {
    image: {
      path: multimedia,
      path2x: multimedia2x,
      webp: multimediaWebp,
      webp2x: multimediaWebp2x,
    },
    title: "Multimedia",
    counter: "7 projects",
  },
];

export const Verticals = () => {
  return (
    <section className="verticals">
      <h2 className="visually-hidden">Our Experience</h2>
      <div className="verticals__wrapper container">
        <VerticalsSvg />
        <div className="verticals__description">
          <div className="verticals__counter">
            <span>/</span>
            <span>03</span>
          </div>
          <p>
            We’ve gained ample experience for a wide range of industries, making
            our soilutions compliant with the specific requirements.
          </p>
        </div>
      </div>
      <ScrollContainer component="ul" className="verticals__project-list">
        {projectsList.map(({ image, title, counter }) => (
          <li key={title} className="verticals__project-item">
            <div>
              <Picture
                path={image.path}
                path2x={image.path2x}
                pathWebp={image.webp}
                pathWebp2x={image.webp2x}
                alt={title}
              />
              <h3>{title}</h3>
              <p>{counter}</p>
            </div>
          </li>
        ))}
      </ScrollContainer>
    </section>
  );
};
