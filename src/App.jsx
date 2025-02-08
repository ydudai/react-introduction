import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Product from './components/Product'
import ProductList from './components/ProducList'
import Button from './components/Button'
import UserProfile from './components/UserProfile'
import Notification from './components/Notification'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting name="Yossi"></Greeting>
      <Greeting name="Yonatan"></Greeting>
      <Product name="Bread" price="10"></Product>
      <ProductList></ProductList>
      <Button labal="Yossi"></Button>
      <UserProfile username="Yossi" avatarUri = "xxxx"></UserProfile>
      <Notification type="success" message ="Notify success" ></Notification>
      <Notification type="error" message ="Notify Error" ></Notification>
      <Card title="my card" content="King"></Card>
   </>
  )
}

export default App
