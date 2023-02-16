import './App.css'
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DemoPage } from './pages/demo'
import { DashboardPage } from './pages/dashboard/DashboardPage';
import Navbar from './components/navbar/Navbar';
import { ContextProvider } from './utils/context';
import { Bookerpallette } from './utils/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Ticket from './components/Drop_Down/Ticket';
import EventCard from './pages/event-card';
import Publish from './pages/Publish/Publish';
import FormInput from './components/search';
import TicketSelection from './pages/ticketSelection'
import { EventPage } from './pages/ eventPage';


import PaymentInfo from './pages/paymentInformation';
import AccountInfo from './pages/accountInformation';
import { ChangeEvent } from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Allevent from './pages/AllEvents/AllEvent'
import EventDetails from './pages/eventDetails/eventDetails';

const theme = createTheme({
  palette: {
    ...Bookerpallette,
  },
});

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
              <Route path='/publish' element={<Publish />} />
              <Route path="/dashboard" element={<DashboardPage />} />

              <Route path="/event-card" element={<EventCard />} />
              <Route path="/event-page" element={<EventPage />} />
              <Route path='' element={<DemoPage />} />
              <Route path='/dashboard' element={<DashboardPage />} />

              <Route path='/payment-information' element={<PaymentInfo />} />
              <Route path='/account-information' element={<AccountInfo />} />
              <Route path='/search' element={< FormInput />} />
              <Route path='/register' element={< Register />} />
              <Route path='' element={<DemoPage />} />

              <Route path='/ticket-selection' element={<TicketSelection />} />


              <Route path='/login' element={<Login />} />
              <Route path='/events' element={<Allevent />} />
              <Route path="" element={<DemoPage />} />
              <Route path="/search" element={<FormInput />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/events" element={<Allevent />} />
              <Route path="/event-details" element={<EventDetails />} />;
            </Routes>
          </BrowserRouter>
          <Footer />
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default App;
