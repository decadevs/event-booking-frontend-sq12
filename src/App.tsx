import "./App.css";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DemoPage } from "./pages/demo";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import Navbar_homepage from "./components/navbar/navbarHomepage/navbar_homepage.module";
import { ContextProvider } from "./utils/context";
import { Bookerpallette } from "./utils/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Ticket from "./components/Drop_Down/Ticket";
import EventCard from "./pages/event-card";
import Publish from "./pages/Publish/Publish";
import FormInput from "./components/search";
import TicketSelection from "./pages/ticketSelection";
import { EventPage } from "./pages/ eventPage";
import { ChangeEvent } from 'react';
import { ToastContainer } from 'react-toastify';
import PaymentInfo from "./pages/paymentInformation";
import AccountInfo from "./pages/accountInformation";
import Login from "./pages/login/Login";
import CheckoutPage from "./pages/checkout-page/Checkout"
import Register from "./pages/register/Register";
import Allevent from "./pages/AllEvents/AllEvent";
import EventDetails from "./pages/eventDetails/eventDetails";
import { Hero } from "./pages/eventPage/Hero";
import PrivateRoute from "./context/PrivateRoutes";
import PaymentTypePage from "./pages/checkout-page/Modal";

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
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <Navbar_homepage />
          <BrowserRouter>
            <Routes>
              {/* Protected routes start */}
              <Route path="/dashboard" element={<PrivateRoute />}>
                <Route path="event-page" element={<EventPage />} />
                <Route path="" element={<DashboardPage />} />
                <Route path="payment-information" element={<PaymentInfo />} />
                <Route path="account-information" element={<AccountInfo />} />
                <Route path="event-card" element={<EventCard />} />
                <Route path="event-details" element={<EventDetails />} />
              </Route>
              {/* end */}

              <Route path="/checkout-page" element={<CheckoutPage />} />
              <Route path="/publish" element={<Publish />} />
              <Route path="demopage" element={<DemoPage />} />
              <Route path="/search" element={<FormInput />} />
              <Route path="/register" element={<Register />} />
              <Route path="/ticket-selection" element={<TicketSelection />} />
              <Route path="/login" element={<Login />} />
              <Route path="/events" element={<Allevent />} />
              <Route path="" element={<Hero />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default App;
