import Link from 'next/link'

export default function Header () {
    return (
        <div className="w-full flex flex-row justify-center items-center text-center text-teal-600 font-bold p-2 ">
            <div className="w-full max-w-7xl flex flex-row justify-between items-center text-center p-2">
                <Link href="/">
                    <div>
                        <h1 className="text-2xl lg:text-4xl rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 p-2 m-2 bg-opacity-60 hover:bg-opacity-90 transition-all">🐍</h1>
                    </div>
                </Link>
                
                <div className="flex flex-row justify-center">
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
            </div>
        </div>
    )
}