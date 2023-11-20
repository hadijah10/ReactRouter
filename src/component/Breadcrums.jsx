import {Link,useLocation} from 'react-router-dom'

export default function Breadcrums(){
const location = useLocation()

let currentink = ''
const crumbs = location.pathname.split('/')
.filter(crumbs => crumbs!=='')
.map(crumbs => {
    currentink += `${crumbs}`

    return(
        <div className="crumb" key ={crumbs}>
            <Link to={currentink}>{crumbs}</Link>
        </div>
    )
})
    return(
        <div className='breadcrumbs'>{crumbs}</div>
    );
}