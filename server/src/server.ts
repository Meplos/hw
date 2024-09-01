import Koa from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"
import json from "koa-json"
import cors from "koa-cors"
import "dotenv/config"
import { JobController } from "./JobController"


init()


async function init() {

	try {
		const token = await login()
		const app = new Koa()
		const router = new Router()

		router.get("/jobs", async (ctx) => {
			const pageQuery = ctx.request.query.page
			let page = 1
			if (pageQuery) {
				page = parseInt(pageQuery as string)
			}
			const controller = new JobController(token)
			const response = await controller.getJobs(page)
			console.log(response)
			ctx.type = "application/json"
			ctx.body = response
		})

		app
			.use(cors())
			.use(bodyParser())
			.use(json())
			.use(router.routes())
			.use(router.allowedMethods());

		app.listen(3000, () => console.log("Koa started! listening on port 3000"))
	} catch (e) {
		console.error("Fail to start server", e)
	}

}


async function login(): Promise<String> {
	console.log("login", process.env.CLIENT_ID)

	try {
		const response = await fetch(process.env.API_URL + "login",
			{
				method: "POST",
				mode: "cors",
				body: JSON.stringify({
					"client_id": process.env.CLIENT_ID,
					"client_secret": process.env.CLIENT_SECRET

				})

			}

		)
		const body = await response.json()

		return body.token
	} catch (e) {
		console.error(e)
		console.log("unable to connect to jobijoba")
		throw new Error("Unable to connect")
	}

}


