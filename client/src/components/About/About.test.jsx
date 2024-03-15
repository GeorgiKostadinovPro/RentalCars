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
});