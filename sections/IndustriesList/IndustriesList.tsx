import Image from 'next/image'
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
        <div className={styles.container}>
            <ul className={styles.projectsList}>
                {projectsList.map(({ image, title, counter }) => (
                    <li key={title}>
                            <Image
                                src={image}
                                alt={title}
                                width={360}
                                height={360}
                                priority
                            />
                            <h2>{title}</h2>
                            <p>{counter}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}