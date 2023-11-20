import { NavLink,Outlet } from "react-router-dom";
import Breadcrums from "../component/Breadcrums";

export default function RootLayout(){
    return(
        <>
       <header>
     
      <nav>
      <h1>Joberrouter</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='help'>Help</NavLink>
        <NavLink to='careers'>Careers</NavLink>
      </nav>
      
    </header>
    <Breadcrums/>
   <main>
    <Outlet/>
   </main>
        </>
    );
}