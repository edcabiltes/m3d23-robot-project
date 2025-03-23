import { VillageState } from "./models/villageState.js";
import { goalOrientedRobot } from "./robots/goalOrientedRobot.js";
import { randomRobot } from "./robots/randomRobot.js";
import { routeRobot } from "./robots/routeRobot.js";

function runRobot(state, robot, memory = []) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length === 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

console.log("RUNNING randomRobot");
runRobot(VillageState.random(), randomRobot);

console.log("RUNNING routeRobot");
runRobot(VillageState.random(), routeRobot);

console.log("RUNNING goalOrientedRobot");
runRobot(VillageState.random(), goalOrientedRobot);