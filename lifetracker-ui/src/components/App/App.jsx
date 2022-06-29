import * as React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom";
export default function App() {
  return (
    <div className="app">
      <React.Fragment>{
       <BrowserRouter>
         <main>
         <Navbar />
        <Routes>
        <Route path="/" element={<Landing/>}/> 
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route/>
        <Route/>

        </Routes>
         </main>
       </BrowserRouter> 
        }</React.Fragment>
    </div>
  )
}
