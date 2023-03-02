import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'
import { ArchiveBoxIcon, CheckCircleIcon, WrenchIcon } from '@heroicons/react/24/solid'

const inter = Inter({ subsets: ['latin'] })

export default function DataStructuresAndAlgorithms() {
  return (
    <>
      <Head>
        <title>Armstrong STEM Notes</title>
        <meta name="description" content="free python and programming notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-white to-teal-100 via-cyan-100'>
        <Header />
        <div className='w-max pt-6 lg:pt-12 flex flex-col flex-wrap justify-center items-center text-center text-cyan-900'>
          <h1 onClick={() => console.log(data)} className='text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Data Structures and Algorithms</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 font-bold max-w-sm lg:max-w-lg'>Data Structures and Algorithms are how programmers solve problems.</h3>
        </div>
        <div className='flex flex-row flex-wrap'>
          <div className='flex flex-col h-fit max-w-md justify-top items-center text-center p-2 m-2 bg-white bg-opacity-80 rounded-xl text-teal-900 text-xs lg:text-sm'>
            <h3 className='font-bold text-center text-xl lg:text-2xl p-2 m-2'>Data Structures</h3>
            <p className='text-sm font-bold text-center p-2 m-2'>A data structure is a useful way of organizing and storing data.
            Here are some common data structures:
            </p>
            <div className='flex flex-col m-2 p-2'>
              <div className='flex flex-row justify-left items-center m-2 bg-gray-100'>
                <p className='m-2 font-bold'>Array</p>
                <p className='m-2 txt-sm '>A collection of similar data types stored in contiguous memory.</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2'>
                <p className='m-2 font-bold'>Linked List</p>
                <p className='m-2 txt-sm'>A sequence of nodes, each storing a value and a pointer to the next node.</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2 bg-gray-100'>
                <p className='m-2 font-bold'>Stack</p>
                <p className='m-2 txt-sm'>A collection of items stored in Last-In-First-Out (LIFO) order.
                Items are added and removed from the top.</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2'>
                <p className='m-2 font-bold'>Queue</p>
                <p className='m-2 txt-sm'>A collection of items stored in First-In-First-Out (FIFO) order.
                Items are added at the back and removed from the front.</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2 bg-gray-100'>
                <p className='m-2 font-bold'>Tree</p>
                <p className='m-2 txt-sm'>A tree of nodes starting at the "root node" and branching out by edges to
                connect with "child nodes."</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2'>
                <p className='m-2 font-bold'>Hash Table</p>
                <p className='m-2 txt-sm'>A fast data structure that uses a "hash function" to assign keys to indices in an array.</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col max-w-md justify-top items-center text-center p-2 m-2 bg-white bg-opacity-80 rounded-xl text-teal-900 text-xs lg:text-sm'>
            <h3 className='font-bold text-center text-xl lg:text-2xl p-2 m-2'>Algorithms</h3>
            <p className='text-sm font-bold text-center p-2 m-2'>An algorithm is a set of instructions for solving a problem.
            Here are some common algorithms:</p>
            <div className='flex flex-col m-2 p-2'>
              <div className='flex flex-row justify-left items-center m-2 bg-gray-100'>
                <p className='m-2 font-bold'>Sorting Algorithms</p>
                <p className='m-2 txt-sm '>Algorithms for sorting items in a particular order.
                Popular sorting algorithms include Bubble Sort, Insertion Sort, Selection Sort, 
                Merge Sort, Quick Sort, and Heap Sort.</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2'>
                <p className='m-2 font-bold'>Searching Algorithms</p>
                <p className='m-2 txt-sm'>Algorithms for finding a particular item.  
                Popular searching algorithms include Linear Search, Binary Search,
                and Interpolation Search.</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2 bg-gray-100'>
                <p className='m-2 font-bold'>Graph Algorithms</p>
                <p className='m-2 txt-sm'>Algorithms for traversing or searching a graph.
                Popular graph algorithms include Breadth-First Search (BFS), Depth-First Search (DFS),
                and Dijkstra's Algorithm.</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2'>
                <p className='m-2 font-bold'>String Algorithms</p>
                <p className='m-2 txt-sm'>Algorithms used to search or manipulate strings of text.</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2 bg-gray-100'>
                <p className='m-2 font-bold'>Divide and Conquer</p>
                <p className='m-2 txt-sm'>Algorithms that solve a problem by breaking it down into smaller sub-problems.
                Popular divide and conquer algorithms include Merge Sort and Quick Sort.</p>
              </div>
              <div className='flex flex-row justify-left items-center m-2'>
                <p className='m-2 font-bold'>Dynamic Programming</p>
                <p className='m-2 txt-sm'>Algorithms that solve a problem by breaking them down into smaller sub-problems,
                solving each sub-problem, then storing the solutions for future use.</p>
              </div>
            </div>
          </div>
          
        </div>
        

        <div className='flex flex-row flex-wrap w-full justify-center items-center p-4 bg-gradient-to-r from-cyan-600 to-teal-600'>
        
        <div className='flex flex-col flex-wrap justify-center items-center p-2 m-2'>
            
            <h3 className='font-bold text-lg lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-teal-100 p-2'>Coming Soon</h3>
            

          </div>
          

        </div>
        
      </main>
      <Footer />
    </>
  )
}
