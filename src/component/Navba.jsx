import React from 'react'
import { useState } from 'react'
import logo from "../image/logo.jpg"
import { Link } from 'react-router-dom'

const Navba = () => {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);

  const handleButtonClick = () => {
    setNavbarVisibility(!isNavbarVisible);
  };
    return (
  <>
<nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <Link to={"/"}><img src={logo} class="h-12"style={{width:"120px"}} alt="Flowbite Logo"></img></Link>
      
  </Link>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link to={"/login"} type="button" class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center ">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></Link>
      <button  type="button" onClick={handleButtonClick} class="jabMenu inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="true">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  {/* laptop */}
  <div class="items-center navbaritems max-[768px]:hidden justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul class="flex flex-col p-4 md:p-0 mt-4  font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
      <li>
      <Link to={"/"} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue- text-center" aria-current="page">Home</Link>
      </li>
      <li>
      <Link to={"/course"}  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Course</Link>
      </li>
      <li>
        <Link to={"/blog"} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Blog</Link>
      </li>
      <li>
        <Link to={"/contact"} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</Link>

      </li>
      <li>
      <Link to={"/work-with-us"}  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Work with us</Link>
      </li>
      <li>
        <Link to={"/about"} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">About</Link>
      </li>
    </ul>
  </div>
  {/*  */}
  <div class="items-center navbaritems justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  {isNavbarVisible &&(<ul class="flex flex-col p-4 md:p-0 mt-4  font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
      <li>
      <Link to={"/"} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue- text-center" aria-current="page">Home</Link>
      </li>
      <li>
      <Link to={"/course"}  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Course</Link>
      </li>
      <li>
        <Link to={"/blog"} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Blog</Link>
      </li>
      
      <li>
        <Link to={"/contact"} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</Link>

      </li>
      <li>
      <Link to={"/work-with-us"}  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Work with us</Link>
      </li>
      <li>
        <Link to={"/about"} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">About</Link>
      </li>
    </ul>
  )}</div>
  </div>
</nav>

  </>
  )
}

export default Navba