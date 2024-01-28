
import './App.css'
import { Games } from './Components/Games/Games'
import { Header } from './Components/Header/Header'
import { Category } from './Components/HeaderParcourir/Category'

import { SideBar } from './Components/SideBar/Sidebar'



function App() {


  return (
   
     <div className="app">
      <Header/>
      <Category/>
      <SideBar/>
      <Games/>
     </div>
       
   
  )
}

export default App
