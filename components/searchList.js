import {useState, Fragment} from 'react';
import {useRouter} from 'next/router';
import React from 'react'

function Search({parentCallback}) {
    const router = useRouter();
    const [loading,
        setLoading] = useState(false);

    const [inputSearch,
        setInputSearch] = useState("")

    const [listSearch,
        setListSearch] = useState(null);

    const handleSearchApi = async() => {
        if (inputSearch.length > 3) {
            setLoading(true)
            const searchNews = await fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/search?search=${inputSearch}`)
            const listNews = await searchNews.json();
            setListSearch(listNews)
            setLoading(false)
        } else {
            alert('masukan minimal 3 kata kunci untuk di cari')
        }
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            handleSearchApi();
        }
    }

    const handleInputSearch = (e) => {
        setInputSearch(e.target.value)
    }

    const handlePushUrl = (slug) => {
        router.push({pathname: `/post/${slug}`})
        parentCallback(true)
        setListSearch(null)
        setInputSearch("")

    }

    const handleCloseSearch = ()=> {
        parentCallback(true)
        setListSearch(null)
        setInputSearch("")
    }


    let content = null

    if (listSearch === null) {
        content = ""
    } else {
        if (listSearch.length > 0) {
            content = listSearch.map((item, i) => {
                let slug = item
                    .title
                    .toLowerCase()
                    .replace(/ /g, "-");
                return <div
                    key={i}
                    className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                    <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                    <div className="flex-grow font-medium px-2" onClick={() => handlePushUrl(slug)}>{item.title}</div>
                    <div className="text-sm font-normal text-gray-500 tracking-wide">Berita</div>
                </div>
            })
        } else {
            content = <div
                className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow font-medium px-2">Data tidak di temukan</div>
                <div className="text-sm font-normal text-gray-500 tracking-wide">Tidak ada data</div>
            </div>
        }
    }

    return (
        <Fragment>
            <div className="w-10/12 md:w-full lg:w-full max-w-screen-xl mx-auto px-6">
                <div className="flex justify-center p-4 px-3 py-10">
                    <div className="w-full max-w-md">
                        <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                            <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                                Pencarian
                            </div>
                            <div className="flex items-center bg-gray-200 rounded-md">
                                <div className="pl-2">
                                    <svg
                                        className="fill-current text-gray-500 w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            className="heroicon-ui"
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                                    </svg>
                                </div>

                                <input
                                    className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                                    id="search"
                                    type="text"
                                    placeholder="Masukan pencarian"
                                    value={inputSearch}
                                    onKeyUp={handleEnter}
                                    onChange={handleInputSearch}></input>
                            </div>
                            <div className="max-h-100px py-3 text-sm overflow-auto ">
                                {content}
                            </div>
                            <div
                                className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
                                <button className="hover:text-gray-600 text-gray-500 font-bold py-2 px-4" onClick={handleCloseSearch}>
                                    Batal
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleSearchApi}>
                                    {loading
                                        ? "loading..."
                                        : "cari"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Search;