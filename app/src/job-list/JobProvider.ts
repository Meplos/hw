import { Job } from "../model/Job";

export interface JobProvider {
	find: () => Promise<Job[]>
}


interface JobListResponse {
	page: number,
	total: number,
	jobs: Job[]
}


export class JobProviderImpl implements JobProvider {
	constructor() { }
	async find() {
		let jobs: Job[] = [];
		try {
			const response = await fetch("http://localhost:3000/jobs", {
				method: "GET",
				mode: "cors"
			})
			const body = await response.json();
			jobs = (body as JobListResponse).jobs ?? []
		} catch (e) {
			console.error(e)
		}
		return jobs;
	}
}
