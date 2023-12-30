import React from 'react'
import Hero from "../image/hero.jpg"
import Navba from './Navba'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
	return (

		<>

			<Navba />
			<div className="gap h-16"></div>

			<section className="">
				<div className="container  flex flex-col justify-center p-6  mx-auto lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leadi sm:text-6xl">The Delhi of

						</h1>
						<span className="text-5xl font-bold leadi sm:text-6xl ">best coding  Insititute</span>
						<p className="mt-6  text-2xl sm:mb-12">Learn coding, create compelling content for your website's success.
						</p>
						{/* <p>"In a digital world where content is king, coding skills elevate you to website royalty. Here's how to wield those powers for captivating content and a thriving online presence."</p> */}
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<Link style={{ color: "white" }} to={"/sign up"} className="px-8 py-3 text-lg font-semibold rounded bg-red-600 text-white-600">Start learn</Link>
							<Link to={"/course"} className="px-8 py-3 text-lg font-semibold border rounded border-black border-1 capitalize ">more info</Link>
						</div>
					</div>
					<div className="flex items-center max-md:hidden justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img src={Hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " style={{ borderTopLeftRadius: "50px", borderBottomRightRadius: "50px" }} />
					</div>
				</div>

			</section>
			{/* top about */}
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">

						<div className="flex flex-col items-center md:p-4">
							<div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">450+</div>
							<div className="text-sm font-semibold sm:text-base">Sutudent</div>
						</div>

						<div className="flex flex-col items-center md:p-4">
							<div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">50+</div>
							<div className="text-sm font-semibold sm:text-base">company job opportunities</div>
						</div>


						<div className="flex flex-col items-center md:p-4">
							<div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">Trusted</div>
							<div className="text-sm font-semibold sm:text-base">Government certificate</div>
						</div>

						<div className="flex flex-col items-center md:p-4">
							<div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">A+</div>
							<div className="text-sm font-semibold sm:text-base">Student result</div>
						</div>

					</div>
				</div>
			</div>
			{/* ------------------- */}
			{/* top 3 course */}
			<h1 className='text-center text-4xl capitalize font-bold underline TradeWinds'>most students selected course</h1>
			<div className="top-card flex justify-center items-center max-[768px]:flex-col align-center">
				<div className="max-w-xs rounded-md m-5  shadow-md dark:bg-gray-900 dark:text-gray-100">
					<img src="https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_1280.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
					<div className="flex flex-col justify-between p-6 space-y-8">
						<div className="space-y-2">
							<h2 className="text-3xl font-semibold tracki">Digital markating</h2>
							<p className="dark:text-gray-100">Strategize, Optimize, Convert: Master Digital Marketing in 10 Lessons.</p>
						</div>
					<Link to={"/course"} className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"> Read more</Link>
					</div>
				</div><div className="max-w-xs m-5  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
					<img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
					<div className="flex flex-col justify-between p-6 space-y-8">
						<div className="space-y-2">
							<h2 className="text-3xl font-semibold tracki">Full stack web developer</h2>
							<p className="dark:text-gray-100">Master coding front to back with Full Stack Web Developer.</p>
						</div>
						<Link to={"/course"} className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"> Read more</Link>
					</div>
				</div><div className="max-w-xs rounded-md m-5 shadow-md dark:bg-gray-900 dark:text-gray-100">
					<img src="https://www.acquisition-international.com/wp-content/uploads/2021/09/UI-UX-Design.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
					<div className="flex flex-col justify-between p-6 space-y-8">
						<div className="space-y-2">
							<h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
							<p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
						</div>
						<Link to={"/course"} className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"> Read more</Link>
					</div>
				</div>
			</div>
			{/* job apoctunity */}
			<h1 className='text-center text-4xl capitalize font-bold underline TradeWinds'>We provide job opportunities</h1>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col-reverse mx-auto lg:flex-row">
					<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
						<div className="flex space-x-2 sm:space-x-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<div className="space-y-2">
								<p className="text-lg font-medium leadi">
									Unlock your potential with exciting job opportunities that align with your skills and aspirations in the ever-evolving job market.</p>

							</div>
						</div>
						<div className="flex space-x-2 sm:space-x-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<div className="space-y-2">
								<p className="text-lg font-medium leadi">Elevate your career with a range of job opportunities tailored to your expertise, providing a path to professional growth and success.</p>

							</div>
						</div>
						<div className="flex space-x-2 sm:space-x-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<div className="space-y-2">
								<p className="text-lg font-medium leadi">Explore diverse job options that cater to your unique talents, offering a chance to thrive and make a meaningful impact in your chosen field.</p>

							</div>
						</div>
					</div>
					<div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
						<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
							<img src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
						</div>
					</div>
				</div>
			</section>
			{/* ceo testmonial  */}
			<h1 className='text-center text-4xl capitalize font-bold underline TradeWinds'>Testmonial</h1>
			<figure className="max-w-screen-md mx-auto text-center">
				<svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
					<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
				</svg>
				<blockquote>
					<p className="text-2xl italic font-medium text-gray-900 dark:text-white">Exceptional experience! The team's dedication and expertise surpassed our expectations. They delivered innovative solutions, transforming our vision into a reality. Highly recommend for top-notch service</p>
				</blockquote>
				<figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
					{/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"></img> */}
					<div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
						<cite className="pe-3 font-medium text-gray-900 dark:text-white">Sagar Chaudhary</cite>
						<cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at webnex</cite>
					</div>
				</figcaption>
			</figure>

			{/* footer */}
			<Footer />
		</>
	)
}

export default Home