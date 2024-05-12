import { SignIn} from '@clerk/nextjs'
import { Suspense } from 'react';
export default function page() {
    return (
      <div className="h-[85vh] w-full flex flex-col justify-center items-center">
       <Suspense fallback={"Loading"}>
             <SignIn path='/sign-in' signUpFallbackRedirectUrl='/home'/>
       </Suspense>
      </div>
    );
  }