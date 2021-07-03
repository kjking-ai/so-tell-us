import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}><span>Survey</span>Builder</h1>
            <p className={headerStyles.description}>Build any custom survey</p>
        </div>
        
    )
}

export default Header
