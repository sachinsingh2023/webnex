import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course from './component/Course'
import Home from './component/Home'
import Contact from './component/Contact'
import Work from './component/Work'
import Login from "./component/Login"
import About from './component/About'
import Blog from './component/Blog'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}>Home</Route>
					<Route path='/contact' element={<Contact />}>contact</Route>
					<Route path='/course' element={<Course/>}>course</Route>
					<Route path='/work-with-us' element={<Work/>}>work with us</Route>
					<Route path='/login' element={<Login/>}></Route>
					<Route path='/about' element={<About/>}></Route>
					<Route path='/blog' element={<Blog/>}></Route>
					<Route path='/sign up' element={<Login/>} ></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default App