import Slider from 'react-slick';
import style from './banner.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const image = [
        {
            src: "https://adminwp.marifatussalaam.org/wp-content/uploads/2021/10/banner_1.png"
        }, {
            src: "https://adminwp.marifatussalaam.org/wp-content/uploads/2021/10/banner_2.png"
        }
    ];

    const handleClickDaftar = () => {
        window.open('https://psb.marifatussalaam.org', '_blank')
    }

    return (
        <div className={style.container}>
            <Slider {...settings}>
                {image.map((i, x) => (
                    <div key={x}>
                        <img src={i.src} alt="none" onClick={handleClickDaftar}/>
                    </div>
                ))
}
            </Slider>
        </div>
    )
}

export default Banner