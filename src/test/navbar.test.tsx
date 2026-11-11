import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar";

beforeAll(() => {
  window.matchMedia = ((q: string) => ({
    matches: false,
    media: q,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    onchange: null,
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
});

function renderNav(path = "/projects") {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[path]}>
        <Navbar />
      </MemoryRouter>
    </ThemeProvider>,
  );
}

describe("Navbar drawer", () => {
  it("opens a left drawer with the navbar links and closes on navigation", async () => {
    renderNav();
    await userEvent.click(screen.getByRole("button", { name: /open menu/i }));
    const drawer = await screen.findByRole("dialog");
    expect(drawer).toHaveAttribute("data-slot", "sheet-content");
    const nav = screen.getByRole("navigation", { name: "Mobile" });
    for (const label of ["Home", "Experience", "Projects", "Blog"]) {
      expect(nav).toHaveTextContent(label);
    }
    expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("link", { name: "Blog" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes with the X button", async () => {
    renderNav();
    await userEvent.click(screen.getByRole("button", { name: /open menu/i }));
    await userEvent.click(
      await screen.findByRole("button", { name: /close menu/i }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
