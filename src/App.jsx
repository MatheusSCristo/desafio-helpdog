import React from 'react'
import Header from './Header/Header.tsx'
import Middle from './Middle/Middle.tsx'
import Products from './Products/Products.tsx'

const App = () => {
  return (
    <main className='w-full flex flex-col '>
      <Header/>
      <Middle/>
      <Products/>
    </main>

  )
}

export default App