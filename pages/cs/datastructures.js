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
          <h1 className='text-xl md:text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Data Structures</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'> <i>Data structures</i> are useful ways of organizing data.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>An <i>array</i> is a collection of elements of the same type stored in contiguous memory.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>A <i>linked list</i> is a series of nodes containing data and a pointer to the next node.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>A <i>stack</i> is a LIFO (Last-In-First-Out) collection of elements that can "push" (add) new elements or "pop" (remove) them from the top.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>A <i>queue</i> is a FIFO (First-In-First-Out) collection of elements that can "enqueue" (add) new elements at the back or "dequeue" (remove) elements at the front.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>A <i>tree</i> is a series of nodes connected by edges in a hierarchy.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>A <i>graph</i> is a non-linear series of nodes (called "vertices") connected by edges.</h3>
        </div>
      </main>
      <Footer />
    </>
  )
}
