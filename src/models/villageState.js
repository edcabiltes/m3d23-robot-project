import { buildGraph } from "../utils/graph.js";
import { roads } from "../constants/roads.js";

const roadGraph = buildGraph(roads);

console.log(roadGraph);