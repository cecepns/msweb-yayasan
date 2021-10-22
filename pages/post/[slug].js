import React from 'react'
import Head from 'next/head'

export async function getStaticPaths() {
    const response = await
        fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/posts`),
        listSlug = await response.json();

        const paths = listSlug.map(data => ({
            params: {
                slug: data.slug
            }
        }))

        return {paths, fallback: true};
    }

export async function getStaticProps({params}) {

        const response = await
            fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/posts?slug=${params.slug}`),
            list = await response.json();

            return {props: {
                    list
                }, revalidate: 10}

        }



function DetailNews({list}) {

            if (list.length > 0) {
                return <div className="min-h-screen container mx-auto mt-20 py-10 px-5">
                    {list.map(i => {
                        return <div key={i.id} className="flex flex-col items-center">
                            <Head>
                                <title>{i.title.rendered}
                                </title>
                                <link rel="icon" href="/logo_sekolah.png"/>
                                <meta name="description" content={i.title.rendered}></meta>
                                <meta property="og:title" content={i.title.rendered}/>
                            </Head>
                            
                            <div>
                                <img
                                    src={`${i.featured_image.size_full}`}
                                    alt="afwan tidak ada thumbnail :)"
                                    className="w-auto"></img>
                            </div>
                            <p className="text-center text-3xl py-5 font-bold">
                                {i.title.rendered}
                            </p>
                            <div
                                className="lg:w-2/3"
                                dangerouslySetInnerHTML={{
                                __html: i.content.rendered
                            }}></div>
                        </div>
                    })
                    }
                </div>
            } else {
                return <div
                    className="h-screen bg-white-300 mx-auto my-auto w-full flex justify-center items-center">
                    Mohon maaf, berita tidak di temukan.
                </div>
            }

        }

export default DetailNews
