import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



import { useReducer } from "react";
import BookingPage from "./pages/BookingPage";

// Action type
type Action = {
  type: "UPDATE_TIMES";
  date: string;
};

// Initialize times
const initializeTimes = (): string[] => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer
const updateTimes = (state: string[], action: Action): string[] => {
  switch (action.type) {
    case "UPDATE_TIMES":
      console.log("Selected date:", action.date);
      return state;
    default:
      return state;
  }
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main
      style={{ backgroundColor: "#495E57", minHeight: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}