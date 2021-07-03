import Link from 'next/link'
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <nav className={footerStyles.nav}>
            <ul>
                <li>
                    <Link href="/ContactUs">Contact Us</Link>
                </li>
                <li>
                    <Link href="/Survey">FAQ</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Footer
