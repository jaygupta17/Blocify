import React, { use } from 'react'
import { getUsers } from "../../../lib/data";
import { User } from '@/lib/model';
async function Home() {
  let users : any = await getUsers();
  console.log();
  return (
    <div className='h-[100vh] w-full flex justify-center items-center z-100'>
      {users.map((user : any)=>{
        return(<div className='h-20 w-50 bg-red-100'>
          {user.username}
        </div>);
      })}
    </div>
  )
}

export default Home