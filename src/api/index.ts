import { Router } from "express";
import auth from "./routers/auth";
import user from "./routers/user";
import progressions from "./routers/progressions";
import activity from "./routers/activity";

export default () => {
	const app = Router();

	user(app);
	progressions(app);
	activity(app);

	return app;
};
