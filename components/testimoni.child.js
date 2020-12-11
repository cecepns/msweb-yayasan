import SliderTesti from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from './testimoni.module.scss'

function TestimoniSLider() {

    const settings = {
        dots: false,
        arrows: false,
        lazyLoad: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: false,
        touchMove: true,
        swipe:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <SliderTesti {...settings}>
            <div className={Style.wrapper + " block bg-white rounded-xl p-8 md:p-0"}>
                <div className={Style.image}>
                    <img
                        className="w-32 h-32 md:w-20 md:h-20 md:rounded-none rounded-full mx-auto"
                        src="/framfaiza.jpg"
                        alt=""
                        width="384"
                        height="512"></img>
                </div>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

                    <div>
                        <p
                            className="p-4 mt-4 text-base text-opacity-75 tracking-wide leading-relaxed text-gray-900 bg-gray-100">
                            “Ma'rifatussalaam adalah tempat di mana kemandirian dan kesederhanaan di bentuk.
                            Selama tiga tahun saya bersekolah di sana, banyak pengalaman dengan segudang
                            hikmah yang membekas pada diri saya dan dapat menjadi bekal dalam menjalani
                            kehidupan. Itu semua tidak terlepas dari peran asatidz yang telah membimbing
                            dengan ikhlas, juga teman-teman yang saling menguatkan.”
                        </p>
                    </div>

                    <div className="pl-4 font-medium">
                        <div className="text-md leading-6 text-indigo-600 font-semibold tracking-wide">
                            Faiza Shabrina Robbani
                        </div>
                        <div className="text-gray-500">
                            Santri Angkatan 3
                        </div>
                    </div>

                </div>
            </div>

            <div className={Style.wrapper + " block bg-white rounded-xl p-8 md:p-0"}>
                <div className={Style.image}>
                    <img
                        className="w-32 h-32 md:w-20 md:h-20 md:rounded-none rounded-full mx-auto"
                        src="/framsalma.jpg"
                        alt=""
                        width="384"
                        height="512"></img>
                </div>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

                    <div>
                        <p
                            className="p-4 mt-4 text-base text-opacity-75 tracking-wide leading-relaxed text-gray-900 bg-gray-100">
                            “Bagi saya bersekolah di Ma'rifatussalaam adalah suatu pengalaman yang sangat
                            berharga.Banyak pelajaran yang dapat saya ambil,salah satunya adalah sifat
                            saling menghargai dan juga melengkapi satu sama lain.Dan saya juga ingin
                            berterimakasih kepada para asatidz yang telah membimbing dengan sepenuh
                            hati.Harapan kedepannya semoga Ma'rifatussalaam bisa menjadi sekolah unggulan
                            dalam bidang Ahklak maupun Akademik.”
                        </p>
                    </div>

                    <div className="pl-4 font-medium">
                        <div className="text-md leading-6 text-indigo-600 font-semibold tracking-wide">
                            Salma Alifah Salsabila
                        </div>
                        <div className="text-gray-500">
                            Santri Angkatan 3
                        </div>
                    </div>

                </div>
            </div>

            <div className={Style.wrapper + " block bg-white rounded-xl p-8 md:p-0"}>
                <div className={Style.image}>
                    <img
                        className="w-32 h-32 md:w-20 md:h-20 md:rounded-none rounded-full mx-auto"
                        src="/framzaki.jpg"
                        alt=""
                        width="384"
                        height="512"></img>
                </div>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

                    <div>
                        <p
                            className="p-4 mt-4 text-base text-opacity-75 tracking-wide leading-relaxed text-gray-900 bg-gray-100">
                            “Alhamdulillah sebagai lulusan alumni SMPQ Ma'rifatussalaam. menurut saya
                            lingkungan untuk menambah ilmu dan menghafal al-quran sangatlah kondusif karna
                            di bantunya bimbingan dari ustad dan ustadzah menjadikan pembelajaran lebih
                            efektif.”
                        </p>
                    </div>

                    <div className="pl-4 font-medium">
                        <div className="text-md leading-6 text-indigo-600 font-semibold tracking-wide">
                            M. Zacky Irham
                        </div>
                        <div className="text-gray-500">
                            Santri Angkatan 3
                        </div>
                    </div>

                </div>
            </div>

 
        </SliderTesti>
    )
}

export default TestimoniSLider