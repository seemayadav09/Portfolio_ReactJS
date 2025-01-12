import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className=''>
        <div className='w-full md:w-1/2 mx-auto text-center text-gray-600 dark:text-gray-400  mb-3 text-nowrap text-[11px]'>
            <p> &copy; {currentYear}, Seema Yadav. Thank you for visiting my portfolio (❁´◡`❁)</p>
        </div>
    </div>
  )
}

export default Footer