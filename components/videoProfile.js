import YouTube from 'react-youtube-embed'

function VideProfile() {
    return (

        <div className="bg-gray-200 lg:px-12 py-5">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">

                <h3
                    className="mt-2 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Video Profile
                </h3>
                <p
                    className="my-4 max-w-2xl font-light text-lg leading-7 text-black-500 opacity-75 lg:mx-auto">
                    Video Profile Ma'rifatussalaam Qur'anic Boarding School.
                </p>
            </div>
            <div className="flex justify-center mb-8">

                <div className="w-full lg:w-3/4"> 
                    <YouTube id='https://youtu.be/yIlxK8-Kozo'/>
                </div>

            </div>
        </div>
    )
}

export default VideProfile