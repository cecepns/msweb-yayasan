import TestimoniCompt from './testimoni.child'

function Testimoni() {
    return (
        <div className="bg-white lg:px-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">

                <h3
                    className="mt-2 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Testimoni Santri
                </h3>
                <p
                    className="mt-4 max-w-2xl  font-light text-lg leading-6 text-gray-500 lg:mx-auto tracking-wide">
                    Apa kata santri lulusan SMP AL-Qur'an Ma'rifatussalaam <br></br>  Quranic Boarding School 
                </p>
            </div>

        <TestimoniCompt/>

        </div>
    )
}

export default Testimoni