import Slider from 'react-slick';
import style from './banner.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        // <div className="">
        <div className={style.container}>
            <Slider {...settings}>
                        <div><img
                            src="https://psb.marifatussalaam.org/assets/frontend/image/header2.png"
                            alt="none"/></div>
                        <div><img
                            src="https://psb.marifatussalaam.org/assets/frontend/image/header3.png"
                            alt="none"/></div>
                        {/* <div><img
                            src="https://zamzamsyifa.sch.id/wp-content/uploads/2020/09/Zamzam-Syifa-Boarding-School-E.jpg"
                            alt="none"/></div>
                        <div><img
                            src="https://zamzamsyifa.sch.id/wp-content/uploads/2020/09/Zamzam-Syifa-Boarding-School-B.jpg"
                            alt="none"/></div> */}

                    </Slider>
        </div>
    )
}

export default Banner