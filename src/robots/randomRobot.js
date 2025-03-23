import { buildGraph } from "../utils/graph.js";
import { roads } from "../constants/roads.js";
import { randomPick } from "../models/villageState.js";

const roadGraph = buildGraph(roads);

export function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}