
import { StickySection } from '../../components/StickySection/StickySection';
import styles from './IndustriesList.module.scss'

export const IndustriesList = () => {

  const projectsList = [
    {
      image: "/images/healthcare.svg",
      title: "HEALTHCARE",
      counter: "13 projects",
    },
    {
      image: "/images/automotive.svg",
      title: "AUTOMOTIVE",
      counter: "6 projects",
    },
    {
      image: "/images/fitness.svg",
      title: "FITNESS & WELLNESS",
      counter: "4 projects",
    },
    {
      image: "/images/multimedia.svg",
      title: "MULTIMEDIA",
      counter: "7 projects",
    },
    {
      image: "/images/healthcare2.svg",
      title: "Healthcare",
      counter: "13 projects",
    },
  ];

  return (
    <section id='industries-list' className={styles.container}>
      <ul className={styles.projectsList}>
        {projectsList.map(({ image, title, counter }) => (
          <li key={title}>
            <img
              src={image}
              alt={title}
              width={360}
              height={360}
            />
            <h2>{title}</h2>
            <p>{counter}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}