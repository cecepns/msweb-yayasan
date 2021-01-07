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
        swipe: true,
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

    const testimoni = [
        {
            name: "Faiza Shabrina Robbani",
            image: "/framfaiza.jpg",
            testi: "Ma'rifatussalaam adalah tempat di mana kemandirian dan kesederhanaan di bentuk. " +
                    "Selama tiga tahun saya bersekolah di sana, banyak pengalaman dengan segudang hik" +
                    "mah yang membekas pada diri saya dan dapat menjadi bekal dalam menjalani  kehidu" +
                    "pan. Itu semua tidak terlepas dari peran asatidz yang telah membimbing dengan ik" +
                    "hlas, juga teman-teman yang saling menguatkan.",
            degree: "Santri Angkatan 3"
        }, {
            name: " Salma Alifah Salsabila",
            image: "/framsalma.jpg",
            testi: "Bagi saya bersekolah di Ma'rifatussalaam adalah suatu pengalaman yang sangat ber" +
                    "harga.Banyak pelajaran yang dapat saya ambil,salah satunya adalah sifat saling m" +
                    "enghargai dan juga melengkapi satu sama lain.Dan saya juga ingin berterimakasih " +
                    "kepada para asatidz yang telah membimbing dengan sepenuh hati.Harapan kedepannya" +
                    " semoga Ma'rifatussalaam bisa menjadi sekolah unggulan dalam bidang Ahklak maupu" +
                    "n Akademik.",
            degree: "Santri Angkatan 3"
        }, {
            name: "M. Zacky Irham",
            image: "/framzaki.jpg",
            testi: "Alhamdulillah sebagai lulusan alumni SMPQ Ma'rifatussalaam. menurut saya lingkun" +
                    "gan untuk menambah ilmu dan menghafal al-quran sangatlah kondusif karna di bantu" +
                    "nya bimbingan dari ustad dan ustadzah menjadikan pembelajaran lebih efektif.",
            degree: "Santri Angkatan 3"
        }
    ]

    return (

        <SliderTesti {...settings}>

            {testimoni.map((res, index) => (
                <div
                    key={index}
                    className={Style.wrapper + " block bg-white rounded-xl p-8 md:p-0"}>
                    <div className={Style.image}>
                        <img
                            className="w-32 h-32 md:w-20 md:h-20 md:rounded-none rounded-full mx-auto"
                            src={res.image}
                            alt={res.image}
                            width="384"
                            height="512"></img>
                    </div>
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

                        <div>
                            <p
                                className="p-4 mt-4 text-base text-opacity-75 tracking-wide leading-relaxed text-gray-900 bg-gray-100">
                                “{res.testi}”
                            </p>
                        </div>

                        <div className="pl-4 font-medium">
                            <div className="text-md leading-6 text-indigo-600 font-semibold tracking-wide">
                                {res.name}
                            </div>
                            <div className="text-gray-500">
                                {res.degree}
                            </div>
                        </div>

                    </div>
                </div>

            ))}

        </SliderTesti>
    )
}

export default TestimoniSLider