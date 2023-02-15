
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
import { EventPage } from './pages/ eventPage';


import InputField from './components/InputField/InputField';
import Buttons from './components/Buttons/Buttons';
import { ChangeEvent } from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Allevent from './pages/AllEvents/AllEvent'
import EventDetails from "./pages/eventDetails/eventDetails"

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
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/tickets" element={<Ticket name={''} type={'number'} label={''} value={''} id={''} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.');
              } } />} />
              <Route path="/event-card" element={<EventCard />} />
              <Route path="/event-page" element={<EventPage />} />
              <Route path='' element={<DemoPage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/search' element={< FormInput/>} />
              <Route path='/register' element={< Register/>} />
              <Route path='' element={<DemoPage />} />
              {/* <Route path='/dashboard' element={<DashboardPage />} /> */}
              <Route path='/ticket-selection' element={<TicketSelection />} />
              <Route path='/InputField' element={<InputField name={''} type={'number'} value={''} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.');
              } } label={''} id={''} />} />
              <Route path='/button' element={<Buttons content={undefined} height={''} width={''} onClick={function (): void {
                throw new Error('Function not implemented.');
              } } />} />
              <Route path='/login' element={<Login />} />
              <Route path='/events' element={<Allevent/>} />
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
