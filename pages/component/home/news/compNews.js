import style from './news.module.scss'
import React from 'react'

function CompNews({judul, isi}) {

    // console.log(isi)
    return (
        // <div className="container mx-auto">
            // <div className="">
                <div className={style.wrapper}>
                    <div className={style.imgWrap}></div>
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