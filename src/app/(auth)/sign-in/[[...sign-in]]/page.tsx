import { SignIn} from '@clerk/nextjs'
import { Suspense } from 'react';
export default function page() {
    return (
      <div>
       <Suspense fallback={"Loading"}>
             <SignIn path='/sign-in'/>
       </Suspense>
      </div>
    );
  }