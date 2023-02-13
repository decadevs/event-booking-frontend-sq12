import "./App.css";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DemoPage } from "./pages/demo";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { ContextProvider } from "./utils/context";
import { Bookerpallette } from "./utils/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Ticket from "./components/Drop_Down/Ticket";
import EventCard from "./pages/event-card";
import { EventPage } from "./pages/ eventPage";

const theme = createTheme({
  palette: {
    ...Bookerpallette,
  },
});

function App() {
  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              {/* <Route path='' element={<DemoPage />} /> */}
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/tickets" element={<Ticket />} />
              <Route path="/event-card" element={<EventCard />} />
              <Route path="/event-page" element={<EventPage />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default App;
