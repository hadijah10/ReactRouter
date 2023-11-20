import { Outlet } from "react-router-dom";

export default function CareerLayout(){
    return(
        <div>
            <h1>Careers</h1>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}