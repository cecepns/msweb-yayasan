import style from '../components/news.module.scss'
import {useRouter, withRouter} from 'next/router'
import ReactPaginate from 'react-paginate';
import Head from 'next/head'

function News({news, count, currentPage}) {

    const router = useRouter();

    const pagginationHandler = (page) => {
        const currentPath = router.pathname;
        const currentQuery = {
            ...router.query
        };
        currentQuery.page = page.selected + 1;

        router.push({pathname: currentPath, query: currentQuery});

    };

    const back = () => {
        router.push('/')
    }

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
                    let title = item.title.rendered;

                    if (isi.length > 100) {
                        isi = isi.substr(0, 100) + '[...]'
                    }
                    if (title.length > 40) {
                        title = title.substr(0, 40) + '[...]'
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
                         <Head>
                                <title>{style.title} </title>
                                <link rel="icon" href="/logo_sekolah.png"/>
                                <meta
                                    name="description"
                                    content={style.title}></meta>

                                <meta
                                    property="og:title"
                                    content={style.title}/>
                        
                            </Head>
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
            className="h-screen bg-white-300 mx-auto my-auto my-auto w-full h-full flex justify-center items-center">
            Halaman Berita tidak di temukan
            <button onClick={back} style={{
                color: 'blue'
            }}>
                , Kembali
            </button>
        </div>
    }

    return (
        <div>
            {content} 
        </div>
    )
}

export async function getServerSideProps({query}) {
    const page = query.page || 1
    
    const res = await fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/posts?per_page=3&page=${page}`)
    const count = await res.headers.get('X-WP-Total')
    const news = await res.json();

    return {
        props: {
            news: news,
            count: Math.ceil(count / 3),
            currentPage: page
        }
    }
}

export default News