import React from 'react'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Head from 'next/head'

function DetailNews({list}) {
    // const router = useRouter() let detail = router.query console.log(router)

    const router = useRouter();
    const id = router.query.id

    const [loading,
        setLoading] = useState(false)

    const [data,
        setData] = useState(list)

    useEffect(() => {
        async function detailNews() {
            const response = await fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/posts?slug=${id}`);
            const list = await response.json();
            setData(list);
            setLoading(true)
        }

        if (data.length === 0) {
            detailNews();
        } else {
            setTimeout(() => {
                setLoading(true)
            }, 1000);
        }

    }, [])

    let content = null
  
    if (loading) {
        if (data.length > 0)
         {
            content = 
                    <div className="container mx-auto mt-20 py-10 px-5">
                    {data.map(i => {
                        return <div key={i.id} className="flex flex-col items-center">
                             <Head>
                                <title>{i.title.rendered} </title>
                                <link rel="icon" href="/logo_sekolah.png"/>
                                <meta
                                    name="description"
                                    content={i.title.rendered}></meta>

                                <meta
                                    property="og:title"
                                    content={i.title.rendered}/>
                        
                            </Head>
                            <div>
                            <img
                                    src={`${i.featured_image.size_full}`}
                                    alt="afwan tidak ada thumbnail :)"
                                    className="w-auto"
                                    ></img>
                            </div>
                            <p className="text-center text-3xl py-5 font-bold">
                                {i.title.rendered}
                            </p>
                            <div className="lg:w-2/3"
                                dangerouslySetInnerHTML={{
                                __html: i.content.rendered
                            }}></div>
                        </div>
                    })
                }
                    </div>
        } else {
            content = <div
                className="h-screen bg-white-300 mx-auto my-auto w-full flex justify-center items-center">
                Mohon maaf, berita tidak di temukan.
            </div>
        }
    } else {
        content = <div
            className="h-screen bg-white-300 mx-auto my-auto w-full flex justify-center items-center">
            loading...
        </div>
    }

    return (
        <>
            {content}
        </>
    )
}

DetailNews.getInitialProps = async ctx => {
    console.log(ctx)
    if (!ctx.req) {
        return {list: []}
    }
    const id = ctx.query.id
    const response = await fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/posts?slug=${id}`);
    const list = await response.json();
    return {list: list}
}

export default DetailNews
