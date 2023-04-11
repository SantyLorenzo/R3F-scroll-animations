"use client"

import { Form } from "../../components/Form/Form"
import styles from './Help.module.scss'

export const Help = () => {
    return (
      <section id="help" className={styles.container}>
        <div className={styles.formContainer}>
          <div>
            <h3>Need help?</h3>
            <div className={styles.contactData}>
              <p>
                Need help? Feel free to contact us and we`ll respond as soon as
                possible.
              </p>
              <a
                className={styles.contactMail}
                href="mailto:sales@mercurydevelopment.com"
              >
                sales@mercurydevelopment.com
              </a>
              <a
                className={styles.contactPhone}
                href="tel:+13057672434">
                +1 305 767 2434
              </a>
            </div>
          </div>

          <Form />
        </div>

        <button
          type="button"
          className={styles.resetExperienceButton}
          onClick={() => scrollTo(0, 0)}
        >
          <span>[</span>
          Start Journey Again
          <span>]</span> 
        </button>
      </section>
    )
}