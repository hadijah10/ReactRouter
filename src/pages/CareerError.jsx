import {Link,useRouteError} from 'react-router-dom'

export default function CareerError(){
const error = useRouteError()

    return (
        <>
        <div className="careers-error">
            <h1>Error</h1>
            <p>{error.message}</p>
            <Link to='/'>Back to homepage</Link>
        </div>
        </>
    );
}