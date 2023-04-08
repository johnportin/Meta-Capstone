import { render, screen, fireEvent, act } from "@testing-library/react";
import { BookingForm } from './BookingForm';

test("Renders BookingForm label 'Choose date'", () => {
    render(<BookingForm />);
    const dateLabel = screen.getByText(/choose date/i);
    expect(dateLabel).toBeInTheDocument();
})

describe("Booking Form", () => {
    test("BookingForm is disabled when isDisabled is true", async () => {
        await act(async () => {
            render(<BookingForm isDisabled={true} />);
        })
        const submitButton = screen.getByRole("button", { name: /make your reservation/i });
        expect(submitButton).toBeDisabled();
    })
})

describe("Booking Form", () => {
    test("BookingForm is enabled when isDisabled is true", async () => {
        await act(async () => {
            render(<BookingForm />);
        })
        const nameField = screen.getByPlaceholderText(/john doe/i);
        fireEvent.change(nameField, { target: { value: "abc" } });
        const submitButton = screen.getByRole("button", { name: /make your reservation/i });
        expect(submitButton).toBeEnabled();
    })
})


  