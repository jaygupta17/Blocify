import Post from '@/components/ui/Posts'
import { CarouselSpacing } from '@/components/ui/StoryCarousel'
import React, { use } from 'react'
// import { getUsers } from "../../../lib/data";
// import { User } from '@/lib/model';
async function Home() {
  // let users : any = await getUsers();
  // console.log();
  return (
    <div className='h-[100vh] w-full flex flex-col justify-center items-center z-100'>
      {/* {users.map((user : any)=>{
        return(<div key={user.id || user.username} className='h-20 w-50 bg-red-100'>
          {user.username}
        </div>);
      })} */}
      <CarouselSpacing/>
      <div className="h-[85vh] flex flex-col justify-center items-center w-full">
        <Post/>
      </div>
    </div>
  )
}

export default Home