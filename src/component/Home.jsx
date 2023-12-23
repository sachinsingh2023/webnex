import React from 'react'
import Hero from "../image/hero.jpg"
import Navba from './Navba'
import Footer from './Footer'

const Home = () => {
  return (

    <>
<Navba/>
<div className="gap h-12"></div>
    <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">The Delhi of 
				
			</h1>
      <span className="text-5xl font-bold leadi sm:text-6xl ">best coding  Insititute</span>
			<p className="mt-6  text-2xl sm:mb-12">Learn coding, create compelling content for your website's success.
			</p>
			{/* <p>"In a digital world where content is king, coding skills elevate you to website royalty. Here's how to wield those powers for captivating content and a thriving online presence."</p> */}
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a  style={{color:"white"}} href="#" className="px-8 py-3 text-lg font-semibold rounded bg-red-600 text-white-600">Start learn</a>
				<a href="#" className="px-8 py-3 text-lg font-semibold border rounded border-black border-1 capitalize ">more info</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={Hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" style={{borderTopLeftRadius:"50px", borderBottomRightRadius:"50px"}}/>
		</div>
	</div>
</section>
{/* footer */}
<Footer/>
</>
  )
}

export default Home