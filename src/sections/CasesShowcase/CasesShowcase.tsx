"use client"

import { useMemo, useState } from 'react';
import { Picture } from '../../components/Picture/Picture';
import styles from './CasesShowcase.module.scss'
import clsx from 'clsx';

const projects = [  
    {
      img: {
        path: "/images/cases/mobileDevelopment/monster_energy.png",
        path2x: "/images/cases/mobileDevelopment/monster_energy@2x.png",
        pathWebp: "/images/cases/mobileDevelopment/monster_energy.webp",
        pathWebp2x: "/images/cases/mobileDevelopment/monster_energy@2x.webp",
      },
      title: "Monster Energy",
      description: "Corporate application for maintaining audience loyalty",
    },
    {
    img: {
        path: "/images/cases/mobileDevelopment/fight_camp.png",
        path2x: "/images/cases/mobileDevelopment/fight_camp@2x.png",
        pathWebp: "/images/cases/mobileDevelopment/fight_camp.webp",
        pathWebp2x: "/images/cases/mobileDevelopment/fight_camp@2x.webp",
        },
      title: "Ola",
      description: "Auction goods catalog",
    },
    {
    img: {
        path: "/images/cases/mobileDevelopment/ola.png",
        path2x: "/images/cases/mobileDevelopment/ola.webp",
        pathWebp: "/images/cases/mobileDevelopment/ola@2x.png",
        pathWebp2x: "/images/cases/mobileDevelopment/ola@2x.webp",
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

export const CasesShowcase = () => {
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
        <section className={styles.container}>
            <div className={styles.leftSide}>
                <div>
                    <p className={styles.caseTitle}>[ Case ]</p>
                    <p className={styles.caseDescription}>
                        Over 20 years of work, we have made
                        projects in almost every segment of the
                        busines.
                    </p>
                </div>
                <ul>
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

            <div className={styles.rightSide}>
                {menu.map((label, i) => (
                <button
                    className={clsx(selected === i && styles.active)}
                    onClick={() => setSelected(i)}
                    key={`label-${i}`}
                    type="button"
                >
                    {label}
                </button>
                ))}
            </div>
        </section>
    )
}