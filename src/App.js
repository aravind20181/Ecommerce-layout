import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Home from './components/Home'



export default function App(){
  return(
    <>
    <BrowserRouter>
       <Header/>
       <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Container>
       </main>
        
    </BrowserRouter>


    
    </>
  )
}
