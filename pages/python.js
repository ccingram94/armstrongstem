import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'
import { BeakerIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

const inter = Inter({ subsets: ['latin'] })

export default function Python() {
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
        <div className='w-max pt-12 flex flex-col flex-wrap justify-center items-center text-center text-cyan-900'>
          <h1 onClick={() => console.log(data)} className='text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Python</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 font-bold max-w-xs lg:max-w-lg'>{data[0].shortdescription}</h3>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center text-center p-2 m-2 max-w-6xl'>
            <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
              <h3 className='font-bold text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Python Basics</h3>
              <p className='text-xs p-2 m-2'>variables, data types, control structures, functions</p>
            </div>
            <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
              <h3 className='font-bold max-w-sm text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Object-Oriented Programming with Python</h3>
              <p className='text-xs p-2 m-2'>classes, objects, inheritance, polymorphism</p>
            </div>
            <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
              <h3 className='font-bold max-w-sm text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Data Structures in Python</h3>
              <p className='text-xs p-2 m-2'>lists, tuples, dictionaries, sets</p>
            </div>
            <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
              <h3 className='font-bold max-w-sm text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>File Handling in Python</h3>
              <p className='text-xs p-2 m-2'>reading and writing files, file objects</p>
            </div>
            <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
              <h3 className='font-bold max-w-sm text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Python Web Development</h3>
              <p className='text-xs p-2 m-2'>Django and Flask</p>
            </div>
            <div className='bg-white bg-opacity-80 hover:bg-opacity-100 shadow-2xl rounded-xl p-2 m-2 transition-all'>
              <h3 className='font-bold max-w-sm text-xl lg:text-2xl p-2 m-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>Python Libraries</h3>
              <p className='text-xs p-2 m-2'>NumPy, Pandas, Matplotlib, SciPy</p>
            </div>
        </div>
        <div className='flex flex-row flex-wrap p-2 m-2 justify-center items-top '>

            <div className='flex flex-col w-fit justify-center items-center content-center text-center p-2 m-2 bg-white bg-opacity-80 rounded-xl text-teal-900 text-xs lg:text-sm'>
                <h3 className='font-bold text-center text-xl lg:text-2xl p-2 m-2'>Python Data Types</h3>
                <table className='w-fit table-auto flex flex-col justify-center text-left'>
                  <thead className='w-full flex flex-row justify-left items-center'>
                    <tr className='w-full p-2 m-2 flex flex-row justify-left items-center'>
                      <th className='w-full p-2 m-2'>Type</th>
                      <th className='w-full p-2 m-2'>Example</th>
                      <th className='w-full p-2 m-2'>Definition</th>
                    </tr>
                  </thead>
                  <tbody className='p-2 m-2 max-w-lg'>
                    <tr>
                      <td className='p-2 m-2'>
                        Integer
                      </td>
                      <td className='p-2 m-2'>
                        x = 3
                      </td>
                      <td className='p-2 m-2'>Whole numbers without a decimal</td>
                    </tr>
                    <tr>
                      <td className='p-2 m-2'>
                        Floating-point number
                      </td>
                      <td className='p-2 m-2'>
                        x = 4.2
                      </td>
                      <td className='p-2 m-2'>
                        Real numbers with a decimal
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 m-2'>
                        Boolean
                      </td>
                      <td className='p-2 m-2'>
                        x = true
                      </td>
                      <td className='p-2 m-2'>
                        True or false
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 m-2'>
                        String
                      </td>
                      <td className='p-2 m-2'>
                        x = 'hello'
                      </td>
                      <td className='p-2 m-2'>
                        Text stored as a sequence of characters
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 m-2'>
                        List
                      </td>
                      <td className='p-2 m-2'>
                        x = [1, 2, 3]
                      </td>
                      <td className='p-2 m-2'>
                        A list of items that can be changed
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 m-2'>
                        Tuple
                      </td>
                      <td className='p-2 m-2'>
                        x = (1, 2, 3)
                      </td>
                      <td className='p-2 m-2'>
                        A list of items that cannot be changed
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 m-2'>
                        Set
                      </td>
                      <td className='p-2 m-2'>
                        <p>x = { " { 1, 2, 3 } " }</p>
                      </td>
                      <td className='p-2 m-2'>
                        A list of unique items
                      </td>
                    </tr>
                    <tr>
                      <td className='p-2 m-2'>
                        Dictionary
                      </td>
                      <td className='p-2 m-2'>
                        <p>x = {" { 'number1' : 1, 'number2': 2 } "}</p>
                      </td>
                      <td className='p-2 m-2'>
                        A collection of key-value pairs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

          <div className='w-fit bg-white rounded-xl text-teal-900 m-2 p-2'>
            <h3 className='font-bold text-center text-xl lg:text-2xl p-2 m-2'>Math Operators</h3>
            <div className='flex flex-col items-center justify-center text-sm'>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>+</p>
                <p className='font-bold m-2'>Addition</p>
                <p className='font-bold m-2'>3 + 2</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>-</p>
                <p className='font-bold m-2'>Subtraction</p>
                <p className='font-bold m-2'>3 - 2</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>*</p>
                <p className='font-bold m-2'>Multiplication</p>
                <p className='font-bold m-2'>3 * 2</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>/</p>
                <p className='font-bold m-2'>Division</p>
                <p className='font-bold m-2'>3 / 2</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>//</p>
                <p className='font-bold m-2'>Floor Division</p>
                <p className='font-bold m-2'>3 // 2</p>
              </div>
              
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>%</p>
                <p className='font-bold m-2'>Modulus</p>
                <p className='font-bold m-2'>3 % 2</p>
              </div>
              
            </div>
          </div>

          <div className='bg-white w-fit rounded-xl text-teal-900 m-2 p-2'>
            <h3 className='font-bold text-center text-xl lg:text-2xl p-2 m-2'>Logical Operators</h3>
            <div className='flex flex-col items-center justify-center text-sm'>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>and</p>
                <p className='font-bold m-2'>checks if both conditions are true</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>or</p>
                <p className='font-bold m-2'>checks if one condition is true</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>not</p>
                <p className='font-bold m-2'>checks if a condition is false</p>
              </div>
            </div>
            <h3 className='font-bold text-center text-xl lg:text-2xl p-2 m-2'>Identity Operators</h3>
            <div className='flex flex-col items-center justify-center text-sm'>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>is</p>
                <p className='font-bold m-2'>checks if the same</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>is not</p>
                <p className='font-bold m-2'>checks if different</p>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl text-teal-900 m-2 p-2 w-fit'>
            <h3 className='font-bold text-center text-xl lg:text-2xl p-2 m-2'>Comparison Operators</h3>
            <div className='flex flex-col items-center justify-center text-sm'>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>==</p>
                <p className='font-bold m-2'>equal</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>!=</p>
                <p className='font-bold m-2'>not equal</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>{'>'}</p>
                <p className='font-bold m-2'>greater than</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>{'<'}</p>
                <p className='font-bold m-2'>less than</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>{'>='}</p>
                <p className='font-bold m-2'>greater than or equal to</p>
              </div>
              <div className='flex flex-row flex-wrap w-full justify-left items-center text-center p-2 m-2'>
                <p className='font-bold m-2 bg-cyan-100 rounded-xl p-2'>{'<='}</p>
                <p className='font-bold m-2'>less than or equal to</p>
              </div>
            </div>
          </div>

        </div>
          

        

        <div className='flex flex-row flex-wrap w-full justify-center items-center p-4 bg-gradient-to-r from-cyan-600 to-teal-600'>
          <div className='flex flex-col flex-wrap justify-center items-center p-2 m-2'>
            <h3 className='font-bold text-lg lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-teal-100 p-2'>Features of Python</h3>
            <div className='flex flex-col justify-left text-left items-left bg-white bg-opacity-80 text-teal-900 m-2 p-2 rounded-xl w-fit'>
              <div className='flex flex-row flex-wrap justify-left items-center p-2 m-2'>
                <CheckCircleIcon className='h-6 w-6 md:h-8 md:w-8 m-2' />
                <p className='text-sm lg:text-md p-2 w-1/4 font-bold'> Object-Oriented</p>
                <p className='text-sm max-w-md p-2 m-2 text-justify'>In object-oriented programming languages like Python,
                all data is represented by "objects."  Each object keeps data stored in "attributes".
                Objects also have special functions called "methods" for changing and updating the data in the attributes.  
                Objects in the same "class" are created with the same attributes and methods.
                </p>
              </div>
              <div className='flex flex-row flex-wrap justify-left items-center p-2 m-2'>
                <CheckCircleIcon className='h-6 w-6 md:h-8 md:w-8 m-2' />
                <p className='text-sm lg:text-md p-2 w-1/4 font-bold'> Dynamically Typed</p>
                <p className='text-sm max-w-md p-2 m-2 text-justify'>In dynamically typed languages like Python,
                variables are automatically assigned a "type" (e.g. integer or string) to match their data.
                The type of a variable is assigned at runtime rather than compile time. (Python isn't compiled.)
                Unlike in statically typed languages, you can also change the type of a variable.  For example, 
                the integer <i>x = 3</i> can become the string <i>x = 'hello world'</i>
                </p>
              </div>
              <div className='flex flex-row flex-wrap justify-left items-center p-2 m-2'>
                <CheckCircleIcon className='h-6 w-6 md:h-8 md:w-8 m-2' />
                <p className='text-sm lg:text-md p-2 w-1/4 font-bold'> Strongly Typed</p>
                <p className='text-sm max-w-md p-2 m-2 text-justify'>Although Python automatically assigns data types, 
                it cannot automatically convert them.  Trying to add <i>x + y</i> with the integer <i>x = 1</i> and the string <i>y = '2'</i> will result
                in a TypeError.  You cannot add an integer and a string; you must convert them yourself to the same type.
                Running int(y) will convert y into the type 'integer,' and x + y will result in 3.  Running str(x) will convert x 
                into the type 'string,' and x + y will result in '12'.  
                </p>
              </div>
              <div className='flex flex-row flex-wrap justify-left items-center p-2 m-2'>
                <CheckCircleIcon className='h-6 w-6 md:h-8 md:w-8 m-2' />
                <p className='text-sm lg:text-md p-2 w-1/4 font-bold'> Interpreted</p>
                <p className='text-sm max-w-md p-2 m-2 text-justify'>Python is "interpreted," not compiled. 
                This means Python code is executed by an interpreter at runtime.  It does not need to be compiled into machine code
                before it can be executed.  Although this can make Python slow, it also makes developing easier for programmers.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col flex-wrap justify-center items-center p-2 m-2'>
            <h3 className='font-bold text-lg lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-teal-100 p-2'>How do people use Python?</h3>
            <div className='flex flex-col justify-left text-left items-left bg-white bg-opacity-80 text-teal-900 m-2 p-2 rounded-xl w-fit'>
              <div className='flex flex-row flex-wrap justify-left items-center p-2 m-2'>
                <CheckCircleIcon className='h-6 w-6 md:h-8 md:w-8 m-2' />
                <p className='text-sm lg:text-md p-2 w-1/4 font-bold'> Web Development</p>
                <p className='text-sm max-w-md p-2 m-2'>Python can be used to create web applications and back-end services. Popular web frameworks like Django and Flask make it easy to build and deploy web applications.</p>
              </div>
              <div className='flex flex-row flex-wrap justify-left items-center p-2 m-2'>
                <CheckCircleIcon className='h-6 w-6 md:h-8 md:w-8 m-2' />
                <p className='text-sm lg:text-md p-2 w-1/4 font-bold'> Data Science </p>
                <p className='text-sm max-w-md p-2 m-2'>Python can be used for data analysis, machine learning, and artificial intelligence. Libraries like NumPy, Pandas, and SciPy can be used for data processing, while libraries like TensorFlow and PyTorch provide machine learning and deep learning tools.</p>
              </div>
              <div className='flex flex-row flex-wrap justify-left items-center p-2 m-2'>
                <CheckCircleIcon className='h-6 w-6 md:h-8 md:w-8 m-2' />
                <p className='text-sm lg:text-md p-2 w-1/4 font-bold'>Automation and Scripting</p>
                <p className='text-sm max-w-md p-2 m-2'>Python can automate boring tasks like data processing, file manipulation, and web scraping as well as run useful scripts.</p>
              </div>
              <div className='flex flex-row flex-wrap justify-left items-center p-2 m-2'>
                <CheckCircleIcon className='h-6 w-6 md:h-8 md:w-8 m-2' />
                <p className='text-sm lg:text-md p-2 w-1/4 font-bold'>Education</p>
                <p className='text-sm max-w-md p-2 m-2'>Python is often used to teach beginners in introductory programming courses because 
                it is simple and user-friendly compared to other languages.</p>
              </div>
            </div>
          </div>
          

        </div>
        
      </main>
      <Footer />
    </>
  )
}
