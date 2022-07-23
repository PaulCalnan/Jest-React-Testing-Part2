import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('Checkbox is unchecked by default', () => {
  render(<SummaryForm />);

  const agreeCheckbox = screen.getByRole('checkbox', { name: /terms and conditions/i, });
  expect(agreeCheckbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: "Confirm order" });
  expect(confirmButton).toBeDisabled();
});

test('Checking checkbox enables button on first click and disables button on second click', () => {
  render(<SummaryForm />);

  const agreeCheckbox = screen.getByRole('checkbox', { name: /terms and conditions/i, });
  const confirmButton = screen.getByRole('button', { name: "Confirm order" });

  fireEvent.click(agreeCheckbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(agreeCheckbox);
  expect(confirmButton).toBeDisabled();
});

