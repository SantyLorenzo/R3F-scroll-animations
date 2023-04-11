
import { useLayoutEffect, useRef } from 'react';
import styles from './DevelopmentsLabs.module.scss'
import { gsap } from 'gsap';

export const DevelopmentsLabs = () => {
    const containerRef = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom center",
                    scrub: 1,
                    pin: true,
                }
            })
            
            timeline.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1 });
            timeline.fromTo(containerRef.current, { opacity: 1 }, { opacity: 0 });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id='development-labs' className={styles.container} ref={containerRef}>
            <p className={styles.territorialPresence}>[ TERRITORIAL PRESENCE ]</p>

            <img
                src="/images/developments.svg"
                alt="Developing title img"
                width={700}
                height={120}
                
            />
            <br />
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
        </section>
    )
}