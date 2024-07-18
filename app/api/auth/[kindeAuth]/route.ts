import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: any
): Promise<void | Response> {
  const endpoint = params.kindeAuth

  try {
    const result = handleAuth(request, endpoint)
    // Here handleAuth returns a synchronous value, not a promise
    return new NextResponse(JSON.stringify(result), { status: 200 })
  } catch (error) {
    return new NextResponse('Error handling auth', { status: 500 })
  }
}