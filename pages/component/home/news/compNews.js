import style from './news.module.scss'
import React from 'react'

function CompNews({judul, isi, img}) {
    
    // console.log(isi)
    return (
        // <div className="container mx-auto">
            // <div className="">
                <div className={style.wrapper}>
                    <div className={style.imgWrap}>
                        <img src={`https://marifatussalaam.org/assets/berita/${img}`} alt="tidak di temukan"></img>
                    </div>
                    <div className={style.body}>
                        <p className={style.title}>
                            {judul}
                        </p>

                        <div
                            dangerouslySetInnerHTML={{
                            __html: isi
                        }}
                            className={style.desc}/>
                    </div>
                </div>
            // </div>
        // </div>

    )
}

export default CompNews