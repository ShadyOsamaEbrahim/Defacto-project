import { Fragment } from "react";

export default function Login(){
    return (
        <Fragment>
            <div className="flex h-screen ">
                <div className="w-1/2 bg-[#333] flex flex-col gap-5 items-center justify-center ">
                <span className="text-5xl font-[Century Gothic] text-[#c9b054] font-bold mb-6">dejavu</span>
                <input type="text" className="w-1/2 bg-white rounded-sm py-1 text-center placeholder:text-center text-gray-500" placeholder="User Name" />
                <input type="password"  className="w-1/2 bg-white rounded-sm text-center py-1 placeholder:text-center text-gray-500" placeholder="Password"/>
                <button className="w-1/2 py-1 rounded-sm font-[Century Gothic] font-bold bg-[#c9b054]">Login</button>
                </div>
                <div className="w-1/2 h-full">

            <img src="src/assets/imgs/login.png" alt="Login Img" className="w-full h-full object-cover" />
                </div>
            </div>
        </Fragment>
    )
}