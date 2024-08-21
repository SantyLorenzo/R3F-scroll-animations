
import styles from './Header.module.scss'

export const Header = () => {
    const navigationOptions = [
        'What we do',
        'Portfolio',
        'Company',
        'Blog',
        'Contacts'
    ]

    return (
        <nav className={styles.container}>
            <img
                src="/images/mercury-logo.svg"
                alt="Mercury logotype"
                width={180}
                height={50}
                style={{ visibility: 'hidden' }}
            />

            <ul>
                {navigationOptions.map((option, index) => (
                    <li key={index}>
                        <a href="#!">{option}</a>
                    </li>
                ))}
            </ul>

            <button type="button">Request Estimate</button>
        </nav>
    )
}