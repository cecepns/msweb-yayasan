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
            const response = await fetch(`https://marifatussalaam.org/Rest_api?id=${id}`);
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
        if (data.length > 0) {
            content = 
                    <div className="container mx-auto mt-20">
                    {data.map(i => {
                        return <div key={i.id}>
                            <div>
                            <img
                                    src={`https://marifatussalaam.org/assets/berita/${i.image}`}
                                    alt="tidak di temukan"></img>
                            </div>
                            <p>
                                {i.judul_berita}
                            </p>
                            <div
                                dangerouslySetInnerHTML={{
                                __html: i.isi_berita
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
    if (!ctx.req) {
        return {list: []}
    }
    const id = ctx.query.id
    const response = await fetch(`https://marifatussalaam.org/Rest_api?id=${id}`);
    const list = await response.json();
    return {list: list}
}

export default DetailNews
