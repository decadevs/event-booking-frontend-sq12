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
import FormInput from './components/search';
import TicketSelection from './pages/ticketSelection'
import PaymentInfo from './pages/paymentInformation';
import AccountInfo from './pages/accountInformation';
import Register from './pages/register/Register';
import Allevent from './pages/AllEvents/AllEvent'




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
              {/* <Route path='' element={<DemoPage />} /> */}
              {/* <Route path='/dashboard' element={<DashboardPage />} /> */}
              {/* <Route path='/tickets' element={<Ticket />} /> */}
              {/* <Route path='/event-card' element={<EventCard />} /> */}
              {/* <Route path='/ticket-selection' element={<TicketSelection />} /> */}
              <Route path='/payment-information' element={<PaymentInfo />} />
              <Route path='/account-information' element={<AccountInfo />} />
              <Route path='/search' element={< FormInput/>} />
              <Route path='/register' element={< Register/>} />
              <Route path='' element={<DemoPage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/tickets' element={<Ticket />} />
              <Route path='/event-card' element={<EventCard />} />
              <Route path='/ticket-selection' element={<TicketSelection />} />
              <Route path='/events' element={<Allevent/>} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}

export default App
