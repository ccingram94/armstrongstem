import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'
import macdownload from '@/public/macdownload.jpg'
import macinstaller from '@/public/macinstaller.jpg'
import windowsdownload from '@/public/windowsdownload.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Installation() {
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
        <div className='w-full pt-12 pt-12 flex flex-col justify-center items-center text-left text-cyan-900'>
          <h1 className='text-xl md:text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Installing Python</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>Downloading and installing the Python is easy.  You can find a download guide at <u className='opacity-80 hover:opacity-100 transition-all'> <Link href="https://www.python.org/downloads/">the official Python site.</Link></u>  You can also follow these instructions to install Python on Mac, Windows, and Linux.</h3>
          <hr className='w-1/3'/>
          <div className='flex flex-col justify-center items-center p-2 m-2 text-left'>
            <h4 className='text-lg lg:text-xl p-2 m-2 font-bold'> Python for Mac</h4>
            <div className="w-full lg:w-1/2">
              <p className='p-2 m-2'>You can check if Python is already installed with the following terminal command:</p>
              <div class="coding px-5 pt-4 shadow-lg text-stone-100 text-sm font-mono subpixel-antialiased 
                          bg-cyan-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                  <div class="top mb-2 flex">
                      <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                      <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="mt-4 flex">
                      <span class="text-teal-400">$</span>
                      <p class="flex-1 typing items-center pl-2">
                          python --version <br />
                      </p>
                  </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <p className='p-2 m-2'>You can check if Python3 is installed with this command:</p>
              <div class="coding px-5 pt-4 shadow-lg text-stone-100 text-sm font-mono subpixel-antialiased 
                          bg-cyan-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                  <div class="top mb-2 flex">
                      <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                      <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="mt-4 flex">
                      <span class="text-teal-400">$</span>
                      <p class="flex-1 typing items-center pl-2">
                          python3 --version <br />
                      </p>
                  </div>
              </div>

              <div className='w-full'>
                <h4 className='text-lg lg:text-xl p-2 m-2 font-bold'>Installing Python for Mac</h4>
                <p className='p-2 m-2'>If Python isn't already installed (you should have Python3), you will need to download the installer package provided at the official Python website. <u><Link href="https://www.python.org/downloads/">You can download the latest version for Mac (3.11.2) here.</Link></u>  It should look like this:</p>
                <Image src={macdownload} className="max-w-sm rounded-xl shadow-2xl" />
                <p className='p-2 m-2'>Download Python 3.11.2 and open the installer package.  It should look like this:</p>
                <Image src={macinstaller} className="max-w-sm rounded-xl shadow-2xl" />
                <p className='p-2 m-2'>Follow the Python Installer instructions.  The wizard will install both Python and IDLE (the Integrated Development and Learning Environment) that will allow you to run Python.</p>
                <p className='p-2 m-2'>You can check that the correct Python version is installed with the "python3 --version" command again.</p>
              </div>
            </div>
          </div>
          <hr className='w-1/3'/>
          <div className='flex flex-col justify-center items-center p-2 m-2 text-left'>
            <h4 className='text-lg lg:text-xl p-2 m-2 font-bold'> Python for Windows</h4>
            <div className="w-full lg:w-1/2">
              <p className='p-2 m-2'>You can check if Python is already installed with the following terminal command:</p>
              <div class="coding px-5 pt-4 shadow-lg text-stone-100 text-sm font-mono subpixel-antialiased 
                          bg-cyan-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                  <div class="top mb-2 flex">
                      <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                      <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="mt-4 flex">
                      <span class="text-teal-400">$</span>
                      <p class="flex-1 typing items-center pl-2">
                          python --version <br />
                      </p>
                  </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <p className='p-2 m-2'>You can check if Python3 is installed with this command:</p>
              <div class="coding px-5 pt-4 shadow-lg text-stone-100 text-sm font-mono subpixel-antialiased 
                          bg-cyan-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                  <div class="top mb-2 flex">
                      <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                      <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="mt-4 flex">
                      <span class="text-teal-400">$</span>
                      <p class="flex-1 typing items-center pl-2">
                          python3 --version <br />
                      </p>
                  </div>
              </div>

              <div className='w-full'>
                <h4 className='text-lg lg:text-xl p-2 m-2 font-bold'>Installing Python for Windows</h4>
                <p className='p-2 m-2'>If Python isn't already installed (you should have Python3), you will need to download the installer package provided at the official Python website. <u><Link href="https://www.python.org/downloads/">You can download the latest version for Windows (3.11.2) here.</Link></u> You can also find <u><Link href="https://www.python.org/downloads/windows/">releases for Windows here.</Link></u></p>
                <Image src={windowsdownload} className="max-w-sm rounded-xl shadow-2xl" />
                <p className='p-2 m-2'>Download Python 3.11.2 and open the installer package.  Follow the Python Installer instructions.  The wizard will install both Python and IDLE (the Integrated Development and Learning Environment) that will allow you to run Python.</p>
                <p className='p-2 m-2'>You can check that the correct Python version is installed with the "python3 --version" command again.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
