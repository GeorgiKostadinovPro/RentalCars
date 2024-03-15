import { render, cleanup } from '@testing-library/react'

import { Terms } from './Terms'

describe('Terms Component', () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the page heading with correct text", () => {
    const { getByText } = render(<Terms />);

    expect(getByText("Terms")).toBeInTheDocument();
    expect(getByText("Read about our terms and privacy")).toBeInTheDocument();
  });

  it("renders all sections with correct titles and content", () => {
    const { getByText } = render(<Terms />);

    expect(getByText("A) Terms")).toBeInTheDocument();
    expect(getByText("1. Terms of Service")).toBeInTheDocument();
    expect(getByText(/By using our car rental services/)).toBeInTheDocument();

    expect(getByText("B) Our Privacy")).toBeInTheDocument();
    expect(getByText("2. Privacy Policy")).toBeInTheDocument();
    expect(getByText(/Your privacy is important to us/)).toBeInTheDocument();

    expect(getByText("C) Security")).toBeInTheDocument();
    expect(getByText("3. Data Security Agreement")).toBeInTheDocument();
    expect(
      getByText(/We employ industry-standard security measures/)
    ).toBeInTheDocument();
  });
});