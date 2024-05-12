import { SignIn} from '@clerk/nextjs'
import { Suspense } from 'react';
export default function page() {
    return (
      <div className="h-[100vh] bg-red-100 w-full flex justify-center items-center">
       <Suspense fallback={"Loading"}>
             <SignIn path='/sign-in'/>
       </Suspense>
      </div>
    );
  }