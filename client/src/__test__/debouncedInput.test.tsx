import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DebouncedInput } from "../components/DebouncedInput";

describe("Debounced Input", () => {
  it("should render debounced input and init all values", () => {
    const initialValue = "initialValue",
      onChange = () => console.log("test"),
      placeholder = "Search...";

    render(
      <DebouncedInput
        initialValue={initialValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    );

    expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it("should render debounced input and input user text", async () => {
    const initialValue = "";
    const placeholder = "Search...";

    const userText = "some text";
    const mockedOnChange = jest.fn();

    jest.useFakeTimers();

    render(
      <DebouncedInput
        initialValue={initialValue}
        onChange={mockedOnChange}
        placeholder={placeholder}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);

    await userEvent.type(inputElement, userText);

    jest.runAllTimers();

    expect(screen.getByDisplayValue(userText)).toBeInTheDocument();
    expect(mockedOnChange).toHaveBeenCalledWith(userText);
  });
});
