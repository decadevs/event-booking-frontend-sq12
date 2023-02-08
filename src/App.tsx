import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DemoPage } from './pages/demo'
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { Bookerpallette } from './utils/theme';
import { ContextProvider } from './utils/context';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/footer';

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
     <Footer />
     </ThemeProvider>
    </ContextProvider>
    </>

  )
}

export default App
