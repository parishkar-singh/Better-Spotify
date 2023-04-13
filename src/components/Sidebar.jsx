import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu, RiCloseLine } from 'react-icons/all';
import logo from '../assets/logo2.png';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (<div className="mt-10">
  {links.map((item) => (<NavLink
    key={item.name}
    to={item.to}
    onClick={() => handleClick && handleClick()}
    className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-purple-400">
    <item.icon className="w-6 h-6 mr-2"/>
    {item.name}
  </NavLink>))}
</div>);
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (<>
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
      <img className="w-full h-14 object-contain rounded-3xl h-52 w-auto" src={logo} alt="logo"/>
      <NavLinks/>
    </div>
    <div className="absolute md:hidden block top-6 right-3 ">
      {mobileMenuOpen ? (
        <RiCloseLine className="w-6 h-6 text-white mr-2 cursor-pointer" onClick={() => setMobileMenuOpen(false)}/>) : (
        <HiOutlineMenu className="w-6 h-6 text-white mr-2 cursor-pointer" onClick={() => setMobileMenuOpen(true)}/>)}
    </div>
    <div
      className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to -[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
      <img className="w-full h-14 object-contain rounded-3xl h-52 w-auto" src={logo} alt="logo"/>
      <NavLinks handleClick={() => {
        setMobileMenuOpen(false);
      }}/>
    </div>
  </>);
};

export default Sidebar;
