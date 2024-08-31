import { fireEvent, render, waitFor, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import App from "../src/App"
import React from "react"


describe('App', () => {
  it('render app', async () => {
    const { findByTestId } = render(<App />)
    const button = await waitFor(() => findByTestId("btn"))
    fireEvent.click(button, {})
    expect(button).toBeTruthy()
    const result = await waitFor(() => screen.findByText(/count is 1!/i))
    expect(result).toBeTruthy()

  })

})
