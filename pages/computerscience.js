import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'

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
      <main className='h-full bg-gradient-to-br from-blue-100 to-teal-100 via-cyan-100'>
        <Header />
        <div className='w-full pt-12 lg:pt-24 flex flex-col justify-center items-center text-center text-cyan-900'>
          <h1 className='text-xl md:text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Computer Science</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 font-bold max-w-sm lg:max-w-lg'>{data[2].shortdescription}</h3>
        </div>
      </main>
      <Footer />
    </>
  )
}
