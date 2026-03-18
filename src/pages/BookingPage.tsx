import React from "react";
import BookingForm from "../components/BookingForm";

interface Props {
  availableTimes: string[];
  dispatch: React.Dispatch<any>;
}

export default function BookingPage({ availableTimes, dispatch }: Props) {
  return (
    <div
      className="card p-4 shadow"
      style={{ width: "400px", backgroundColor: "#fff" }}
    >
      <h1 className="mb-4 text-center">Reserve a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}