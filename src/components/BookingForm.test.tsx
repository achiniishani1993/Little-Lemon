
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Vitest imports
import { describe, it, expect, beforeEach, vi } from "vitest";

import BookingForm from "./BookingForm";

const availableTimes = ["17:00", "18:00", "19:00"];
const mockDispatch = vi.fn();

describe("BookingForm", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("renders all form fields", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Make Your Reservation/i })).toBeInTheDocument();
  });

  it("shows validation errors on empty submission", async () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
    const submitButton = screen.getByRole("button", { name: /Make Your Reservation/i });
    await userEvent.click(submitButton);
    expect(screen.getByText(/Please select a date/i)).toBeInTheDocument();
    expect(screen.getByText(/Guests must be between 1 and 10/i)).toBeInTheDocument();
  });

  it("dispatch is called when date changes", async () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />);
    const dateInput = screen.getByLabelText(/Choose date/i);
    await userEvent.type(dateInput, "2026-03-18");
    expect(mockDispatch).toHaveBeenCalledWith({ type: "UPDATE_TIMES", date: "2026-03-18" });
  });
});