import style from './aboutUs.module.scss'
// import Image from 'next/image'

function AboutUs() {
    return (
        <div className="py-8 lg:py-12 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-4 ">
                    <div>
                        <h3
                            className="text-3xl tracking-wide font-extrabold text-gray-900 sm:text-4xl leading-9 lg:leading-relaxed">
                            Selamat Datang di
                            <br></br>
                            SMP Al-Qur'an Ma'rifatussalaam
                        </h3>

                        <p
                            className="mt-1 text-md leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Qur'anic Boarding School</p>

                        <p
                            className="mt-4 text-lg text-opacity-75 tracking-wide leading-relaxed text-gray-900">SMP
                            Al-Qur'an Ma'rifatussalaam Qur'anic Boarding School berlokasi di Jl. Manyeti
                            No.6 RT 05/01 Kp.Cikadu Desa Manyeti, Kec. Dawuan, Kab. Subang, Provinsi Jawa
                            Barat. Ma'rifatussalaam memiliki kurikulum khas yang dirancang dan di persiapkan
                            oleh tenaga kependidikan yang bermutu jenjang pendidikan menengah, sehingga
                            dapat berkontribusi dalam mempersiapkan generasi yang tangguh di masa depan,
                            menghasilkan intelektual muslim yang mampu membangun dan memakmurkan bangsa,
                            yang akan ikut berkontribusi mewujudkan indonesia emas 2045.</p>

                        <p
                            className="pt-4 text-lg text-opacity-75 tracking-wide leading-relaxed text-gray-900">SMP
                            Al-Qur’an Ma’rifatussalaam merupakan program unggulan Pesantren Tahfizhul Qur’an
                            Ma’rifatussalaam dengan target 3 tahun hafal 20 juz. Adapun kurikulum yang
                            diterapkan adalah kurikulum nasional dan kurikulum kepesantrenan yang berbasis
                            pada pembetukkan karakter (character building).</p>

                    </div>
                    <div className={style.AboutUs}>
                        {/* <Image
                            alt="Picture of the author"
                            src="/pmb.png"
                            layout="responsive"
                            width={900}
                            height={700}/> */}
                            <img src="/pmb.png" alt="picture of the author"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs