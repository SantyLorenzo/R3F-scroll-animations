import Image from 'next/image'
import styles from './DevelopmentsLabs.module.scss'

export const DevelopmentsLabs = () => {
    return (
        <div className={styles.container}>

            <p className={styles.territorialPresence}>[ TERRITORIAL PRESENCE ]</p>

            <Image
                src="/images/developments.svg"
                alt="Developing title img"
                width={700}
                height={120}
                priority
            />
            <Image
                src="/images/labs.svg"
                alt="Developing title img"
                width={200}
                height={120}
                priority
            />
            <p className={styles.subtitle}>
                WORLDWIDE
            </p>

            <div className={styles.countriesContainer}>
                <div>
                    <Image
                        className={styles.countriesImg}
                        src="/images/countries.svg"
                        alt="Developing title img"
                        width={150}
                        height={30}
                        priority
                    />
                    <p>
                        We have employees in USA / Argentina / <br />
                        Armenia / Turkey / Serbia / Kazakhstan
                    </p>
                </div>
            </div>
        </div>
    )
}