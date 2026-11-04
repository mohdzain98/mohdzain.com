import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container, Section } from "@/components/layout/Container";

describe("ui primitives", () => {
  it("renders shadcn button and card", () => {
    render(
      <Section>
        <Container>
          <Card className="shadow-sm">
            <CardContent>
              <Button>Hello</Button>
            </CardContent>
          </Card>
        </Container>
      </Section>,
    );
    expect(screen.getByRole("button", { name: "Hello" })).toBeInTheDocument();
  });
});
