import  Dashboard from "@/app/Dashboard"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { db } from '@/db'
import { redirect } from 'next/navigation'
const Page = async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || !user.id) redirect('/callback?origin=Essai')
      const dbUser = await db.user.findFirst({
          where: {
            id: user.id
          }
        })
      
        if(!dbUser) redirect('/callback?origin=Essai')
        
    return <Dashboard/>
}

export default Page