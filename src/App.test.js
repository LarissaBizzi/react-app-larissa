import React from 'react';
import { render } from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe('BookingForm', () => {
  it('renders the Full name input field correctly', () => {
    const { getByLabelText } = render(<BookingForm />);
    const input = getByLabelText('Full name:');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'Your full name here');
    expect(input).toBeRequired();
  });

/*   it('renders the Telephone input field correctly', () => {
    const { getByLabelText } = render(<BookingForm />);
    const input = getByLabelText('telephone');
    expect(input).toHaveAttribute('type', 'tel');
    expect(input).toHaveAttribute('placeholder', '123 456 7890');
    expect(input).toBeRequired();
  });

  it('renders the Date input field correctly', () => {
    const { getByText } = render(<BookingForm />);
    const input = getByLabelText('date');
    expect(input).toHaveAttribute('type', 'date');
    expect(input).toBeRequired();
  });

  it('renders the Time select field correctly', () => {
    const { getByLabelText } = render(<BookingForm />);
    const select = getByLabelText('time');
    expect(select).toHaveAttribute('id', 'time');
    expect(select).toBeRequired();
  }); */

 /*  it('renders the Number of guests input field correctly', () => {
    const { getByLabelText } = render(<BookingForm />);
    const input = getByLabelText('Number of guests:');
    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveAttribute('placeholder', '1');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '10');
    expect(input).toBeRequired();
  }); */
});

