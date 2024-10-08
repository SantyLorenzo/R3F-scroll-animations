
import { gsap } from 'gsap';
import styles from './DevelopingTheFuture.module.scss'
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const DevelopingTheFuture = () => {
    const containerRef = useRef(null)
    const awardsData = [
        {
            img: "/images/app_store.svg",
            alt: "1",
            label: "2 APPLICATIONS\nIN APP STORE’S\nTRENDS OF THE YEAR"
        },
        {
            img: "/images/global_leaders.svg",
            alt: "2",
            label: "GLOBAL LEADERS,\nTOP B2B COMPANIES,\nTOP DEVELOPERS",
        },
        {
            img: "/images/innovation.svg",
            alt: "3",
            label: "UX,UI,INNOVATION,\nSPECIAL KUDOS CSS\nDESIGN AWARDS",
        },
        {
            img: "/images/android_app.svg",
            alt: "4",
            label: "TOP ANDROID APP\nDEVELOPMENT\nCOMPANY",
        }
    ]

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom 80%",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                }
            })
            
            timeline.fromTo(containerRef.current, { opacity: 1 }, { opacity: 0 });
        }, containerRef);

        return () => ctx.revert();
        }, []);


    return (
        <section id='developing-the-future' ref={containerRef} className={styles.container}>
            <span>
                <img
                    src="/images/developing.svg"
                    alt="Developing title img"
                    width={348}
                    height={50}
                />
                <img
                    className={styles.the}
                    src="/images/the.svg"
                    alt="Developing title img"
                    width={100}
                    height={50}
                />
                <img
                    src="/images/future.svg"
                    alt="Developing title img"
                    width={220}
                    height={50}
                />
            </span>
            
            <img
                className={styles.worldwide}
                src="/images/worldwide.svg"
                alt="Developing title img"
                width={380}
                height={50}
            />

            <p className={styles.subtitle}>
                Proven by startups with core technologies and sold <br/> to Fortune 500 companies.
            </p>

            <span className={styles.span}>Scroll down</span>
            
            <aside className={styles.awardsContainer}>
                {awardsData.map((award, index) => (
                    <div className={styles.awardItem} key={award.alt}>
                        <img
                            className={styles.img}
                            src={award.img}
                            alt={award.alt}
                            width={44}
                            height={44}
                        />
                        
                        <p className={styles.awardLabel}>
                            {award.label.split("\n").map((line, i) => (
                                <span key={i}>
                                    <span>{line}</span>
                                    {i < award.label.split("\n").length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </aside>
        </section>
    )
}