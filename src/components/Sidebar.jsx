import {useState} from "react"
import {NavLink} from "react-router-dom";
import {RiCloseLine} from "react-icons/all";
import {logo} from "../assets"
import {links } from "../assets/constants"


const Sidebar = () => (
    <>
        <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]" >
            <img className='w-full h-14 object-contain' src={logo} alt="logo"/>
        </div>
    </>
);

export default Sidebar;
