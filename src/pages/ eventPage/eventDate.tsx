import React, { useState, forwardRef } from "react";
// yarn add react-datepicker
import DatePicker from "react-datepicker";
// yarn remove @types/react-datepicker
import "react-datepicker/dist/react-datepicker.css";

export function CalendarInput() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const CustomInput = forwardRef<
    HTMLInputElement,
    { value: string; onClick: () => void }
  >(({ value, onClick }, ref) => (
    <div className="input-group">
      <input
        ref={ref}
        type="text"
        className="form-control"
        value={value}
        onClick={onClick}
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(37, 45, 66, 0.29)",
          borderRadius: "4px",
          textAlign: "center",
          width: "100%",
          height: "5em",
        }}
      />
      <div className="input-group-append"></div>
    </div>
  ));

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        customInput={
          <CustomInput
            value={""}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      />
    </div>
  );
}