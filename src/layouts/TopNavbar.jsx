import { Fragment } from "react";
import IconButtons from "../components/Buttons";
import { Link, Router } from "react-router";

import { IoApps } from "react-icons/io5";
export default function TopNavbar() {
    return (
        <div className="flex p-3 content-center border gap-2" >
        
        <IconButtons><IoApps /></IconButtons>
        
        <Link to={'gmail.com'}>Gmail</Link>
        
        



        </div>




    )

}