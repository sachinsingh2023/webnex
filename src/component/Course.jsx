import React from 'react'
import Navba from './Navba';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
<>
<Navba/><div className="gap h-12"></div>
<div className="gap h-12"></div>
<h1 className='TradeWinds text-4xl text-center underline '>All Digital courses</h1>
{/* ------ */}
<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src="https://nextr.in/blog/wp-content/uploads/2023/08/Digital-India-1.jpg" alt="" className="object-cover w-full h-44 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl ">We are provide all course for <span className='text-red-600'>Student</span></h3><p>

        Digital courses offer a flexible and accessible way to acquire new skills or deepen existing knowledge. With diverse subjects ranging from programming to marketing, these online resources empower learners to study at their own pace, fostering continuous growth in the rapidly evolving digital landscape.</p>
    
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.pinimg.com/originals/02/74/20/0274207612d515f49012c87803a9e631.gif" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Full stack web developer</h3>
					<p>

          A full-stack web developer is proficient in both front-end and back-end technologies, creating dynamic and responsive websites seamlessly.</p>

				</div>
        <div className="lern bg-red-600 w-full flex justify-center">
       <Link className='text-2xl text-white'>Start Learn</Link>
       </div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.gifer.com/74pZ.gif" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Digital markating</h3>
					<p>
Digital marketing leverages online channels to promote products/services, maximizing reach and engagement through social media, SEO, and content strategies.</p>
         
				</div>
        <div className="lern bg-red-600 w-full flex justify-center">
       <Link className='text-2xl text-white'>Start Learn</Link>
       </div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2bbf3a52005319.5901123c114f4.gif" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Ethical Hacking</h3>
					<p>"Hacking, the unauthorized access to computer systems, poses serious threats to privacy and security, demanding constant vigilance and cybersecurity measures."</p>
				</div>
       <div className="lern bg-red-600 w-full flex justify-center">
       <Link className='text-2xl text-white'>Start Learn</Link>
       </div>
			</a>
      <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://media1.giphy.com/media/RDZo7znAdn2u7sAcWH/giphy.gif?cid=6c09b9527t45aj9ncs0a5gaqcc6xsg73kg261dydebpdo7bb&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Cybersecurity</h3>
					<p>
Cybersecurity is vital in safeguarding digital systems from threats, ensuring data integrity, and protecting against unauthorized access and cybercrimes.</p>
				</div>
       <div className="lern bg-red-600 w-full flex justify-center">
       <Link className='text-2xl text-white'>Start Learn</Link>
       </div>
			</a>
      <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.pinimg.com/originals/5e/64/c4/5e64c4917fd67c71a4a93820cddee7a8.gif" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Video Editing</h3>
					<p>Video editing transforms raw footage into a compelling narrative, combining visuals, sound, and effects to convey a story with impact.</p>
				</div>
       <div className="lern bg-red-600 w-full flex justify-center">
       <Link className='text-2xl text-white'>Start Learn</Link>
       </div>
			</a>
      <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://theclippingpathservice.com/wp-content/uploads/2020/02/GIF-editing-options.gif" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">UI/UX editing</h3>
					<p>
UI/UX editing enhances user experience by refining interfaces, ensuring intuitive navigation, and optimizing visual elements for a seamless, engaging interaction</p>
				</div>
       <div className="lern bg-red-600 w-full flex justify-center">
       <Link className='text-2xl text-white'>Start Learn</Link>
       </div>
			</a>
			
			
		</div>
		
	</div>
</section>
{/* ------------------- */}
{/* testmonial */}
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

    <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">

      <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
        <div className="text-center text-gray-600">"Outstanding service! Exceeded expectations with unparalleled expertise and efficiency. Highly recommend for exceptional results and satisfaction.</div>

        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
            <img src="https://i.pinimg.com/736x/e8/14/48/e81448daebfd5c5e8320c639718d1dd4.jpg" loading="lazy" alt="Photo by Radu Florin" className="h-full w-full object-cover object-center" />
          </div>

          <div>
            <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Ankit sharma</div>
            <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm"> webnex student</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
        <div className="text-center text-gray-600">
"Remarkable experience—flawless execution, unparalleled expertise. Grateful for a team that delivers excellence with every project. Highly recommended!"</div>

        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0tuFhPGHkcp1PrfW6fW8KjbHHvSOpjXvhLAZJ8cXBQ&s" loading="lazy" alt="Photo by christian ferrer" className="h-full w-full object-cover object-center" />
          </div>

          <div>
            <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">kajal mital</div>
            <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">webnex sutudent/digital markating</p>
          </div>
        </div>
      </div>
    
      <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
        <div className="text-center text-gray-600">"Incredible service! Exemplary professionalism and top-notch quality. A game-changer for our project. Highly recommended for excellence!"</div>

        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
            <img src="https://i.pinimg.com/736x/d5/e1/df/d5e1df3bd65a3bbcaab2153b2a36ef50.jpg" loading="lazy" alt="Photo by Ayo Ogunseinde" className="h-full w-full object-cover object-center" />
          </div>

          <div>
            <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Jyoti</div>
            <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">webnex student/ web developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
</>
  )
}

export default Course;