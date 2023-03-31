
import { StickySection } from '../../components/StickySection/StickySection';
import styles from './OurClients.module.scss'

export const OurClients = () => {
  const clientsList = {
    firstRow: [
      {
        logo: "/images/clients/fitbit.svg",
        story: "Success story",
      },
      {
        logo: "/images/clients/dow.svg",
        story: "Success story",
      },
      {
        logo: "/images/clients/logo_firecore.svg",
      },
      {
        logo: "/images/clients/sns.svg",
      },
      {
        logo: "/images/clients/logo_ezlynk.svg",
      },
      {
        logo: "/images/clients/logo_kensington_presentair.svg",
      },
      {
        logo: "/images/clients/sap.svg",
      },
      {
        logo: "/images/clients/logo_grainger.svg",
      },
    ],
    secondRow: [
      {
        logo: "/images/clients/hsbc.svg",
        story: "Success story",
      },
      {
        logo: "/images/clients/google.svg",
      },
      {
        logo: "/images/clients/logo_comodo.svg",
      },
      {
        logo: "/images/clients/daymap.svg",
      },
      {
        logo: "/images/clients/logo_henry_ford.svg",
      },
      {
        logo: "/images/clients/burger-king.svg",
      },
      {
        logo: "/images/clients/hp.svg",
      },
      {
        logo: "/images/clients/thomson_reuters.svg",
      },
    ],
  };

    return (
      <StickySection className={styles.sticky} wrapperClassName={styles.container}>
          <div className={styles.titleContainer}>
            <h2>OUR CLIENTS</h2>
            <button>
              More testimonials on clutch
              <img
                src="/images/arrow2.svg"
                alt="Developing title img"
                width={16}
                height={16}
              />
            </button>
          </div>

            <div className={styles.listContainer}>
                <div className={styles.listRow}>
                    {clientsList.firstRow.map(({ logo, story }, i) => (
                        <div className={styles.listItem} key={`client-${i}-first`}>
                            <img
                                src={logo}
                                alt="Developing title img"
                                width={186}
                                height={120}
                            />
                            {story && <button>{story}</button>}
                        </div>
                    ))}
                </div>

                <div className={styles.listRow}>
                    {clientsList.secondRow.map(({ logo, story }, i) => (
                        <div className={styles.listItem} key={`client-${i}-second`}>
                            <img
                                src={logo}
                                alt="Developing title img"
                                width={186}
                                height={120}
                            />
                            {story && <button>{story}</button>}
                        </div>
                    ))}
                </div>
            </div>
      </StickySection>
    )
}