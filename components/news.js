import style from './news.module.scss'
function News({news}) {
    console.log(news)
    return (
        <>
            <div className="lg:text-center">
                {/* <p
                    className="text-md leading-6 text-indigo-600 font-semibold tracking-wide uppercase">SMP AL-Qur'an Ma'rifatussalaam Quranic Boarding School</p> */}
                <h3
                    className="mt-2 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Berita Terbaru
                </h3>
                <p
                    className="my-4 max-w-2xl font-light text-lg leading-7 text-gray-500 lg:mx-auto">
                    Simak terus kegiatan santri SMP AL-Qur'an Ma'rifatussalaam Quranic Boarding School yang seru, inovatif dan menyenangkan.
                </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between">
                {news.sort((a, b) => {
                    return new Date(b.tanggal_berita) - new Date(a.tanggal_berita);
                })
                    .slice(0, 6)
                    .map(item => {

                        let isi = item.isi_berita;
                        if (isi.length > 100) {
                            isi = isi.substr(0, 100) + '[...]'
                        }
                        let datePart = item
                                .tanggal_berita
                                .match(/\d+/g),
                            monthInd = [
                                "",
                                "Januari",
                                "Februari",
                                "Maret",
                                "April",
                                "Mei",
                                "Juni",
                                "Juli",
                                "Agustus",
                                "September",
                                "Oktober",
                                "November",
                                "Desember"
                            ],
                            year = datePart[0],
                            month = parseInt(datePart[1]),
                            newMonth = monthInd[month],
                            day = datePart[2];

                        let ValueTgl = day + '/' + newMonth + '/' + year

                        return <div key={item.id} className={style.wrapper}>
                            <div className={style.imgWrap}>
                                <img
                                    src={`https://marifatussalaam.org/assets/berita/${item.image}`}
                                    alt="tidak di temukan"></img>
                                <p className={style.date}>
                                    {ValueTgl}
                                </p>
                            </div>
                            <div className={style.body}>
                                <p className={style.title}>
                                    {item.judul_berita}
                                </p>

                                <div
                                    dangerouslySetInnerHTML={{
                                    __html: isi
                                }}
                                    className={style.desc}/>

                                <button className={style.btnDetails}>
                                    Lihat selengkapnya

                                </button>
                            </div>
                        </div>

                    })
}
            </div>
        </>
    )
}

export default News