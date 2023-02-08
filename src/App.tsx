import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DemoPage } from './pages/demo'
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { ContextProvider } from './utils/context';
import { Bookerpallette} from './utils/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EventCard from './pages/event-card';



const theme = createTheme({
  palette: {
  ... Bookerpallette
  },
})


function App() {
  return (
    <>
    <ContextProvider>
     <ThemeProvider theme={theme}>
     Your Nav here ...
      <BrowserRouter>
        <Routes>
          {/* <Route path='' element={<DemoPage />} /> */}
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/event-card' element={<EventCard />} />
        </Routes>
      </BrowserRouter>
      Your Footer here... 
     </ThemeProvider>
    </ContextProvider>
    </>

  )
}

export default App
