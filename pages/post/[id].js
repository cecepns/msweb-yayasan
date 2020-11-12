import React from 'react'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

function DetailNews({list}) {
    // const router = useRouter() let detail = router.query console.log(router)

    const router = useRouter();
    const id = router.query.id

    const [loading, setLoading] = useState(false)

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

    }, [data])

    console.log(list)

    return (
        <div>

            {loading
                ? data.map(i => {
                    return <div key={i.id}>
                        <p>
                            {i.image}
                        </p>
                        <p>
                            {i.judul_berita}
                        </p>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: i.isi_berita
                        }}></div>
                    </div>
                })
                : <div
                    className="bg-white-300 mx-auto my-auto w-full h-full flex justify-center items-center fixed">
                    loading...
                </div>
}
        </div>
    )
}

DetailNews.getInitialProps = async ctx => {
    console.log(ctx);
    if (!ctx.req) {
        return {list: []}
    }
    const id = ctx.query.id
    const response = await fetch(`https://marifatussalaam.org/Rest_api?id=${id}`);
    const list = await response.json();
    return {list: list}
}

export default DetailNews
