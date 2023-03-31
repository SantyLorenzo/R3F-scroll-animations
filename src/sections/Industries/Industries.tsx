
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import styles from './Industries.module.scss'


export const Industries = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(ScrollTrigger);

    const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1
    const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1

    const path = [
        { x: 800, y: -200 },
        { x: 400, y: 60 },
        { x: 10, y: 10 },
        ]

    const scaledPath = path.map(({ x, y }) => {
    return {
        x: x * rx,
        y: y * ry
    }
    })

    const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1.5,
        },
      })

      tl.to(containerRef, {
        motionPath: {
          path: scaledPath,
          align: 'self',
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 10,
        immediateRender: true,
        // ease: 'power4'
      })
      

    return (
        <div  ref={containerRef} className={styles.container}>
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
        </div>
    )
}