import { describe, expect, it, render, vi } from "@/test/test-utils";
import Navigation from "./Navigation";

const mockLogout = vi.fn();

describe("Navigation", () => {
  it("should render button with text", () => {
    const { getByText } = render(<Navigation logout={mockLogout} />);

    const button = getByText("Dashboard");

    button.click();

    expect(button).toBeTruthy();
  });

  it("should call logout button", () => {
    const { getByText } = render(<Navigation logout={mockLogout} />);

    const button = getByText("Logout");

    button.click();

    expect(mockLogout).toBeCalled();
  });
});
