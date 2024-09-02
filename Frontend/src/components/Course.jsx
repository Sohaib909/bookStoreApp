import React from 'react'
import list from '../../public/list.json'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'
function Course() {
  return (
     <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>Hi we are delighted to see you <span className='text-pink-500'>Here :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid deleniti quas eveniet provident ullam? Doloribus repellendus illum rem nulla, ducimus atque quod totam et architecto earum exercitationem rerum reprehenderit id?</p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
        list.map((item)=>(
           <Cards key={item.id} item={item}/>
        ))
        
        }
      </div>
     </div>
     </>
  )
}

export default Course
