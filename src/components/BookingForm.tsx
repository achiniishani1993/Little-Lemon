import React, { useState } from "react";

interface Props {
  availableTimes: string[];
  dispatch: React.Dispatch<any>;
}

interface Errors {
  date: string;
  time: string;
  guests: string;
  occasion: string;
}

export default function BookingForm({ availableTimes, dispatch }: Props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [errors, setErrors] = useState<Errors>({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  // Validate all fields
  const validate = (): boolean => {
    const newErrors: Errors = {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    };

    let valid = true;

    // Date validation (no past dates)
    if (!date) {
      newErrors.date = "Please select a date.";
      valid = false;
    } else {
      const today = new Date().toISOString().split("T")[0];
      if (date < today) {
        newErrors.date = "Date cannot be in the past.";
        valid = false;
      }
    }

    // Guests validation
    if (guests < 1 || guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
      valid = false;
    }

    // Occasion validation
    if (!occasion) {
      newErrors.occasion = "Please select an occasion.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

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
          aria-invalid={!!errors.date}
          aria-describedby="date-error"
        />
        {errors.date && (
          <div id="date-error" className="invalid-feedback">
            {errors.date}
          </div>
        )}
      </div>

      {/* Time */}
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
          {availableTimes.length > 0 ? (
            availableTimes.map((t) => <option key={t}>{t}</option>)
          ) : (
            <option>No times available</option>
          )}
        </select>
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
          onChange={(e) => setGuests(Number(e.target.value))}
          aria-invalid={!!errors.guests}
          aria-describedby="guests-error"
        />
        {errors.guests && (
          <div id="guests-error" className="invalid-feedback">
            {errors.guests}
          </div>
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
          aria-invalid={!!errors.occasion}
          aria-describedby="occasion-error"
        >
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {errors.occasion && (
          <div id="occasion-error" className="invalid-feedback">
            {errors.occasion}
          </div>
        )}
      </div>

      <button type="submit" className="btn btn-warning w-100">
        Make Your Reservation
      </button>
    </form>
  );
}