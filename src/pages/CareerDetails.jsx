import { useLoaderData, useNavigation, useParams } from "react-router-dom";


export default function CareerDetails(){
    const {id} = useParams()
    const details = useLoaderData();
    const navigation = useNavigation();
    //navigator.onLine is used to check whether one is nline usually set as st
    if(navigation.state === 'Loading'){
        return <p> Loading ...</p>
    }
    else if(navigation.state === 'Error'){
        return <p>Error encountered.</p>
    }
    return(
        <>
            <div className="career-details">
              
            <div><h2>Career Details {details.title}</h2>
              <p>Starting salary: {details.salary}</p>
              <p>Location: {details.location}</p></div>
              <div className="details">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum cupiditate obcaecati nostrum ut ad reiciendis, 
                architecto saepe culpa inventore maiores eveniet laudantium laboriosam officiis porro harum, recusandae illum voluptatum placeat.
              </div>
            </div>
        </>
    )
}
export const careerDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch('http://localhost:4000/careers/'+id)
    if(!res.ok){
        throw Error("Could not find career data");
    }
   return res.json();
}