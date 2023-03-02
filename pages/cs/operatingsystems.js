import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'

const inter = Inter({ subsets: ['latin'] })

export default function OperatingSystems() {
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
          <h1 className='text-xl md:text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Operating Systems</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>An operating system (OS) is a fundamental component of any computer system that provides a platform for other software to run on. The operating system manages the hardware resources of the computer, such as the CPU, memory, and storage devices, and provides a set of services and APIs (Application Programming Interfaces) that allow other programs to interact with the hardware.  Here are some key components of an operating system: </h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>A <i>process</i> is an instance of a program that is running on the computer. The operating system manages processes by allocating resources (such as memory and CPU time) and scheduling them to run on the CPU.   A <i>thread</i> is a lightweight process that runs within a process. Threads can be used to perform multiple tasks simultaneously within a single program.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>The operating system is responsible for scheduling <i>processes and threads</i> to run on the CPU. Different scheduling algorithms can be used to prioritize different processes or optimize for different performance metrics.  When multiple processes or threads access shared resources, <i>synchronization</i> is necessary to prevent race conditions and ensure data consistency.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>The operating system also deals with <i>memory management,</i> the allocation and deallocation of memory in the system. This includes virtual memory, which allows processes to use more memory than is physically available by swapping memory to disk when necessary.</h3>
          <h3 className='text-sm lg:text-lg p-2 m-2 lg:font-bold text-left max-w-4xl'>Finally, the operating system provides a file system that allows programs to store and retrieve data on the computer's storage devices. This includes managing files and directories, providing access control mechanisms, and handling input/output operations.</h3>
        </div>
      </main>
      <Footer />
    </>
  )
}
