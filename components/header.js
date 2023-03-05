import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header () {
    const [ burger, setBurger ] = useState(false);

    return (
        <>
        <div className="w-full flex flex-row justify-center items-center text-center text-teal-600 font-bold shadow-sm">
            <div className="max-w-sm lg:w-full max-w-7xl flex flex-row justify-between items-center text-center p-2">
                <Link href="/">
                    <div>
                        <h1 className="text-2xl lg:text-4xl rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 p-2 m-2 bg-opacity-60 hover:bg-opacity-90 transition-all">🐍</h1>
                    </div>
                </Link>
                
                <div className="flex flex-row justify-center">
                    <div className='flex flex-row justify-center invisible md:visible'>
                        <Link href="/computerscience">
                            <p className="p-2 m-2">Computer Science</p>
                        </Link>
                        <Link href="/python">
                            <p className='p-2 m-2'>Python</p>
                        </Link>
                        <Link href="/sql">
                            <p className="p-2 m-2">SQL</p>
                        </Link>
                    </div>
                    { burger && 
                        <XMarkIcon onClick={() => setBurger(!burger)} className='md:hidden h-16 w-16 p-2 m-2 hover:text-green-700 rounded-xl transition-all' />
                    }

                    {!burger &&
                        <Bars3Icon onClick={() => setBurger(!burger)} className='md:hidden h-16 w-16 p-2 m-2 hover:text-green-700 rounded-xl transition-all' />
                    }
                </div>
            </div>
        </div>
        { burger &&
            <div className='w-full flex flex-col justify-center items-center text-center text-cyan-800 font-bold bg-teal-600 bg-opacity-30 md:hidden'>
                        <Link href="/computerscience">
                            <p className="p-2 m-2">Computer Science</p>
                        </Link>
                        <Link href="/python">
                            <p className='p-2 m-2'>Python</p>
                        </Link>
                        <Link href="/sql">
                            <p className="p-2 m-2">SQL</p>
                        </Link>
            </div>
        }
        </>
    )
}