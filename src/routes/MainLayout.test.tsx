import { render } from "@/test/test-utils";
import { MainLayout } from "./MainLayout";
import { describe, it, expect, vi } from "vitest";

vi.mock("@/components/NavBar/Navigation", () => ({
  default: () => <div data-testid="navigation">Navigation</div>,
}));

describe("MainLayout - Skip Navigation", () => {
  it("should render skip navigation link", () => {
    const { getByText } = render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );

    const skipLink = getByText("Pular para o conteúdo principal");
    expect(skipLink).toBeInTheDocument();
  });

  it("should have correct href pointing to main content", () => {
    const { getByText } = render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );

    const skipLink = getByText("Pular para o conteúdo principal");
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("should have sr-only class to hide visually", () => {
    const { getByText } = render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );

    const skipLink = getByText("Pular para o conteúdo principal");
    expect(skipLink).toHaveClass("sr-only");
  });

  it("should render main content with correct id", () => {
    const { container } = render(
      <MainLayout>
        <div data-testid="test-content">Test Content</div>
      </MainLayout>
    );

    const mainElement = container.querySelector("#main-content");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement?.tagName).toBe("MAIN");
  });

  it("should render children inside main element", () => {
    const { getByTestId } = render(
      <MainLayout>
        <div data-testid="test-content">Test Content</div>
      </MainLayout>
    );

    const content = getByTestId("test-content");
    expect(content).toBeInTheDocument();
  });

  it("should be keyboard accessible", () => {
    const { getByText } = render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );

    const skipLink = getByText("Pular para o conteúdo principal");
    expect(skipLink.tagName).toBe("A");
    expect(skipLink).not.toHaveAttribute("tabindex", "-1");
  });

  it("should use Portuguese language", () => {
    const { getByText } = render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>
    );

    const skipLink = getByText("Pular para o conteúdo principal");
    expect(skipLink).toBeInTheDocument();
  });
});
