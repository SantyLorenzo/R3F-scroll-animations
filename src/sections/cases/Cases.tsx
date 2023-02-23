import "./Cases.scss";

import clsx from "clsx";
import { useMemo, useState } from "react";

import fightCamp from "../../assets/images/content/fight-camp.png";
import fightCampWebp from "../../assets/images/content/fight-camp.webp";
import fightCamp2x from "../../assets/images/content/fight-camp@2x.png";
import fightCampWebp2x from "../../assets/images/content/fight-camp@2x.webp";
import monsterEnergy from "../../assets/images/content/monster-energy.png";
import monsterEnergyWebp from "../../assets/images/content/monster-energy.webp";
import monsterEnergy2x from "../../assets/images/content/monster-energy@2x.png";
import monsterEnergyWebp2x from "../../assets/images/content/monster-energy@2x.webp";
import ola from "../../assets/images/content/ola.png";
import olaWebp from "../../assets/images/content/ola.webp";
import ola2x from "../../assets/images/content/ola@2x.png";
import olaWebp2x from "../../assets/images/content/ola@2x.webp";
import { ReactComponent as CasesSvg } from "../../assets/images/text/cases.svg";
import { Picture } from "../../components/Picture/Picture";

const projects = [
  {
    img: {
      path: monsterEnergy,
      path2x: monsterEnergy2x,
      pathWebp: monsterEnergyWebp,
      pathWebp2x: monsterEnergyWebp2x,
    },
    title: "Monster Energy",
    description: "Corporate application for maintaining audience loyalty",
  },
  {
    img: {
      path: ola,
      path2x: ola2x,
      pathWebp: olaWebp,
      pathWebp2x: olaWebp2x,
    },
    title: "Ola",
    description: "Auction goods catalog",
  },
  {
    img: {
      path: fightCamp,
      path2x: fightCamp2x,
      pathWebp: fightCampWebp,
      pathWebp2x: fightCampWebp2x,
    },
    title: "Fight Camp",
    description:
      "Android app with workouts paired with boxing gloves to track progress",
  },
];

type Menu =
  | "Cutting Edge technologies"
  | "Mobile development"
  | "Web development"
  | "Desktop development"
  | "Solutions for Smart TV"
  | "And Other";

export const Cases = () => {
  const [selected, setSelected] = useState(1);

  const menu = useMemo<Menu[]>(
    () => [
      "Cutting Edge technologies",
      "Mobile development",
      "Web development",
      "Desktop development",
      "Solutions for Smart TV",
      "And Other",
    ],
    []
  );

  return (
    <section className="cases container">
      <h2 className="visually-hidden">Portfolio</h2>
      <div className="cases__wrapper">
        <div className="cases__title">
          <CasesSvg />
          <div>
            <span>05</span>
            <span>/</span>
          </div>
        </div>
        <div className="cases__description">
          <p>
            Applications and portals with rich functionality that can cope with
            heavy loads adequately
          </p>
        </div>
      </div>
      <div className="cases__slides">
        <div className="cases__slides-wrapper">
          <div className="cases__preview">
            <div className="cases__preview-img"></div>
            <ul className="cases__preview-project-list">
              {projects.map(({ img, title, description }) => (
                <li className="cases__preview-project-item" key={title}>
                  <Picture
                    path={img.path}
                    path2x={img.path2x}
                    pathWebp={img.pathWebp}
                    pathWebp2x={img.pathWebp2x}
                    alt={title}
                  />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="cases__slides-menu">
            {menu.map((label, i) => (
              <button
                className={clsx(selected === i && "active")}
                onClick={() => setSelected(i)}
                key={`label-${i}`}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
