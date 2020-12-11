import style from './navbar.module.scss'
import Link from 'next/link'
import Logo from 'next/image'
import {useState} from 'react'
import {useRouter} from 'next/router'

function Navbar() {

    const router = useRouter();
    const pathName = router.pathname

    const [toggle,
        setToggle] = useState(true);

    const handleToggle = () => setToggle(!toggle);

    const menu = [
        {
            path: '/',
            menuName: 'Home'
        }, {
            path: '/news',
            menuName: 'Berita'
        }, {
            path: '/ekstrakurikuler',
            menuName: 'ekstrakurikuler'
        }, {
            path: '/contact',
            menuName: 'Kontak'
        }
    ];

    return (

        <div className={style.wrapper}>
            <div className={style.logoWrapper}>
                <Logo
                    src="/ms.png"
                    alt="Picture of the author"
                    width={250}
                    height={50}
                    className={style.logo}/>
            </div>

            <div
                className={toggle
                ? style.menuWrapper
                : style.menuWrapper + " " + style.menuWrapperActive}>
                {menu.map((item, index) => (
                    <Link key={index} href={item.path}>
                        <a
                            className={pathName === item.path
                            ? style.menuItem + " " + style.menuItemActive
                            : style.menuItem}
                            onClick={handleToggle}>
                            {item.menuName}</a>
                    </Link>
                ))}
            </div>

            {toggle
                ? <div className={style.toggle} onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                : <div className={style.toggle + " " + style.toggleActive} onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}

        </div>
    )
}

export default Navbar