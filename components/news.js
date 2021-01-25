import style from './news.module.scss'
import {useRouter} from 'next/router'
// import Link from 'next/link'

function News({news}) {

    const router = useRouter();

    return (
        <div className="bg-gray-200 lg:px-12 py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">

                <h3
                    className="mt-2 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Berita Terbaru
                </h3>
                <p
                    className="my-4 max-w-2xl font-light text-lg leading-7 text-black-500 opacity-75 lg:mx-auto">
                    Simak berita yang menarik, bermanfaat dan seputar kegiatan santri.
                </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between lg:mb-4">
                {news.length > 1
                    ? news
                    // .sort((a, b) => {     return new Date(b.tanggal_berita) - new
                    // Date(a.tanggal_berita); })     .slice(0, 6)
                        .map(item => {

                        let isi = item.content.rendered;
                        let title = item.title.rendered;

                        if (title.length > 40) {
                            title = title.substr(0, 40) + '[...]'
                        }
                        if (isi.length > 100) {
                            isi = isi.substr(0, 100) + '[...]'
                        }
                        let datePart = item
                                .date
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

                        let ValueTgl = day + '/' + newMonth + '/' + year;

                        return <div key={item.id} className={style.wrapper}>
                            <div className={style.imgWrap}>
                                <img
                                    src={`${item.featured_image.size_full}`}
                                    alt="afwan tidak ada thumbnail :)"></img>
                                <p className={style.date}>
                                    {ValueTgl}
                                </p>
                            </div>
                            <div className={style.body}>

                                <p
                                    className="text-md mb-1 leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                                    {item
                                        .category
                                        .map(name => {
                                            return name.name
                                        })
                                        .join("/")}
                                </p>

                                <p className={style.title}>
                                    {title}
                                </p>

                                <div
                                    className={style.desc}
                                    dangerouslySetInnerHTML={{
                                    __html: isi
                                }}></div>

                                <button
                                    className={style.btnDetails}
                                    onClick={() => router.push({asPath: 'post/id', pathname: `post/${item.slug}`})}>
                                    Lihat selengkapnya

                                </button>
                            </div>
                        </div>

                    })
                    : <div className="mx-auto">
                        <p
                            className="my-4 max-w-2xl font-light text-lg text-center leading-7 text-red-500 opacity-75 lg:mx-auto">
                            Mohon maaf gagal memuat berita, cek koneksi anda terlebih dahulu kemudian
                            refresh halaman.
                        </p>
                    </div>}
            </div>
        </div>
    )
}

export default News