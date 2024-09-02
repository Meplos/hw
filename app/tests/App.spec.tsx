import React from "react"
import { render, act, screen } from "@testing-library/react"
import { describe, expect, it, vi, } from "vitest"
import App from "../src/App"

const mockdata = [
  {
    "id": "1",
    "link": "http://goto.dev/kdlsfj",
    "title": "FS dev HF",
    "description": "Lorem ipsum",
    "publicationDate": "10-02-2024",
    "coordinates": "12.00,-23.09",
    "city": "Bordeaux",
    "postalCode": "33000",
    "department": "Gironde",
    "region": "Nouvelle-Aquitaine",
    "sector": "IT",
    "jobtitle": "Developer FullStack",
    "company": "Hello Work",
    "contractType": ["CDI"],
    "salary": "42 000€"
  }, {
    id: "2",
    "title": "Senior nurse",
    jobtitle: "Nurse",
    company: "CHU - Bordeaux",
    contractType: ["Stage"],
    salary: "28 000€",
    city: "Mérignac",
    description: "This job is the seconde of the list"
  },
]

const provider = {
  find: async () => mockdata,
  getMaxPage: () => 1
}
describe("App Test", () => {

  it("display the first item of the list when nothing is done", async () => {
    const { getByTestId } = await act(async () => await render(<App provider={provider} />))
    const detailComponent = screen.getByTestId("job-detail")

    expect(detailComponent).toBeInTheDocument()
    expect(detailComponent.querySelector(".title")?.textContent).toBe(mockdata[0].title)
    expect(detailComponent.querySelector(".salary")?.textContent).toBe(mockdata[0].salary)
    expect(detailComponent.querySelector(".description")?.textContent).toBe(mockdata[0].description)
    expect(detailComponent.querySelector(".city")?.textContent).toBe(mockdata[0].city)
    expect(detailComponent.querySelector(".postalCode")?.textContent).toBe(mockdata[0].postalCode)
    expect(detailComponent.querySelector(".sector")?.textContent).toBe(mockdata[0].sector)
    expect(detailComponent.querySelector(".company")?.textContent).toBe(mockdata[0].company)
    expect(detailComponent.querySelector(".salary")?.textContent).toBe(mockdata[0].salary)
  })


  //TODO: Click on second item and check second detail are display

  //TODO: check click in link detail button to redirect user

  //TODO: Persist state in localstorage and use it when app is mount


})
