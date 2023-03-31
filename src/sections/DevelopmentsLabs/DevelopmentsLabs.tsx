
import { StickySection } from '../../components/StickySection/StickySection'
import styles from './DevelopmentsLabs.module.scss'

export const DevelopmentsLabs = () => {
    return (
            <StickySection wrapperClassName={styles.container} className={styles.sticky}>
                <p className={styles.territorialPresence}>[ TERRITORIAL PRESENCE ]</p>

                <img
                    src="/images/developments.svg"
                    alt="Developing title img"
                    width={700}
                    height={120}
                    
                />
                <img
                    src="/images/labs.svg"
                    alt="Developing title img"
                    width={200}
                    height={120}
                    
                />
                <p className={styles.subtitle}>
                    WORLDWIDE
                </p>

                <div className={styles.countriesContainer}>
                    <div>
                        <img
                            className={styles.countriesImg}
                            src="/images/countries.svg"
                            alt="Developing title img"
                            width={150}
                            height={30}
                            
                        />
                        <p>
                            We have employees in USA / Argentina / <br />
                            Armenia / Turkey / Serbia / Kazakhstan
                        </p>
                    </div>
                </div>
            </StickySection>
    )
}