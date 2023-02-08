import { useState , createContext} from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DemoPage } from './pages/demo'
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { BookrProvider } from './utils/context';


function App() {
  return (
    <>
    <BookrProvider>
     {/* Your Nav here ... */}
      <BrowserRouter>
        <Routes>
          <Route path='' element={<DemoPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>

      {/* Your Footer here...  */}
    </BookrProvider>
    </>

  )
}

export default App
