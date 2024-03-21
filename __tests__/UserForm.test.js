import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import UrlHome from '../src/Url/page'

test('it renders 1 input fields on the screen', () => {
  // 1. Render the component
  render(<UrlHome />)

  // Manipulate the HTML document
  const inputFields = screen.getAllByRole('textbox')
  // Assertions
  expect(inputFields).toHaveLength(1)
})

test('it calls the onUserAdd function with proper arguments upon form submission', async () => {
  const mockSubmitter = jest.fn()
  // 1. render the userform component
  render(<UrlHome onUserAdd={mockSubmitter} />)


})
