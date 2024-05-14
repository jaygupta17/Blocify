import React from 'react'
import { getUsers } from "../../../lib/data";
import { User } from '@/lib/model';
async function Home() {
  let users : any = await getUsers();
  console.log(users);
  return (
    <div className='h-[100vh] w-full flex justify-center items-center z-100'>
  {users.map((user : any)=>{
    <div>{user.name}</div>
  })}
    </div>
  )
}

export default Home