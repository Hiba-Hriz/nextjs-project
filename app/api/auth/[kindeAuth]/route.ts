import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: any
): Promise<Response> {
  const endpoint = params.kindeAuth
  try {
    const response = await handleAuth(request, endpoint)
    if (response instanceof Response) {
      return response
    } else {
      // Fallback in case handleAuth returns a different type
      return new Response(JSON.stringify(response), { status: 200 })
    }
  } catch (error) {
    return new Response('Error handling auth', { status: 500 })
  }
}