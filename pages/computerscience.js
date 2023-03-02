import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function ComputerScience() {
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
        <div className='w-full pt-12 flex flex-col justify-center items-center text-center text-cyan-900'>
          <h1 className='text-xl md:text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Computer Science</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 font-bold max-w-xs lg:max-w-lg'>{data[2].shortdescription}</h3>
          <div className='flex flex-row flex-wrap justify-center items-center text-center p-2 m-2 max-w-6xl'>

            <Link href="/cs/programming">
              <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
                <h3 className='font-bold text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Programming Fundamentals</h3>
                <p className='text-xs p-2 m-2'>variables, data types, control structures, functions</p>
              </div>
            </Link>
            
            <Link href="/cs/oop">
              <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
                <h3 className='font-bold text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Object-Oriented Programming</h3>
                <p className='text-xs p-2 m-2'>classes, objects, inheritance, polymorphism</p>
              </div>
            </Link>

            <Link href="/cs/datastructures">
              <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
                <h3 className='font-bold text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Data Structures</h3>
                <p className='text-xs p-2 m-2'>arrays, linked lists, stacks, queues, trees, graphs</p>
              </div>
            </Link>
            <Link href="/cs/operatingsystems">
              <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
                <h3 className='font-bold text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Operating Systems</h3>
                <p className='text-xs p-2 m-2'>processes, threads, scheduling, synchronization, memory management, file systems</p>
              </div>
            </Link>
            <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
              <h3 className='font-bold text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Computer Networks</h3>
              <p className='text-xs p-2 m-2'>TCP/IP, OSI model, routing, switching</p>
            </div>
          </div>
          <div className='bg-white bg-opacity-90 w-fit max-w-2xl p-2 m-2 rounded-xl transition-all'>
            <h2 className='text-xl lg:text-2xl font-bold m-2 p-2'>Vocabulary</h2>
            <div className='flex flex-col justify-left text-left text-sm'>
              
              <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                <p className='font-bold p-2'>Algorithm</p>
                <p className='text-sm p-2'>A set of instructions to solve a problem or complete a task.</p>
              </div>
              <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                <p className='font-bold p-2'>Computer Architecture</p>
                <p className='text-sm p-2'>How a computer system is organized, including parts like the CPU, memory, and input/output devices.</p>
              </div>
              <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                <p className='font-bold p-2'>Control Structure</p>
                <p className='text-sm p-2'>Loops, conditionals, and other decision-making tools that control how a program executes.</p>
              </div>
              <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                <p className='font-bold p-2'>Data Structure</p>
                <p className='text-sm p-2'>A way to organize and store data in a computer so that it can be used.</p>
              </div>
              <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                <p className='font-bold p-2'>Function</p>
                <p className='text-sm p-2'>A block of code that performs a task.</p>
              </div>
              <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                <p className='font-bold p-2'>Object-Oriented Programming</p>
                <p className='text-sm p-2'>Programming by using "objects" and "classes" to represent and use data.</p>
              </div>
              <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                <p className='font-bold p-2'>Operating System</p>
                <p className='text-sm p-2'>The software that makes a computer work by managing hardware, executing applications, and providing other basic services.</p>
              </div>
              <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                <p className='font-bold p-2'>Programming Language</p>
                <p className='text-sm p-2'> A way to write instructions a computer can understand and execute.</p>
              </div>
              <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                <p className='font-bold p-2'>Recursion</p>
                <p className='text-sm p-2'>Solving a problem by breaking it down into smaller versions of itself.  You can use the
                solution to the small problem to solve the big problem.  Some people define recursion as "a function calling itself."</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
