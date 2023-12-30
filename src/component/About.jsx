import React from 'react'
import Navba from './Navba'
import Footer from './Footer'

const About = () => {
  return (
 <>
 <Navba/><div className="gap h-28"></div>
 {/* our team */}
 <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Our team</h1>
		<p className="max-w-2xl text-center dark:text-gray-400">Our dedicated team collaborates seamlessly, leveraging diverse skills and innovative ideas to achieve exceptional results in every project we undertake.</p>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://cdn.pixabay.com/photo/2020/05/17/04/56/boy-5179983_640.jpg" />
				<p className="text-xl font-semibold leadi">akshay</p>
				<p className="dark:text-gray-400">programer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://cdn.pixabay.com/photo/2021/03/27/19/25/alone-boy-6129399_1280.jpg" />
				<p className="text-xl font-semibold leadi">jay singh</p>
				<p className="dark:text-gray-400">social expert</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcWw8nRE9Al1c2Khi_GVCGuYG-z0LSPFthg&usqp=CAU" />
				<p className="text-xl font-semibold leadi">minakshi</p>
				<p className="dark:text-gray-400">digital markating expert</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://as1.ftcdn.net/v2/jpg/02/94/70/60/1000_F_294706012_8mMfO8H70OIXN67hLl7za04OEYkTfCCe.jpg" />
				<p className="text-xl font-semibold leadi">jasmin</p>
				<p className="dark:text-gray-400">photo editer</p>
			</div>
		
		</div>
	</div>
</section>
{/* about description */}
<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracki text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
					<p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
				</div>
			</details>
		</div>
	</div>
</section>
 {/* ------ */}

 
 <Footer/>
 </>
  )
}

export default About