import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Homepage } from './components/Homepage'
import { Resources } from './components/Resources'
import { Project } from './components/project'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Publications } from './components/publications'
import { People } from './components/People'

function App() {

  return (
        <BrowserRouter>
          <main className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
            <div>
              <Hero/>
            </div>
            <div className="flex flex-col flex-1">
              <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/resources" element={<Resources/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/people" element={<People/>}/>
                <Route path="/publications" element={<Publications/>}/>
              </Routes>
            </div>
            <div>
              <Footer/>
            </div>
          </main>
        </BrowserRouter>
  )
}

export default App