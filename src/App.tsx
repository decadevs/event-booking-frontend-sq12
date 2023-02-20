import './App.css'
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DemoPage } from './pages/demo'
import { DashboardPage } from './pages/dashboard/DashboardPage';
// import { BookrProvider } from './utils/context';
import Navbar from './components/navbar/Navbar';
import { ContextProvider } from './utils/context';
import { Bookerpallette } from './utils/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Ticket from './components/Drop_Down/Ticket';
import EventCard from './pages/event-card';
import TicketSelection from './pages/ticketSelection'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Reset Password/resetPassword';



const theme = createTheme({
  palette: {
    ...Bookerpallette
  },
})


function App() {
  return (
    <>
    {/* </BookrProvider> */}
      <ContextProvider>
        <ThemeProvider theme={theme}>
        <Navbar />  
          <BrowserRouter>
            <Routes>
              <Route path='' element={<DemoPage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/tickets' element={<Ticket />} />
              <Route path='/event-card' element={<EventCard />} />
              <Route path='/ticket-selection' element={<TicketSelection />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='/reset-password' element={<ResetPassword />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}

export default App
