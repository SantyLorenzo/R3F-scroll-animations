import Image from 'next/image'
import styles from './Industries.module.scss'

export const Industries = () => {
    return (
        <div className={styles.container}>

            <Image
                src="/images/industries.svg"
                alt="Developing title img"
                width={700}
                height={120}
                priority
            />

            <p className={styles.subtitle}>
                We’ve gained ample experience for a wide range of industries, making our soilutions
                <br /> compliant with the specific requirements.
            </p>
        </div>
    )
}