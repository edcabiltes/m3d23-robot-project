import { VillageState } from "./models/villageState.js";
import { randomRobot } from "./robots/randomRobot.js";

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

console.log("Running randomRobot");
runRobot(VillageState.random(), randomRobot);