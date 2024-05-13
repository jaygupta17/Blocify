import { SignUp} from '@clerk/nextjs'
import { Suspense } from 'react';
export default function page() {
    return (
      <div>
        <Suspense fallback={"Loading"}>
          <SignUp path="/sign-up" />
        </Suspense>
      </div>
    );
  }