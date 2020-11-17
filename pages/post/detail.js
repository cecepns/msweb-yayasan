import {withRouter} from 'next/router'
import {useRouter} from 'next/router'


function Detail(props) {
    const router = useRouter();
    console.log(router)
    return (
        <div className="mt-20"> id post : {props.router.query.id} </div>
    )
}

export default withRouter(Detail) 