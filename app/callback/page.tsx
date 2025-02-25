"use client"

import { Suspense } from 'react';
import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/Client";
import { HashLoader } from 'react-spinners';
import { Loader2 } from 'lucide-react';

const PageContent = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
    
    const { data, error } = trpc.authCallback.useQuery()
  
    if (error) {
        if (error.data?.code === 'UNAUTHORIZED') {
            router.push('/sign-in')
        }
    }

    if (data?.success) {
        router.push(origin ? `/${origin}` : '/Essai')
    }

    return (
        <div className='w-full mt-24 flex justify-center'>
            <div className='flex flex-col items-center gap-2'>
                <HashLoader className='h-8 w-8 animate-spin text-zinc-800' />
                <h3 className='font-semibold text-xl'>
                    Configuration de votre compte en cours...
                </h3>
                <p>Vous serez redirigé automatiquement.</p>
            </div>
        </div>
    )
}

const Page = () => (
    <Suspense fallback={<Loader2 className='h-8 w-8 animate-spin text-zinc-800' />}>
        <PageContent />
    </Suspense>
);

export default Page;