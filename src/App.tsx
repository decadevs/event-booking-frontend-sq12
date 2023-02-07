import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DemoPage } from './pages/demo'
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { ContextProvider } from './utils/context';
import { Bookerpallette} from './utils/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';



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
          <Route path='' element={<DemoPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
      Your Footer here... 
     </ThemeProvider>
    </ContextProvider>
    </>

  )
}

export default App
