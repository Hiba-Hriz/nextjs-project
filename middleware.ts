import { authMiddleware } from '@kinde-oss/kinde-auth-nextjs/server'
export const config = {
    matcher: ['/Essai/:path*', '/callback'],
  }
export default authMiddleware