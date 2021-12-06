import logo from "./logo.svg";
import "./App.css";
import {Header, Footer} from '../src/components'
import Router from './router'
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const loading = () => {
    setTimeout(() => {
        setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
  loading()
  }, [])

  if(isLoading === true){
    return (
        <div className="bg-customBg flex items-center justify-center w-full h-screen fixed">
            <div className="w-5 h-5 bg-sky-600 rounded-full animate-bounce mx-2"></div>
            <div className="w-5 h-5 bg-sky-600 rounded-full animate-bounce mx-2"></div>
            <div className="w-5 h-5 bg-sky-600 rounded-full animate-bounce mx-2"></div>
        </div>
    )
  } 


  return (
    <div className='font-poppins hidden lg:block'>
      <div className='lg:hidden'>Mobile View is Maintenance</div>
      <Header/>
      <div className='static'>
      <Router/>
      </div>
      <div className='fixed bottom-0 w-full'>
      <Footer/>

      </div>
    </div>
  );
}

export default App;
