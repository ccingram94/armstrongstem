import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import data from '@/data.js'

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
      <main className='min-h-screen w-full bg-gradient-to-b from-white to-teal-100 via-cyan-100'>
        <Header />
        <div className='w-full pt-12 flex flex-col justify-center items-center text-center text-cyan-900'>
          <h1 className='text-xl md:text-2xl lg:text-6xl p-6 lg:p-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600'>SQL</h1>
          <h3 className='text-sm lg:text-lg p-2 m-2 font-bold max-w-xs lg:max-w-lg'>{data[1].shortdescription}</h3>

          <div className='flex flex-row flex-wrap justify-center items-top'>
            
            <div className='flex flex-col bg-white bg-opacity-90 w-fit max-w-lg p-2 m-2 rounded-xl'>
              <h2 className='text-xl lg:text-2xl font-bold m-2 p-2'>Vocabulary</h2>
              <div className='flex flex-col justify-left text-left text-sm'>
                
                <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                  <p className='font-bold p-2'>Database</p>
                  <p className='text-sm p-2'>A collection of data organized in a useful way.</p>
                </div>
                <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                  <p className='font-bold p-2'>NoSQL</p>
                  <p className='text-sm p-2'>A database management system that stores data in key-value, graph, column-family, or document-oriented form instead of tables.
                  The most popular NoSQL databases include MongoDB, Redis, and Amazon DynamoDB.</p>
                </div>
                <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                  <p className='font-bold p-2'>Query</p>
                  <p className='text-sm p-2'>A way to request data from a database using SQL commands.</p>
                </div>
                <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                  <p className='font-bold p-2'>RDBMS</p>
                  <p className='text-sm p-2'>"Relational Database Management System, a type of software used to create, update, and query data in a relational (table-based) database.  
                  The most popular RDBMSs include MySQL, PostgreSQL, SQLite, Oracle Database, and Microsoft SQL Server.</p>
                </div>
                <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                  <p className='font-bold p-2'>SQL</p>
                  <p className='text-sm p-2'>"Structured Query Language," a programming language used to manage and change databases.</p>
                </div>
                <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                  <p className='font-bold p-2'>Table</p>
                  <p className='text-sm p-2'>A collection of rows and columns.</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-top items-center max-w-sm bg-white bg-opacity-90 w-fit max-w-2xl p-2 m-2 rounded-xl'>
              <h2 className='text-xl lg:text-2xl font-bold m-2 p-2 opacity-80'>Example Table</h2>
              <p className='p-2 m-2 text-sm'>Here is an example table named "Employees."  The table has three <i>fields</i> (columns) named ID Number, Name, and Age.
              The table has five <i>records</i> (rows) for each employee's data.</p>
              <h3 className='text-lg lg:text-xl font-bold m-2 p-2'>Employees</h3>
              <table className='min-w-full'>
                <thead className='bg-white border-b'>
                  <tr>
                    <th scope='col' className='text-sm font-bold p-2 m-2 text-left'>
                      ID Number
                    </th>
                    <th scope='col' className='text-sm font-bold p-2 m-2 text-left'>
                      Name
                    </th>
                    <th scope='col' className='text-sm font-bold p-2 m-2 text-left'>
                      Age
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-teal-100 bg-opacity-30'>
                    <td className='p-2 m-2 text-sm'>39827</td>
                    <td className='p-2 m-2 text-sm'>Sam Williams</td>
                    <td className='p-2 m-2 text-sm'>32</td>
                  </tr>
                  <tr className='bg-white'>
                    <td className='p-2 m-2 text-sm'>92745</td>
                    <td className='p-2 m-2 text-sm'>Maria Hernandez</td>
                    <td className='p-2 m-2 text-sm'>45</td>
                  </tr>
                  <tr className='bg-teal-100 bg-opacity-30'>
                    <td className='p-2 m-2 text-sm'>36390</td>
                    <td className='p-2 m-2 text-sm'>James Smith</td>
                    <td className='p-2 m-2 text-sm'>27</td>
                  </tr>
                  <tr className='bg-white'>
                    <td className='p-2 m-2 text-sm'>26670</td>
                    <td className='p-2 m-2 text-sm'>Kevin Park</td>
                    <td className='p-2 m-2 text-sm'>39</td>
                  </tr>
                  <tr className='bg-teal-100 bg-opacity-30'>
                    <td className='p-2 m-2 text-sm'>59307</td>
                    <td className='p-2 m-2 text-sm'>Alice Lee</td>
                    <td className='p-2 m-2 text-sm'>50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='flex flex-col justify-top items-center max-w-lg'>
              <div className='flex flex-col bg-white bg-opacity-90 w-fit max-w-2xl p-2 m-2 rounded-xl'>
                <h2 className='text-xl lg:text-2xl font-bold m-2 p-2'>Common SQL Queries</h2>
                <div className='flex flex-col justify-left text-left text-sm'>
                  
                <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                    <p className='font-bold p-2'>DELETE</p>
                    <p className='text-sm p-2'>Remotes data from the table.</p>
                </div>
                <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                    <p className='font-bold p-2'>GROUP BY</p>
                    <p className='text-sm p-2'>Groups the retrieved data by one or more columns, 
                    often used with "aggregate functions" to calculate values for a group.</p>
                  </div>
                  <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                    <p className='font-bold p-2'>INSERT</p>
                    <p className='text-sm p-2'>Adds new data to the table.</p>
                  </div>
                  <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                    <p className='font-bold p-2'>JOIN</p>
                    <p className='text-sm p-2'>Combines data from two or more tables based on a related column.</p>
                  </div>
                  <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                    <p className='font-bold p-2'>ORDER BY</p>
                    <p className='text-sm p-2'>Retrieves data in ascending or descending order based on one or more columns.</p>
                  </div>
                  <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                    <p className='font-bold p-2'>SELECT</p>
                    <p className='text-sm p-2'>Retrieves data from the database.</p>
                  </div>
                  <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                    <p className='font-bold p-2'>UPDATE</p>
                    <p className='text-sm p-2'>Changes existing data in a table.</p>
                  </div>
                  <div className='p-2 flex flex-row flex-wrap justify-left text-left items-center'>
                    <p className='font-bold p-2'>WHERE</p>
                    <p className='text-sm p-2'>Filters data by a specific conditions.</p>
                  </div>
                  

                </div>
              </div>
            </div>

          </div>
          
        </div>
      </main>
      <Footer />
    </>
  )
}
