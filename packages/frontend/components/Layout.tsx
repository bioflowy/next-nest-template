import Head from 'next/head'
import React, { FC,ReactNode } from 'react'

type Props ={
  title: string
  children: ReactNode
}
export const Layout:FC<Props> = ({children,title="next-nest-template"}) => {
  return (
    <div className='flex min-h-screen'>
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className='flex flex-col flex-1 justify-center p-4'>
        {children}
      </main>
      <footer></footer>
    </div>
  )
}
