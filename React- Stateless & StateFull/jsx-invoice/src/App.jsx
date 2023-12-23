import React from 'react'
import Header from './components/Header'
import CheckOutForm from './components/CheckOutForm'

const App = () => {
  return (
    <div className='max-w-[700px] mx-auto min-h-screen flex flex-col'>
      <Header />
      <CheckOutForm />
    </div>
  )
}

export default App