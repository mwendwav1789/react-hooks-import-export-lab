import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App"; // Adjust the path as needed

test("renders App without crashing", () => {
  try {
    render(<App />);
  } catch (e) {
    throw new Error("Make sure to import the required components!");
  }
});
