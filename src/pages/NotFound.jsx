import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div>
            <h2>Page Not Found</h2>
        <p>Lorem ipsium</p>
        <p>Go to <Link to='/'>Homepage</Link></p>
        </div>
    );
}