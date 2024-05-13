import {
  clerkMiddleware,
  createRouteMatcher
} from "@clerk/nextjs/server"

const isProtectedRoute = createRouteMatcher(["/home" ,"/home/*" , "/profile", "/profile/*" , "/explore" , "/explore/*" , "/reel","/reel/*"])

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect()
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}