import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
  const  location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  function pathMathRoute(route){
    if(route === location.pathname){
      return true
    }
  }

  
  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
   <header className="flex items-center justify-between px-3 text-white bg-zinc-900">
    <div>
      <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8fDA%3D" alt="logo" 
      className="h-20 cursor-pointer" onClick={()=>navigate("/")}/>
      
    </div>
    <div>
      <ul className="flex space-x-10">
        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-yellow-400 border-b-red-600"}`} onClick={()=>navigate("/")}>Home</li>
        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/offers") && "text-yellow-400 border-b-red-600"}`}onClick={()=>navigate("/offers")}>Offers</li>
        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") && "text-yellow-400 border-b-red-600"}`}onClick={()=>navigate("/sign-in")}>Sign In</li>
      </ul>
    </div>
   </header>
   </div>
  )
}
