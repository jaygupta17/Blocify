import { SignUp} from '@clerk/nextjs'
import { Suspense } from 'react';
export default function page() {
    return (
      <div className="h-[100vh] w-full flex flex-col justify-center items-center">
        <Suspense fallback={"Loading"}>
          <SignUp path="/sign-up" />
        </Suspense>
      </div>
    );
  }