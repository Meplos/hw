import fetchMock from "fetch-mock"
import { JobController } from "../src/JobController"
import "dotenv/config"

const apiUrl = "https://api.jobijoba.com/v3/fr/"
describe("JobController", () => {

	afterEach(() => {
		fetchMock.reset()
	})
	it("return jobs ", async () => {
		fetchMock.get(apiUrl + "ads/search?where=Bordeaux&page=1", {
			data: {
				ads: []
			}
		})
		const controller = new JobController()
		const response = await controller.getJobs()

		expect(response.jobs).toEqual([])

	})

	it("return job from api call", async () => {
		const mockedJobs = [
			{
				id: "1",
				jobtitle: "FullStack Dev",
				company: "Hello work",
				contractType: ["CDI"],
				salary: "42 000€",
				city: "Bordeaux",

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

		fetchMock.get(apiUrl + "ads/search?where=Bordeaux&page=1", {
			data: {
				ads: mockedJobs
			}
		})

		const controller = new JobController()
		const response = await controller.getJobs()

		expect(fetchMock.calls().length).toBe(1)
		expect(response.jobs).toEqual(mockedJobs)
	})

	it("return no job when receive 404", async () => {

		fetchMock.get(apiUrl + "ads/search?where=Bordeaux&page=1", 404)

		const controller = new JobController()
		const response = await controller.getJobs()

		expect(fetchMock.calls().length).toBe(1)
		expect(response.jobs).toEqual([])
	})



})
