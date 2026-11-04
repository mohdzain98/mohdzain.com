import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Wrong from "@/features/errors/NotFound";

describe("smoke", () => {
  it("renders the 404 page", () => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter>
          <Wrong />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(container.firstChild).toBeTruthy();
  });
});
