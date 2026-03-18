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

  // Validation state
  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
    if (!selectedDate) {
      setErrors((prev) => ({ ...prev, date: "Please select a date." }));
    } else {
      setErrors((prev) => ({ ...prev, date: "" }));
    }
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setGuests(value);

    if (value < 1 || value > 10) {
      setErrors((prev) => ({
        ...prev,
        guests: "Guests must be between 1 and 10.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, guests: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check all validations
    let formValid = true;
    const newErrors = { date: "", time: "", guests: "", occasion: "" };

    if (!date) {
      newErrors.date = "Please select a date.";
      formValid = false;
    }
    if (!time) {
      newErrors.time = "Please select a time.";
      formValid = false;
    }
    if (!guests || guests < 1 || guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
      formValid = false;
    }
    if (!occasion) {
      newErrors.occasion = "Please select an occasion.";
      formValid = false;
    }

    setErrors(newErrors);

    if (!formValid) return;

    // Submit successful
    alert(
      `Reservation submitted!\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`
    );
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Date */}
      <div className="mb-3">
        <label htmlFor="res-date" className="form-label">
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          className={`form-control ${errors.date ? "is-invalid" : ""}`}
          value={date}
          onChange={handleDateChange}
        />
        {errors.date && <div className="invalid-feedback">{errors.date}</div>}
      </div>

      {/* Time */}
      <div className="mb-3">
        <label htmlFor="res-time" className="form-label">
          Choose time
        </label>
        <select
          id="res-time"
          className={`form-select ${errors.time ? "is-invalid" : ""}`}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {errors.time && <div className="invalid-feedback">{errors.time}</div>}
      </div>

      {/* Guests */}
      <div className="mb-3">
        <label htmlFor="guests" className="form-label">
          Number of guests
        </label>
        <input
          type="number"
          id="guests"
          className={`form-control ${errors.guests ? "is-invalid" : ""}`}
          min={1}
          max={10}
          value={guests}
          onChange={handleGuestsChange}
        />
        {errors.guests && (
          <div className="invalid-feedback">{errors.guests}</div>
        )}
      </div>

      {/* Occasion */}
      <div className="mb-3">
        <label htmlFor="occasion" className="form-label">
          Occasion
        </label>
        <select
          id="occasion"
          className={`form-select ${errors.occasion ? "is-invalid" : ""}`}
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {errors.occasion && (
          <div className="invalid-feedback">{errors.occasion}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Make Your Reservation
      </button>
    </form>
  );
}