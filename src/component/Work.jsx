import React from 'react'
import Navba from './Navba'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
<>
<Navba/><div className="gap h-20"></div>
<div className="work ">
<h1 className='text-center text-2xl capitalize font-bold underline s'>
"Join Our Team: Exciting Opportunities Await – Work with Us for a Rewarding Career Journey!"</h1> 
 <p className='text-center px-10'>
Embark on a fulfilling career journey by choosing to work with us. Our team is more than just colleagues; we're a close-knit community driven by innovation and collaboration. As we constantly strive for excellence, you'll find opportunities for professional growth and development. Join us in making a meaningful impact as we work together to create, innovate, and achieve success. Your unique skills and perspective are not just welcomed; they're celebrated in our dynamic workplace. Explore a rewarding career path with us and be part of a team that values your contributions and encourages your aspirations</p>
<br />
<div className="work-con flex justify-center ">
<Link to={"/contact"} className='text-2xl border px-5 py-1 bg-red-600 text-white rounded-lg' >Contact</Link>
</div>
</div>
<div className="w-full dark:bg-gray-500">
	<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
		<h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100">Get Our Updates</h1>
		<p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
		<div className="flex flex-row">
			<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-red-600 text-white">Subscribe</button>
		</div>
	</div>
</div>
<Footer/></>
  )
}

export default Work