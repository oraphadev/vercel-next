import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Plus_Jakarta_Sans } from 'next/font/google'
import { useState } from 'react'
import Head from 'next/head'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>React + Next.js + Vercel</title>
        <meta name="description" content="Projeto em React com Next.js e hospedagem na Vercel" />
      </Head>

      <main className={`p-24 text-center ${plusJakartaSans.className}`}>
        <h1 className="text-3xl font-bold mb-4">{count}</h1>

        <Button
          variant="secondary"
          className="mb-12"
          onClick={() => setCount(count + 1)}
        >
          Incrementar contador
          <Plus className="w-4 h-4 ml-2" />
        </Button>

        <h2 className="text-3xl font-bold mb-4">
          @oraphadev
        </h2>

        <p className="text-sm text-muted-foreground">
          React - Next.js - Vercel
        </p>
      </main>
    </>
  )
}
