import { render, waitFor } from "@/test/test-utils";
import { RouteAnnouncer } from "./index.";
import { describe, it, expect, beforeEach } from "vitest";

describe("RouteAnnouncer", () => {
  beforeEach(() => {
    document.title = "";
  });

  it("should render the announcer element with correct ARIA attributes", () => {
    const { container } = render(<RouteAnnouncer />);
    const announcer = container.querySelector("#route-announcer");

    expect(announcer).toBeInTheDocument();
    expect(announcer).toHaveAttribute("role", "status");
    expect(announcer).toHaveAttribute("aria-live", "polite");
    expect(announcer).toHaveAttribute("aria-atomic", "true");
    expect(announcer).toHaveClass("sr-only");
  });

  it("should update document title on initial render", async () => {
    render(<RouteAnnouncer />);

    await waitFor(() => {
      expect(document.title).toContain("FIAP Farms");
    });
  });

  it("should announce route to screen readers", async () => {
    const { container } = render(<RouteAnnouncer />);
    const announcer = container.querySelector("#route-announcer");

    await waitFor(() => {
      expect(announcer?.textContent).toBeTruthy();
      expect(announcer?.textContent).toContain("Navegou para");
    });
  });

  it("should be accessible to screen readers", () => {
    const { container } = render(<RouteAnnouncer />);
    const announcer = container.querySelector("#route-announcer");

    expect(announcer).toHaveClass("sr-only");
    expect(announcer).toHaveAttribute("aria-live", "polite");
    expect(announcer).toHaveAttribute("aria-atomic", "true");
    expect(announcer).toHaveAttribute("role", "status");
  });

  it("should use Portuguese language for announcements", async () => {
    const { container } = render(<RouteAnnouncer />);
    const announcer = container.querySelector("#route-announcer");

    await waitFor(() => {
      expect(announcer?.textContent).toMatch(/Navegou para/);
    });
  });
});
