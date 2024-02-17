
import './App.css'
import { Games } from './Components/Games/Games'
import { Header } from './Components/Header/Header'
import { Category } from './Components/HeaderParcourir/Category'
import { SideBar } from './Components/SideBar/Sidebar'
import { useWindowSize } from './hooks/useScreenSize'
import { Mobile } from './Components/MobilePage/Mobile'





function App() {
  const screenWidth = useWindowSize().width;
  


  if (screenWidth <= 500) {
    console.log('mobile mode');
    return <Mobile/>
  }


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
