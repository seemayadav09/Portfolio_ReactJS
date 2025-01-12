import React from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import { ThemeProvider } from './components/theme-provider'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ScrollProgress from './components/ui/scroll-progress'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <ThemeProvider>
        <ScrollProgress className="top-[0px]" />
    <div id='home'>
      <Header/>
      <Landing/>
      <Experience/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
    </ThemeProvider> 
  )
}

export default App