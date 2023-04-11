
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import styles from './Industries.module.scss'


export const Industries = () => {
    const containerRef = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    pin: true,
                }
            })
            
            timeline.fromTo(containerRef.current,  { y: -500 }, { y: 0 });
            timeline.fromTo(containerRef.current,  { y: 0 }, {x: -5000, y: 5000 });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id='industries' ref={containerRef} className={styles.container}>
          <img
              src="/images/industries.svg"
              alt="Developing title img"
              width={800}
              height={140}
          />

          <p className={styles.subtitle}>
              We’ve gained ample experience for a wide range of industries, making our
              <br /> solutions compliant with the specific requirements.
          </p>
        </section>
    )
}