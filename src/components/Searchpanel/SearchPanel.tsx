"use client"
import Image from 'next/image'
import React from 'react'
import {Card} from "flowbite-react"
import { ProfileCardLight } from './prof-card'
import { useWeb3 } from '@/context'

const Users = [
    {
        name : "Jay",
        email : "guptaja@rknec.edu"
    },
    {
        name: "Om Chillure",
        email: "chillureop@rknec.edu"
    }
]

export function Search() {
  return (
    <div className='w-full gap-y-4 p-4  flex flex-col justify-center items-center z-100'>
<form className="max-w-md w-full p-4 mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search People..." required />
        <button type="submit"  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
    <Card className="max-w-sm w-full">
      <div className="mb-4 w-full flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Results</h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {Users.map((user,index)=>(
                <li className="py-3 sm:py-4" key={index}>
                        <ProfileCardLight name={user.name} email={user.email} />
                </li>
            ))}
        </ul>
      </div>
    </Card>
    </div>
  )
}