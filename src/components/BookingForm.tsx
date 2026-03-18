import React, { useState } from "react";

interface Props {
  availableTimes: string[];
  dispatch: React.Dispatch<any>;
}

export default function BookingForm({ availableTimes, dispatch }: Props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Reservation submitted:\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="res-date" className="form-label">
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          className="form-control"
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="res-time" className="form-label">
          Choose time
        </label>
        <select
          id="res-time"
          className="form-select"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="guests" className="form-label">
          Number of guests
        </label>
        <input
          type="number"
          id="guests"
          className="form-control"
          min={1}
          max={10}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="occasion" className="form-label">
          Occasion
        </label>
        <select
          id="occasion"
          className="form-select"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button type="submit" className="btn btn-warning w-100">
        Make Your Reservation
      </button>
    </form>
  );
}