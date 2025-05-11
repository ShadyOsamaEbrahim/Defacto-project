import { Fragment } from "react";
import IconButtons from "../components/Buttons";
import { Menu } from "lucide-react";
import { Heart } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingBagIcon } from "lucide-react";
export default function TopNavbar() {
    return (
        <div className="flex p-3 content-center border " >


            <IconButtons tw="flex-none" ><Menu /></IconButtons>
        <h1 className="grow font-medium text-xl pl-1 ">DeFacto</h1>
        <div className="flex flex-none gap-3">
        <IconButtons><User /></IconButtons>
        <IconButtons><Heart /></IconButtons>
        <IconButtons><ShoppingBagIcon /></IconButtons>
        </div>



        </div>




    )

}