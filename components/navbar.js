import style from './navbar.module.scss'

function Navbar() {
    return (
        <div class={style.wrapper}>
            <div>Logo</div>
            <div>Menu Item</div>
        </div>
    )
}

export default Navbar