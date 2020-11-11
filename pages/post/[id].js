import React from 'react'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

function DetailNews({list}) {
    // const router = useRouter() let detail = router.query console.log(router)

    const router = useRouter();
    const id = router.query.id

    // const [loading, setLoading] = useState(list)

    const [data,
        setData] = useState(list)

    useEffect(() => {
        async function detailNews() {
            const response = await fetch(`https://marifatussalaam.org/Rest_api?id=${id}`);
            const list = await response.json();
            // setLoading(!loading)
            setData(list)
        }

        if (data.length === 0) {
            detailNews();
        }

    }, [data])

    console.log(list)

    return (
        <div>

            {data.length > 0
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
