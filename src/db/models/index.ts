import { model } from "mongoose";
import UserSchema from "./userSchema";
import ProgressionSchema from "./progressionSchema";
import activitySchema from "./activitySchema";
import topicSchema from "./topicSchema";

const userModel = model("User", UserSchema);
const progressionModel = model("Progression", ProgressionSchema);
const activityModel = model("Activity", activitySchema);
const topicModel = model("Topic", topicSchema);

export { userModel, progressionModel, activityModel, topicModel };
