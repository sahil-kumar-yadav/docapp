// 3.07

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { NextResponse } from 'next/server'

// https://nextjs.org/docs/app/building-your-application/routing/middleware
// https://kinde.com/docs/developer-tools/nextjs-sdk/#protecting-routes

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const {isAuthenticated} = getKindeServerSession();
    if (!(await isAuthenticated())) {
        // redirect("/api/auth/login");
        return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/', request.url))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
    // kis path pay karna hai
  matcher: '/details/:path*',
}