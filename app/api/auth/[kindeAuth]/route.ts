import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: any
) {
  const endpoint = params.kindeAuth
  const result = await handleAuth(request, endpoint)
  
  // Ensure result is a valid Response
  if (result instanceof NextResponse) {
    return result
  } else {
    // Handle other possible cases or return an error response
    return NextResponse.error()
  }
}
