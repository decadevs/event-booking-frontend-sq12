import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import InputLabel from "@mui/material/InputLabel";
import { FormLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

interface Event {
  name: string;
  location: string;
  date: string;
}

const Main = styled.div`
  background: #10375c;
  height: 20vh;
  width: 80vw;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFormControl = styled(FormControl)`


`;

const StyledInputBase = styled.input`
  padding: 8px;
  width: 300px;
  height: 25px;
  background: #ffffff;
  border-radius: 8px;
  margin: 10px;
  
`;
const Select = styled.select`
  padding: 8px;
  width: 300px;
  height: 45px;
  background: #ffffff;
  border-radius: 8px;
  margin: 10px;
  color: #999;
  
`;

const Section = styled.div`
  padding: 10px;
  margin: 10px;
  width: 100vw;
  display: "flex",
justifyContent: "space-between",
margin: "40px",
`;

const StyledFormLabel = styled.label`
  color: #fff;
  display: flex;
  position: relative;
  left:15px;
`;

const EventSearch: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.com/events");
      res
        .json()
        .then((res) => setEvents(res))
        .catch((err) => console.error(err));
    }
    fetchData();
  }, []);

  const filteredEvents = events.filter((event) => {
    return (
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      event.location.toLowerCase().includes(location.toLowerCase()) &&
      event.date.includes(date)
    );
  });

  return (
    <Main>
      <Section>
        <StyledFormControl>
          <StyledFormLabel>
            What are you looking for?
          </StyledFormLabel>
          <StyledInputBase
            placeholder="Search events"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </StyledFormControl>
        <StyledFormControl>
          <StyledFormLabel>Location</StyledFormLabel>
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value)}>
            <option value="" selected>Lagos, Nigeria</option>
            <option value="">Abuja, Nigeria</option>
            <option value="">Kano, Nigeria</option>
            <option value="">Ibadan, Nigeria</option>
          </Select>
        </StyledFormControl>
        <StyledFormControl>
          <StyledFormLabel>When</StyledFormLabel>
          <StyledInputBase
            //   type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Any date"
          />
        </StyledFormControl>
        <Button
          type="submit"
          style={{
            width: "5vw",
            height: "7vh",
            background: "#FF5722",
            padding: "10px",
            borderRadius: "10px",
            marginTop:"24px"
          }}
        >
          <ArrowForwardIcon />
        </Button>
      </Section>

    </Main>
  );
};

export default EventSearch;
