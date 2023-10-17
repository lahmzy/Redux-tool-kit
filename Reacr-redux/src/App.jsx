import { useState } from 'react'

import './App.css'
import CakeView from './features/cake/cakeView'
import IceCreamView from './features/iceCream/IceCreamView'
import UserView from './features/user/UserView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
     
    </>
  )
}

export default App
