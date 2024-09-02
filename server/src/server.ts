import Koa from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"
import json from "koa-json"
import cors from "koa-cors"
import serve from "koa-static"
import mount from "koa-mount"
import "dotenv/config"
import { JobController } from "./JobController"
import path from "path"


init()


async function init() {
	try {
		const token = await login()
		const app = new Koa()
		const router = new Router()

		router.get("/jobs", async (ctx) => {
			const pageQuery = ctx.request.query.page
			const limitQuery = ctx.request.query.limit
			let page = 1
			let limit = 10
			if (pageQuery) {
				page = parseInt(pageQuery as string)
			}
			if (limitQuery) {
				limit = parseInt(limitQuery as string)
			}
			const controller = new JobController(token)
			const response = await controller.getJobs(page, limit)
			console.log(response)
			ctx.type = "application/json"
			ctx.body = response
		})

		router.get("/redirect", async (ctx) => {

			const { url } = ctx.request.query

			if (!Array.isArray(url)) {
				const urlRedirect = new URL(url as string)
				ctx.status = 301
				ctx.redirect(urlRedirect.toString())
				return
			}
			ctx.status = 400
			return
		})

		app
			.use(cors())
			.use(bodyParser())
			.use(json())
			.use(mount("/public", serve(path.join(__dirname, '/public'))))
			.use(mount("/assets", serve(path.join(__dirname, '/public', "/assets"))))
			.use(router.routes())
			.use(router.allowedMethods());

		app.listen(3000, () => {
			console.log("Koa started! listening on port 3000")
			console.log("Serving file of : ", path.join(__dirname, "/public"), "on : http://localhost:3000/public")
		}
		)
	} catch (e) {
		console.error("Fail to start server", e)
	}

}

async function login(): Promise<String> {
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


