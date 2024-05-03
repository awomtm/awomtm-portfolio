import './reset.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Head from "next/head"
import NavBar from "../component1/nav"
import Footer from "../component1/footer"

export const metadata = {
  title: 'awomtm.dev',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <AppRouterCacheProvider>
          <NavBar/>
          {children}
          <Footer/>
         </AppRouterCacheProvider>
      </body>
    </html>
  )
}
