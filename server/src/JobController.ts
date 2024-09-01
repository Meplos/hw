interface JobListResponse {
	jobs: Job[]

}

interface Job { }

export class JobController {

	private _token: String

	constructor(token: String = "") {
		this._token = token

	}
	async getJobs(page: number = 1): Promise<JobListResponse> {
		console.log("page", page)

		try {
			const params = new URLSearchParams({
				where: "Bordeaux",
				page: page.toString()
			})

			const response = await fetch(`${process.env.API_URL}ads/search?${params.toString()}`, {
				method: "GET",
				headers: {
					"Content-type": "application/json",
					"Authorization": "bearer " + this._token
				},
				mode: "cors",
			})

			const body = await response.json()
			console.log(body)
			return {
				jobs: body.data.ads
			}
		} catch {
			return { jobs: [] }

		}
	}


}
