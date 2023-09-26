import Home from './components/Home'
import Navbar from './components/Navbar'
import wallpaper from './assets/wallpaper.jpg'
import './App.css'

function App() {
  

  return (
    <div className="relative h-screen">
      <div className="absolute flex w-full h-full object-[center-bottom]">
        <img 
      src={wallpaper}
      alt=""
      className='object-cover w-full h-full object-[center-bottom]'
      />
      </div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
