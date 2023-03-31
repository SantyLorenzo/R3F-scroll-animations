
import styles from './MoreApps.module.scss'

export const MoreApps = () => {
    return (
        <div className={styles.container}>
            <img
                src="/images/100apps.svg"
                alt="Developing title img"
                width={1340}
                height={600}
            />

            <img
                src="/images/100apps_text.svg"
                alt="Developing title img"
                width={340}
                height={120}
            />
        </div>
    )
}