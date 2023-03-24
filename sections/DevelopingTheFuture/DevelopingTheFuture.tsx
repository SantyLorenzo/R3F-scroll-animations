import Image from 'next/image'
import styles from './DevelopingTheFuture.module.scss'

export const DevelopingTheFuture = () => {
    const awardsData = [
        {
            img: "/images/app_store.svg",
            alt: "B",
            label: "2 APPLICATIONS\nIN APP STORE’S\nTRENDS OF THE YEAR"
        },
        {
            img: "/images/global_leaders.svg",
            alt: "B",
            label: "GLOBAL LEADERS,\nTOP B2B COMPANIES,\nTOP DEVELOPERS",
        },
        {
            img: "/images/innovation.svg",
            alt: "B",
            label: "UX,UI,INNOVATION,\nSPECIAL KUDOS CSS\nDESIGN AWARDS",
        },
        {
            img: "/images/android_app.svg",
            alt: "B",
            label: "TOP ANDROID APP\nDEVELOPMENT\nCOMPANY",
        }
    ]

    return (
        <div className={styles.container}>
            <span>
                <Image
                    src="/images/developing.svg"
                    alt="Developing title img"
                    width={348}
                    height={50}
                    priority
                />
                <Image
                    className={styles.the}
                    src="/images/the.svg"
                    alt="Developing title img"
                    width={100}
                    height={50}
                    priority
                />
                <Image
                    src="/images/future.svg"
                    alt="Developing title img"
                    width={220}
                    height={50}
                    priority
                />
            </span>
            
            <Image
                className={styles.worldwide}
                src="/images/worldwide.svg"
                alt="Developing title img"
                width={380}
                height={50}
                priority
            />

            <p className={styles.subtitle}>
                Proven by startups with core technologies by 
                Mercury and sold <br/> to Fortune 500 companies.
            </p>

            <span className={styles.span}>Scroll down</span>
            
            <aside className={styles.awardsContainer}>
                {awardsData.map((award, index) => (
                    <div className={styles.awardItem} key={index}>
                        <Image
                            className={styles.img}
                            src={award.img}
                            alt={award.alt}
                            width={44}
                            height={44}
                            priority
                        />
                        
                        <p className={styles.awardLabel}>
                            {award.label.split("\n").map((line, i) => (
                                <>
                                    <span>{line}</span>
                                    {i < award.label.split("\n").length - 1 && <br />}
                                </>
                            ))}
                        </p>
                    </div>
                ))}
            </aside>
        </div>
    )
}