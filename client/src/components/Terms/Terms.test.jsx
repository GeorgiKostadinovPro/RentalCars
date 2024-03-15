import { cleanup, render, screen } from '@testing-library/react'

import { Terms } from './Terms'

describe('Terms Component', () => {
  beforeEach(() => {
    render(<Terms />);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the page heading with correct text", () => {
    expect(screen.getByText("Terms")).toBeInTheDocument();
    expect(screen.getByText("Read about our terms and privacy")).toBeInTheDocument();
  });

  it("renders all sections with correct titles and content", () => {
    expect(screen.getByText("A) Terms")).toBeInTheDocument();
    expect(screen.getByText("1. Terms of Service")).toBeInTheDocument();
    expect(screen.getByText(/By using our car rental services/)).toBeInTheDocument();

    expect(screen.getByText("B) Our Privacy")).toBeInTheDocument();
    expect(screen.getByText("2. Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText(/Your privacy is important to us/)).toBeInTheDocument();

    expect(screen.getByText("C) Security")).toBeInTheDocument();
    expect(screen.getByText("3. Data Security Agreement")).toBeInTheDocument();
    expect(
      screen.getByText(/We employ industry-standard security measures/)
    ).toBeInTheDocument();
  });
});