import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'

const inter = Inter({ subsets: ['latin'] })

export default function Programming() {
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
        <div className='w-full pt-12 m-2 flex flex-col justify-center items-center text-center text-cyan-900'>
          <h1 className='text-xl md:text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Programming Fundamentals</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>Programming is the process of designing, writing, testing, and maintaining computer programs. A computer program is a set of instructions that tells a computer what to do. </h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>The building blocks of a programming language are variables, data types, control structures, and functions.  A <i>variable</i> stores data in a program.  A variable's <i>data type</i> decides what operations can be performed on the variable.  A <i>control structure</i> is like the flowchart of the program, showing the computer what to do next.  A <i>function</i> is something a program can do.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>"Programming languages" are readable by humans and executable by machines.  Some popular programming languages include Python, Java, C++, and JavaScript. </h3>

         
        </div>
      </main>
      <Footer />
    </>
  )
}
