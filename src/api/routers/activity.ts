import { Router, Request, Response } from "express";
import activitiesService from "../../services/activitiesService";
import { Container } from "typedi";

const auth = require("../middlewares/auth");
const route = Router();

export default (app) => {
	app.get("/activities", async (req, res, next) => {
		let queryObj = req.query;
		if (typeof queryObj !== "object") queryObj = {};
		const serviceInstance = Container.get(activitiesService);
		let list = [];
		list = await serviceInstance.get(queryObj);
		if (list.length == 0) res.status(404).end();
		return res.json(list);
	});
	app.get("/activities/:id", async (req, res, next) => {
		//Validate params
		const id = req.params.id;
		let queryObj = { _id: id };
		const serviceInstance = Container.get(activitiesService);
		let list = [];
		list = await serviceInstance.get(queryObj);
		if (list.length == 0) res.status(404).end();
		return res.json(list[0]);
	});
	app.put("/activities/:id", async (req, res, next) => {
		//Validate params
		const id = req.params.id;

		const serviceInstance = Container.get(activitiesService);
		let list = [];

		list = await serviceInstance.update(id, req.body);

		return res.json(list);
	});
	app.post("/activities", async (req, res, next) => {
		//Validate params

		let activity = req.body;

		if (
			activity.title === undefined ||
			activity.latitude === undefined ||
			activity.longitude === undefined ||
			activity.url === undefined ||
			activity.description === undefined
		)
			res.status(400).end();

		const serviceInstance = Container.get(activitiesService);
		let list = [];
		list = await serviceInstance.create(activity);

		return res.json(list);
	});
	app.delete("/activities/:id", async (req, res, next) => {
		//Validate params
		const id = req.params.id;

		const serviceInstance = Container.get(activitiesService);
		 
		let obj = await serviceInstance.delete(id);
		 
		if (!obj) return res.status(404).end();
		return res.json(id);
	});
};
