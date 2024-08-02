import React from 'react'
import { addWatch } from '../server-actions/addWatch'

export default function WatchForm() {



  return (
    <form action={addWatch} className='mb-6'>
      <div className='mb-4'> 
        <label htmlFor='brand' className='block text-white mb-2'>Brand</label>
        <input type='text' id='brand' name="brand" required className='shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-3'/>
      </div>
      <div className='mb-4'>
        <label htmlFor='model' className='block text-white mb-2' >Model</label>
        <input type='text' id='model' name="model" required className='shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-3'/>
        
      </div>
      <div className='mb-4'>
        <label htmlFor='refNumber' className='block text-white mb-2' >Reference Number</label>
        <input type='text' id='refNumber' name="refNumber" required className='shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-3'/>
        
      </div>
      <button type='submit' className='bg-gray-600 hover:bg-gray-300 text-white hover:text-black p-2'> 
        Submit
      </button>
    </form>
  )
}