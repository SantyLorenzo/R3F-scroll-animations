
import styles from './WhatWeDo.module.scss'
import Marquee from "react-fast-marquee";
import { StickySection } from '../../components/StickySection/StickySection';

export const WhatWeDo = () => {

    return (
        <StickySection wrapperClassName={styles.container}>
            <Marquee gradient={false} className={styles.marquee}>
                <img
                    src="/images/what_we_do.svg"
                    alt="Developing title img"
                    width={1040}
                    height={280}
                />
                <img
                    src="/images/what_we_do.svg"
                    alt="Developing title img"
                    width={1040}
                    height={280}
                />
            </Marquee>

            <div className={styles.itemsContainer}>
                <div className={styles.itemsRow}>

                    <div className={styles.item}>
                        <img
                            src="/images/ellipse.svg"
                            alt="Developing title img"
                            width={48}
                            height={48}
                        />

                        <p className={styles.label} style={{ fontSize: '8px' }}>
                            QUALITY <br /> ASSURANCE
                        </p>
                    </div>

                    <div className={styles.item}>
                        <img
                            src="/images/ellipse.svg"
                            alt="Developing title img"
                            width={64}
                            height={64}
                        />

                        <p className={styles.label} style={{ fontSize: '8px' }}>
                            DISCOVERY
                        </p>
                    </div>

                    <div className={styles.item}>
                        <img
                            src="/images/ellipse.svg"
                            alt="Developing title img"
                            width={80}
                            height={80}
                        />

                        <p className={styles.label} style={{ fontSize: '11px' }}>
                            WEB <br /> DEVELOPMENT
                        </p>
                    </div>

                    <div className={styles.item}>
                        <img
                            src="/images/ellipse.svg"
                            alt="Developing title img"
                            width={104}
                            height={104}
                        />

                        <p className={styles.label} style={{ fontSize: '14px' }}>
                            CUTTING EDGE
                        </p>
                    </div>
                </div>

                <div className={styles.currentItemContainer}>
                    <img
                        src="/images/phone.svg"
                        alt="Developing title img"
                        width={200}
                        height={350}
                    />
                    <h2>
                        MOBILE <br /> DEVELOPMENT
                    </h2>
                    <p className={styles.currentItemDescription}>
                        Our highly accomplished and professionally trained <br />
                        iOS, Android developers, and designers make sure <br />
                        we deliver crisp, top-notch mobile applications
                    </p>
                    <button type="button">Watch more</button>
                </div>
                
                <div className={styles.itemsRow}>

                    <div className={styles.item}>
                        <img
                            src="/images/ellipse.svg"
                            alt="Developing title img"
                            width={104}
                            height={104}
                        />

                        <p className={styles.label} style={{ fontSize: '14px' }}>
                            DIGITAL <br /> TRANSFORMATION
                        </p>
                    </div>

                    <div className={styles.item}>
                        <img
                            src="/images/ellipse.svg"
                            alt="Developing title img"
                            width={80}
                            height={80}
                        />

                        <p className={styles.label} style={{ fontSize: '11px' }}>
                            DESIGN
                        </p>
                    </div>

                    <div className={styles.item}>
                        <img
                            src="/images/ellipse.svg"
                            alt="Developing title img"
                            width={64}
                            height={64}
                        />

                        <p className={styles.label} style={{ fontSize: '8px' }}>
                            DESKTOP <br /> DEVELOPMENT
                        </p>
                    </div>

                    <div className={styles.item}>
                        <img
                            src="/images/ellipse.svg"
                            alt="Developing title img"
                            width={48}
                            height={48}
                        />

                        <p className={styles.label} style={{ fontSize: '8px' }}>
                            WEARABLE <br /> DEVICES
                        </p>
                    </div>

                </div>
            </div>
        </StickySection>
    )
}