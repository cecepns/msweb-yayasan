import style from './navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'

function Navbar() {
    const [toggle,
        setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);
    console.log(toggle)

    const menu = [
        {
            path: '/',
            menuName: 'Home'
        }, {
            path: '/news',
            menuName: 'News'
        }, {
            path: '/program',
            menuName: 'Program'
        }, {
            path: '/kontak',
            menuName: 'Kontak'
        }
    ];

    return (
        <div className={style.wrapper}>
            <div className={style.logo}>Logo</div>

            <div className={toggle ? style.menuWrapper : style.menuWrapper +" "+ style.menuWrapperActive}>
                {menu.map((item, index) => (
                    <Link key={index} href={item.path}>
                        <a className={style.menuItem} onClick={handleToggle}>
                            {item.menuName}</a>
                    </Link>
                ))}
            </div>
                <Image
                    src="/arrow.svg"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    className={style.toggle}
                    onClick={handleToggle}/>
        </div>
    )
}

export default Navbar