
import styles from './Case.module.scss'

export const Cases = () => {
    return (
        <section id="cases" className={styles.container}>
            <div className={styles.leftSide}>
                <img
                    src="/images/total_cases.svg"
                    alt="Developing title img"
                    width={116}
                    height={28}
                />

                <p>[ 1500 App’s ]</p>
            </div>

            <div className={styles.rightSide}>
                <img
                    src="/images/cases.svg"
                    alt="Developing title img"
                    width={340}
                    height={120}
                />

                <p>
                    Applications and portals with rich functionality that
                    <br /> can cope with heavy loads adequately
                </p>
            </div>
        </section>
    )
}