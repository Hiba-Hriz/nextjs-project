import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: any
): Promise<Response> {
  const endpoint = params.kindeAuth
  try {
    const result = handleAuth(request, endpoint) as unknown as Response
    return result
  } catch (error) {
    return new NextResponse('Error handling auth', { status: 500 })
  }
}