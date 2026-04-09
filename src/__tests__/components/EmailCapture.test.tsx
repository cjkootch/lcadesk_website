import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import EmailCapture from "@/components/EmailCapture";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock lucide-react icons
vi.mock("lucide-react", () => ({
  Bell: () => <span data-testid="icon-bell" />,
  CheckCircle2: () => <span data-testid="icon-check" />,
  AlertTriangle: () => <span data-testid="icon-alert" />,
  ArrowRight: () => <span data-testid="icon-arrow" />,
  Loader2: () => <span data-testid="icon-loader" />,
}));

// Mock @vercel/analytics
vi.mock("@vercel/analytics", () => ({
  track: vi.fn(),
}));

const fetchSpy = vi.fn();

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  fetchSpy.mockReset();
  vi.stubGlobal("fetch", fetchSpy);
});

describe("EmailCapture", () => {
  it("renders with default headline and description", () => {
    render(<EmailCapture />);
    expect(screen.getByText("Get LCA filing deadline reminders")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@company.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
  });

  it("renders with custom headline", () => {
    render(<EmailCapture headline="Custom Headline" />);
    expect(screen.getByText("Custom Headline")).toBeInTheDocument();
  });

  it("submits email and shows success state", async () => {
    fetchSpy.mockResolvedValueOnce(new Response("{}", { status: 200 }));

    render(<EmailCapture />);
    const input = screen.getByPlaceholderText("you@company.com");
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "user@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("You're subscribed!")).toBeInTheDocument();
    });

    // Verify the fetch was called with correct payload
    expect(fetchSpy).toHaveBeenCalledWith(
      "https://app.lcadesk.com/api/public/subscribe",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ email: "user@example.com", list: "filing_reminders" }),
      })
    );
  });

  it("sends correct list parameter", async () => {
    fetchSpy.mockResolvedValueOnce(new Response("{}", { status: 200 }));

    render(<EmailCapture list="opportunities" />);
    const input = screen.getByPlaceholderText("you@company.com");
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "user@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          body: JSON.stringify({ email: "user@example.com", list: "opportunities" }),
        })
      );
    });
  });

  it("shows error message on API failure", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 })
    );

    render(<EmailCapture />);
    const input = screen.getByPlaceholderText("you@company.com");
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "bad@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Invalid email")).toBeInTheDocument();
    });
  });

  it("shows generic error on network failure", async () => {
    fetchSpy.mockRejectedValueOnce(new Error("Network error"));

    render(<EmailCapture />);
    const input = screen.getByPlaceholderText("you@company.com");
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "user@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Network error")).toBeInTheDocument();
    });
  });

  it("disables input and button while loading", async () => {
    // Never resolve — keep it in loading state
    fetchSpy.mockReturnValueOnce(new Promise(() => {}));

    render(<EmailCapture />);
    const input = screen.getByPlaceholderText("you@company.com");
    const button = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(input, { target: { value: "user@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(input).toBeDisabled();
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  it("renders inline variant", () => {
    render(<EmailCapture variant="inline" />);
    expect(screen.getByText("No spam. Unsubscribe anytime.")).toBeInTheDocument();
  });
});
