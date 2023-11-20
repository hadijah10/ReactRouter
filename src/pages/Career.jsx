import { Link,useLoaderData } from "react-router-dom";

export default function Career(){
    const careers = useLoaderData()
    return(
        <> 
        <div className="careers">
        {careers.map( data => (
                <Link to={data.id.toString()} key={data.id}>
                    <p>{data.title}</p>
                    <p>Based in {data.location}</p>
                </Link>
            ))
        }
        </div>
        </>
    );
}

export const careersLoader = async() => {
    const res = await fetch("http://localhost:4000/careers");
    if(!res.ok){
        throw Error("Could not fetch career data")
    }
    return res.json();
}