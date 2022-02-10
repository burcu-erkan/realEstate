
import Head from 'next/head';
import {Box} from '@chakra-ui/react'


import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <>
          <Head>
              <title>Real Estate</title>
              </Head> 
              <Box m="auto" maxWidth= "1280px">
                  <header>
                      <Navbar/>
                  </header>
                  <main>
                      {children}
                  </main>
                  <footer>
                      <Footer/>
                  </footer>
                  </Box> 
        </>
    )
}

export default Layout
