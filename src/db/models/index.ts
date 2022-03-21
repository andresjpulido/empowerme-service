import { model } from "mongoose";
import UserSchema from "./userSchema";
import ProgressionSchema from "./progressionSchema";
import ActivitySchema from "./activitySchema";
import activitySchema from "./activitySchema";

const userModel = model("User", UserSchema);
const progressionModel = model("Progression", ProgressionSchema);
const activityModel = model("Activity", activitySchema);

export { userModel, progressionModel, activityModel };
