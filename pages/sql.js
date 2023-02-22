import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function SQL() {
  return (
    <>
      <Head>
        <title>Armstrong STEM Notes</title>
        <meta name="description" content="free python and programming notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen bg-gradient-to-br from-blue-100 to-teal-100 via-cyan-100'>
        <Header />
        <div className='w-full h-full pt-12 lg:pt-24 flex flex-row flex-wrap justify-center items-center text-center text-cyan-900'>
                <div className='w-full max-w-md md:w-1/4 md:h-72 flex flex-col p-4 m-2 opacity-80 hover:opacity-100 bg-teal-600 bg-opacity-20 transition-all justify-center text-center items-center hover:shadow-2xl shadow-cyan-900 rounded-xl'>
                    <h2 className='font-bold text-2xl lg:text-4xl p-2 m-2'>Computer Science</h2>
                    <h3 className='font-bold text-4xl lg:text-xl p-2 m-2 opacity-80'>💻</h3>
                    <p className='text-sm lg:text-md p-2 m-2 opacity-80'>basic computer science concepts</p>
                </div>
                <div className='w-full max-w-md md:w-1/4 md:h-72 flex flex-col p-4 m-2 opacity-80 hover:opacity-100 bg-teal-600 bg-opacity-20 transition-all justify-center text-center items-center hover:shadow-2xl shadow-cyan-900 rounded-xl'>
                    <h2 className='font-bold text-2xl lg:text-4xl p-2 m-2'>Python</h2>
                    <h3 className='font-bold text-4xl lg:text-xl p-2 m-2 opacity-80'>🐍</h3>
                    <p className='text-sm lg:text-md p-2 m-2 opacity-80'>programming with Python</p>
                </div>
                <div className='w-full max-w-md md:w-1/4 md:h-72 flex flex-col p-4 m-2 opacity-80 hover:opacity-100 bg-teal-600 bg-opacity-20 transition-all justify-center text-center items-center hover:shadow-2xl shadow-cyan-900 rounded-xl'>
                    <h2 className='font-bold text-2xl lg:text-4xl p-2 m-2'>SQL</h2>
                    <h3 className='font-bold text-4xl lg:text-xl p-2 m-2 opacity-80'>📝</h3>
                    <p className='text-sm lg:text-md p-2 m-2 opacity-80'>reading and writing to databases</p>
                </div>
            </div>
      </main>
      <Footer />
    </>
  )
}
