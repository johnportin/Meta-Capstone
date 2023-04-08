import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from './BookingForm';

test("Renders BookingForm label 'Choose date'", () => {
    render(<BookingForm />);
    const dateLabel = screen.getByText(/choose date/i);
    expect(dateLabel).toBeInTheDocument();
})

// test("Correctly initializes the time options", () => {
//     render(<BookingForm />);
//     const timeOptions = screen.findAllByRole("option");
//     expect(timeOptions).toBeInTheDocument();
// })

test("Updates the time correctly", () => {
    render(<BookingForm />);
    const dateSelector = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
    const timeDropDown = screen.getByRole("select");
    fireEvent.change(timeDropDown, { target: { value: "17:00" } });
    expect(timeDropDown.value).toEqual("17:00");
  });
  