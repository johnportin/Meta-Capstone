import { screen, render, act, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BookingForm } from "./components/BookingForm/BookingForm.js";
import  App  from "./App.js";
import { fetchAPI } from "./fetchUtils.js";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

test("InitializeTimes", async () => {
    // const container = document.createElement("div");
    await act(async () => {
         render(<BookingForm />, container);
    })
    const times = await screen.findAllByRole("option");
    expect(times.length).toBeGreaterThan(0);
})

test("initialTimes contains '17:00'", async () => {
    await act(async () => {
        render(<BookingForm />, container);
    })
    const times = screen.findByTestId("res-time");
    expect(times).toHaveTextContent("17:00");
    expect(times.value).toEqual("17:00");
})

test("Updates the time correctly", async () => {
    await act(async () => {
        render(<BookingForm />, container);
    })

    const dateSelector = screen.getByLabelText("Choose date");
    expect(dateSelector).toBeInTheDocument();
    expect(dateSelector.value).toEqual("2023-04-04");
    await act (async () => {
        await fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
    })
    expect(dateSelector).toHaveTextContent("2023-02-05");

    
    // const timeDropDown = screen.getByTestId("res-time");
    // await act (async () => {
    //     fireEvent.change(timeDropDown, { target: { value: "19:00" } });
    // })
    // expect(timeDropDown.value).toEqual("19:00");
  });