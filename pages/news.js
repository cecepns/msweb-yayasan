import style from '../components/news.module.scss'
import {useRouter, withRouter} from 'next/router'
import ReactPaginate from 'react-paginate';
// import stylePaginate from '../components/paginate.module.scss';

function News({news, count, currentPage}) {

    const router = useRouter();

    const pagginationHandler = (page) => {
        const currentPath = router.pathname;
        const currentQuery = {
            ...router.query
        }; //Copy current query to avoid its removing
        currentQuery.page = page.selected + 1;

        router.push({pathname: currentPath, query: currentQuery});

    };
    let content = null
    if (news.length > 0) {
        content = <div className="bg-gray-200 lg:px-12 pt-20 pb-5">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
                <h3
                    className="mt-5 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Berita Terbaru
                </h3>
                <p
                    className="my-4 max-w-2xl font-light text-lg leading-7 text-black-500 opacity-75 lg:mx-auto">
                    Simak berita yang menarik, bermanfaat dan seputar kegiatan santri.
                </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-between">
                {news
                // .sort((a, b) => {     return new Date(b.tanggal_berita) - new
                // Date(a.tanggal_berita); })     // .slice(0, 6)
                    .map(item => {

                    let isi = item.content.rendered;
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

                    let ValueTgl = day + '/' + newMonth + '/' + year

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
                                {item.title.rendered}
                            </p>

                            <div
                                dangerouslySetInnerHTML={{
                                __html: isi
                            }}
                                className={style.desc}/>

                            <button
                                className={style.btnDetails}
                                onClick={() => router.push({asPath: 'post/id', pathname: `post/${item.slug}`})}>
                                Lihat selengkapnya

                            </button>
                        </div>
                    </div>

                })
}
            </div>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                initialPage={currentPage - 1}
                pageCount={count}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                disableInitialCallback={true}
                onPageChange={pagginationHandler}/>

        </div>

    } else {
        content = <div
            className="bg-white-300 mx-auto my-auto my-auto w-full h-full flex justify-center items-center fixed">
            Halaman Berita tidak di temukan
        </div>
    }

    return (
        <>
        {content}
        </>
        )
}

export async function getServerSideProps({query}) {
    // console.log(req.params)
    const page = query.page || 1

    console.log(page)

    const res = await fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/posts?per_page=3&page=${page}`)
    const news = await res.json()

    const count = await fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/posts/`)
    const resCount = await count.json()
    return {
        props: {
            news: news,
            count: Math.ceil(resCount.length / 3),
            currentPage: 1
        }, // will be passed to the page component as props
    }
}

export default News