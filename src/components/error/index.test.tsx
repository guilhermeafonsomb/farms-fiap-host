import { fireEvent, render, vi } from "@/test/test-utils";
import { Error } from "./index";

describe("Error tests", () => {
  it("should render error message", () => {
    const { getByText } = render(<Error />);

    expect(getByText("Erro ao carregar dados")).toBeInTheDocument();
  });

  it("should reload page when clicking reload button", () => {
    const reloadMock = vi.fn();
    Object.defineProperty(window, "location", {
      value: { reload: reloadMock },
      writable: true,
    });

    const { getByRole } = render(<Error />);
    const reloadButton = getByRole("button", { name: "Recarregar página" });

    fireEvent.click(reloadButton);

    expect(reloadMock).toHaveBeenCalledTimes(1);
  });
});
