import styles from './Layout.module.css'
import Link from 'next/Link'

export const Layout = ({children}) => {
    const handleContactView = () => {
        window.scrollTo({
            top: 100000,
            behavior: 'smooth'
        })
    }
return (
    <>
    <div className={styles.blueBand}><a>color blue band</a></div>
    <div className={styles.orangeBand}><a>color orange band</a></div>
<nav className={styles.nav}>
    <Link href='/'> 
    <a>
        INICIO
    </a>
    </Link>
    <Link href='/productos.html'>
    <a>
        PRODUCTOS
    </a>
    </Link>
    <Link href='/galeria.html'>
    <a>
        GALERIA
    </a>
    </Link>
    <a onClick={handleContactView}>
        CONTACTO
    </a>
</nav>
{children}
</>)
}