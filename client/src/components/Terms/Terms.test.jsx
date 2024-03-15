import { render, screen } from '@testing-library/react'

import { Terms } from './Terms'

test("always true test", () => {
    expect(true).toBe.true;
});

test("heading should be Terms", () => {
    render(<Terms />);

    const h1 = screen.getByText("Terms");

    expect(h1).toBeInTheDocument();
});