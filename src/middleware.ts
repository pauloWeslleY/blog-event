import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const signInURL = new URL('/', request.url)
  const eventsURL = new URL('/events', request.url)

  if (!token) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next()
    }

    return NextResponse.redirect(signInURL)
  }

  if (request.nextUrl.pathname === '/auth') {
    return NextResponse.redirect(eventsURL)
  }
}

export const config = {
  matcher: ['/', '/events/:path*'],
}
