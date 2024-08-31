import React from "react"
import { render, act, screen, } from "@testing-library/react"
import { afterEach, describe, expect, it, vi, } from "vitest"
import JobList from "../src/JobList"


const mockjobs = [
  {
    id: "1",
    jobtitle: "FullStack Dev",
    company: "Hello work",
    contractType: ["CDI"],
    salary: "42 000€",
    city: "Bordeaux"
  },
  {
    id: "2",
    jobtitle: "Nurse",
    company: "CHU - Bordeaux",
    contractType: ["Stage"],
    salary: "28 000€",
    city: "Mérignac"
  },
]



afterEach(() => {
  vi.clearAllMocks()

})


describe('JobiJobaApp', () => {
  it("Render a job list component", async () => {
    const { container } = await act(async () => render(<JobList items={[]} />))
    expect(container).to.be.toBeTruthy()
  })

  it("display error when no job available", async () => {
    const { container } = await act(async () => render(<JobList items={[]} />))
    const jobs = container.querySelectorAll(".job-item")
    expect(jobs.length).toBe(0)
    expect(container.querySelector(".error")).toBeTruthy()
  })

  it("display job of first page when job available", async () => {
    const { container } = await act(async () => render(<JobList items={mockjobs} />))
    const jobs = container.querySelectorAll(".job-item")
    expect(jobs.length).toBe(2)
    expect(container.querySelector(".error")).toBeFalsy()
  })

  it("display basic job info", async () => {
    await act(async () => render(<JobList items={mockjobs} />))
    mockjobs.forEach((data) => {
      expect(screen.getByText(data.jobtitle)).toBeInTheDocument()
      expect(screen.getByText(data.company)).toBeInTheDocument()
      expect(screen.getByText(data.salary)).toBeInTheDocument()
      expect(screen.getByText(data.city)).toBeInTheDocument()
      data.contractType.forEach(type => {
        expect(screen.getByText(type)).toBeInTheDocument()
      })
    });

  });

  it("call jobSelectedCallback with jobInfo when an item is click and set it selected", async () => {
    const spy = vi.fn()
    await act(async () => render(<JobList items={mockjobs} onJobSelectedCallback={spy} />))
    const target = screen.getByText(mockjobs[0].jobtitle).parentElement
    act(() => target?.click())
    expect(spy).toHaveBeenCalledOnce()
    expect(spy).toBeCalledWith(mockjobs[0])
    expect(target?.classList).toContain("selected")
  });

})

