import React from 'react'
import CompNews from './compNews'

function News({news}) {
    // console.log(news.reverse())
    return (
        <div className="flex bg-gray-200 px-12">
            <div className="flex flex-wrap justify-center lg:justify-between">
                {news.slice(0, 6)
                    .map(item => {

                        let isi = item.isi_berita;
                        if (isi.length > 100) {
                            isi = isi.substr(0, 100) + '[...]'
                        }

                        return <CompNews
                            key={item.id}
                            judul={item.judul_berita}
                            isi={isi}
                            img={item.image}/>

                    })
}
            </div>
        </div>

    )
}

export default News