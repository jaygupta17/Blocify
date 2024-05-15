import React from 'react'
import { getUsers } from "../../../lib/data";
import { User } from '@/lib/model';
async function Home() {
  let users : any = await getUsers();
  console.log();
  return (
    <div className='h-[100vh] w-full flex justify-center items-center z-100'>
      {users.map((user : any)=>{
        return(<li className='h-20 w-50 bg-red-100'>
          {user.username}
        </li>);
      })}
    </div>
  )
}

export default Home