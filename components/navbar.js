import style from './navbar.module.scss'
import Link from 'next/link'

function Navbar() {
    return (
        <div className={style.wrapper}>
            <div>Logo</div>

            <Link href="/news">
            <div>Menu Item</div>
            </Link>
        </div>
    )
}

export default Navbar