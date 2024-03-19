import { cleanup, render, screen } from '@testing-library/react'
import { About } from './About'

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders page heading correctly', () => {
    const pageTitle = screen.getByText('About Us');
    const pageSubtitle = screen.getByText('We have an excellent team and ambitious goals');

    expect(pageTitle).toBeInTheDocument();
    expect(pageSubtitle).toBeInTheDocument();
  });

  it('renders Info component', () => {
    const infoComponent = screen.getByText('We are Rental Cars');
    expect(infoComponent).toBeInTheDocument();
  });

  it('renders Facts component', () => {
    const factsComponent = screen.getByText('Some interesting facts');
    expect(factsComponent).toBeInTheDocument();
  });

  it('renders Team component', () => {
    const teamTitle = screen.getByText('Our team');
    expect(teamTitle).toBeInTheDocument();
  });

  it("should render linkedin link and redirect to linkedin", async () => {
    const linkedinLink = screen.getByTestId("linkedin-link");

    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/georgi-kostadinov-125349241/"
    );
  });
});