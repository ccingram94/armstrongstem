import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'
import { useEffect, useRef } from 'react';
import { LayoutGroup } from 'framer-motion'
import { ArrowDownIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

const inter = Inter({ subsets: ['latin'] })

export default function PythonBasics() {
  return (
    <>
      <Head>
        <title>Armstrong STEM Notes</title>
        <meta name="description" content="free python and programming notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen w-full bg-gradient-to-b from-white to-teal-100 via-cyan-100'>
        <Header />
        <div className='w-full pt-12 p-2 pt-12 flex flex-col justify-center items-center text-center text-cyan-900'>
          <h1 className='text-xl md:text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Python Basics</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>Python is a fun and easy programming language.</h3>

          <div className='p-2 m-2 max-w-6xl w-fit items-center justify-center text-left bg-white text-stone-900 rounded-xl'>
            <div className='flex flex-col w-full items-center justify-center'>
              <div className='w-full flex flex-row opacity-80 hover:opacity-100 transition-all'>
                <h3 className='font-bold w-full p-2 m-2 text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>History</h3>
                <ChevronDownIcon className='text-cyan-600 p-2 m-2 h-12 w-12 w-fit' />
              </div>
              <div className='w-full flex flex-col'>
                <p className='text-sm lg:text-md p-2 m-2'>Why Python?  How is it used?  Why was it invented?</p>
              </div>
            </div>
            <hr className='w-full'/>
            <div className='flex flex-col w-full items-center justify-center'>
              <div className='w-full flex flex-row opacity-80 hover:opacity-100 transition-all'>
                <h3 className='font-bold w-full p-2 m-2 text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Introduction</h3>
                <ChevronDownIcon className='text-cyan-600 p-2 m-2 h-12 w-12 w-fit' />
              </div>
              <div className='w-full flex flex-col'>
                <p className='text-sm lg:text-md p-2 m-2'>Basic information about Python syntax.</p>
              </div>
            </div>
            <hr className='w-full'/>
            <div className='flex flex-col w-full items-center justify-center'>
              <div className='w-full flex flex-row opacity-80 hover:opacity-100 transition-all'>
                <h3 className='font-bold w-full p-2 m-2 text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Variables</h3>
                <ChevronDownIcon className='text-cyan-600 p-2 m-2 h-12 w-12 w-fit' />
              </div>
              <div className='w-full flex flex-col'>
                <p className='text-sm lg:text-md p-2 m-2'>Python variables and how to use them.</p>
              </div>
            </div>
            <hr className='w-full'/>
            <div className='flex flex-col w-full items-center justify-center'>
              <div className='w-full flex flex-row opacity-80 hover:opacity-100 transition-all'>
                <h3 className='font-bold w-full p-2 m-2 text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Data Types</h3>
                <ChevronDownIcon className='text-cyan-600 p-2 m-2 h-12 w-12 w-fit' />
              </div>
              <div className='w-full flex flex-col'>
                <p className='text-sm lg:text-md p-2 m-2'>Python data types and how to use them.</p>
              </div>
            </div>
            <hr className='w-full'/>
            <div className='flex flex-col w-full items-center justify-center'>
              <div className='w-full flex flex-row opacity-80 hover:opacity-100 transition-all'>
                <h3 className='font-bold w-full p-2 m-2 text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Operators</h3>
                <ChevronDownIcon className='text-cyan-600 p-2 m-2 h-12 w-12 w-fit' />
              </div>
              <div className='w-full flex flex-col'>
                <p className='text-sm lg:text-md p-2 m-2'>Python operators and how to use them.</p>
              </div>
            </div>
            <hr className='w-full'/>
            <div className='flex flex-col w-full items-center justify-center'>
              <div className='w-full flex flex-row opacity-80 hover:opacity-100 transition-all'>
                <h3 className='font-bold w-full p-2 m-2 text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Control Structures</h3>
                <ChevronDownIcon className='text-cyan-600 p-2 m-2 h-12 w-12 w-fit' />
              </div>
              <div className='w-full flex flex-col'>
                <p className='text-sm lg:text-md p-2 m-2'>Python control structures like conditionals, loops, and exception handling.</p>
              </div>
            </div>
            <hr className='w-full'/>
            <div className='flex flex-col w-full items-center justify-center'>
              <div className='w-full flex flex-row opacity-80 hover:opacity-100 transition-all'>
                <h3 className='font-bold w-full p-2 m-2 text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Data Structures</h3>
                <ChevronDownIcon className='text-cyan-600 p-2 m-2 h-12 w-12 w-fit' />
              </div>
              <div className='w-full flex flex-col'>
                <p className='text-sm lg:text-md p-2 m-2'>Python data structures like lists, sets, tuples, and dictionaries.</p>
              </div>
            </div>
            <hr className='w-full'/>
          </div>

         
        </div>
      </main>
      <Footer />
    </>
  )
}
