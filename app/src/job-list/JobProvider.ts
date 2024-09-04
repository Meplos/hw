import { Job } from "../model/Job";

export interface JobProvider {
	find: (page: number) => Promise<Job[]>
	getMaxPage: () => number
}


interface JobListResponse {
	total: number,
	jobs: Job[]
}

export class JobProviderImpl implements JobProvider {
	_total: number = 0
	_pageSize: number
	constructor(maxSize: number = 10) {
		this._pageSize = maxSize
	}
	async find(page: number = 1) {
		let jobs: Job[] = [];
		try {
			const params = new URLSearchParams({ page: page.toString(), size: this._pageSize.toString() })
			const response = await fetch(`http://localhost:3000/jobs?${params.toString()}`, {
				method: "GET",
				mode: "cors"
			})
			const body = await response.json();
			jobs = (body as JobListResponse).jobs ?? []
			this._total = (body as JobListResponse).total
		} catch (e) {
			console.error(e)
		}
		return jobs;
	}

	getMaxPage(): number {
		return Math.ceil(this._total / this._pageSize)

	}
}
