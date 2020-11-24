import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="lg:text-center">
                <p
                    className="text-md leading-6 text-indigo-600 font-semibold tracking-wide uppercase">School Of Huffadz</p>
                <h3
                    className="mt-2 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Ma'rifatussalaam Quranic Boarding School
                </h3>
              
            </div> */}

            <div className="mt-2">
                <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <li>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                    <FontAwesomeIcon icon={faPhoneAlt} size="lg"/>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 tracking-wide font-medium text-gray-900">
                                    Bapak Arief Luqmananto</h4>
                                <p className="mt-2 text-lg leading-6 tracking-wide font-light text-gray-500">
                                    0856 3325 312
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-10 md:mt-0">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <FontAwesomeIcon icon={faPhoneAlt} size="lg"/>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 tracking-wide font-medium text-gray-900">Ibu Siti Durry</h4>
                                <p className="mt-2 text-lg leading-6 tracking-wide font-light text-gray-500">
                                0822 6222 0924
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-10 md:mt-0">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                    <FontAwesomeIcon icon={faPhoneAlt} size="lg"/>

                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 tracking-wide font-medium text-gray-900">Customer Service 1</h4>
                                <p className="mt-2 text-lg leading-6 tracking-wide font-light text-gray-500">
                                0811 1111 2239 
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="mt-10 md:mt-0">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div
                                    className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                    <FontAwesomeIcon icon={faPhoneAlt} size="lg"/>

                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 tracking-wide font-medium text-gray-900">Customer Service 2</h4>
                                <p className="mt-2 text-lg leading-6 tracking-wide font-light text-gray-500">
                                0811 1111 2249
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    )
}

export default Contact