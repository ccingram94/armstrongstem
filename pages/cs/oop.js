import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'

const inter = Inter({ subsets: ['latin'] })

export default function OOP() {
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
          <h1 className='text-xl md:text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Object-Oriented Programming</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>Object-oriented programming is a <i>paradigm</i> that uses objects to represent and change data.  An <i>object</i> contains data and the operations that can be performed on that data.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>A <i>class</i> is a blueprint for creating objects.  A class defines the <i>attributes</i> (data) and <i>methods</i> (functions) that its objects will have.  You can even create a new class based on an existing class.  This is called <i>inheritance</i> because the new subclass will inherit the attributes and methods of the superclass.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>Another important feature of object-oriented programming is <i>polymorphism.</i>  This allows objects of different classes to be treated like they are the same.  This means your code can work on multiple types of objects.</h3>

         
        </div>
      </main>
      <Footer />
    </>
  )
}
