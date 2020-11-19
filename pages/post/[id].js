import React from 'react'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

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
            const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/msweb749567184.wordpress.com/posts/slug:${id}`);
            const list = await response.json();
            setData([list]);
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
    let error = data.map(i => {
        return i.error
    }).toString()


    if (loading) {
        if (error !== "unknown_post")
         {
            content = 
                    <div className="container mx-auto mt-20 break-words py-10 px-5">
                    {data.map(i => {
                        return <div key={i.ID}>
                            <div className="lg:w-2/4">
                            <img
                                    src={`${i.post_thumbnail.URL}`}
                                    alt="afwan tidak ada thumbnail :)"></img>
                            </div>
                            <p className="text-3xl py-5 font-bold">
                                {i.title}
                            </p>
                            <div className="lg:w-2/3"
                                dangerouslySetInnerHTML={{
                                __html: i.content
                            }}></div>
                        </div>
                    })
                }
                    </div>
        } else {
            content = <div
                className="bg-white-300 mx-auto my-auto w-full h-full flex justify-center items-center fixed">
                Mohon maaf, berita tidak di temukan.
            </div>
        }
    } else {
        content = <div
            className="bg-white-300 mx-auto my-auto w-full h-full flex justify-center items-center fixed">
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
    const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/msweb749567184.wordpress.com/posts/slug:${id}`);
    const list = await response.json();
    return {list: [list]}
}

export default DetailNews
