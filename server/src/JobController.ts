interface JobListResponse {
	jobs: Job[]
	total: number

}

interface Job { }

export class JobController {

	private _token: String

	constructor(token: String = "") {
		this._token = token

	}
	async getJobs(page: number = 1, limit: number = 10): Promise<JobListResponse> {

		try {
			const params = new URLSearchParams({
				where: "Bordeaux",
				page: page.toString(),
				limit: limit.toString()
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
			return {
				jobs: body.data.ads,
				total: body.data.total
			}
		} catch {
			return { jobs: [], total: 0 }

		}
	}


}
