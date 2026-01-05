import { describe, expect, it, render } from "@/test/test-utils";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("should render button with text", () => {
    const { getByText, debug } = render(<Navigation />);

    const button = getByText("Dashboard");

    button.click();

    debug();
    expect(button).toBeTruthy();
  });
});
