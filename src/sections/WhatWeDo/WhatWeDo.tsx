
import styles from './WhatWeDo.module.scss'
import Marquee from "react-fast-marquee";
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const WhatWeDo = () => {
    const containerRef = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "-=70 top",
                    end: "bottom 80%",
                    scrub: 1,
                    pin: true,
                    toggleActions: "play reverse play reverse",
                }
            })
            
            timeline.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1 });
            timeline.fromTo(containerRef.current, { opacity: 1 }, { opacity: 0 });
        }, containerRef);

        return () => ctx.revert();
        }, []);

    return (
        <section id='what-we-do' ref={containerRef} className={styles.container}>
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
                    <h2>
                        MOBILE DEVELOPMENT
                    </h2>
                    <p className={styles.currentItemDescription}>
                        Our highly accomplished and professionally trained <br />
                        iOS, Android developers, and designers make sure <br />
                        we deliver crisp, top-notch mobile applications
                    </p>
                    <button type="button">
                        Watch more
                        <img
                            src="/images/arrow.svg"
                            alt="Developing title img"
                            width={16}
                            height={16}
                        />
                        </button>
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
        </section>
    )
}