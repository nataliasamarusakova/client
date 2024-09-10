import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ACCESS_TOKEN } from './constants/constants';

export function middleware(request: NextRequest) {

    const { url } = request;
    const authPage = url.includes('/auth/');
    const access_token = request.cookies.get(ACCESS_TOKEN);

    if (authPage && access_token) {
        return NextResponse.redirect(new URL("/i", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/i/:path*', '/auth/:path*'],
}