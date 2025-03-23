import { buildGraph } from "../utils/graph.js";
import { roads } from "../constants/roads.js";

const roadGraph = buildGraph(roads);

export class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, address: p.address };
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }

    static random(parcelCount = 5) {
        let parcels = [];
        let places = Object.keys(roadGraph);

        for (let i = 0; i < parcelCount; i++) {
            let address = randomPick(places);
            let place;
            do {
                place = randomPick(places);
            } while (place == address);
            parcels.push({ place, address });
        }
        return new VillageState("Post Office", parcels);
    }
};

export function randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
}


// let first = new VillageState(
//     "Post Office",
//     [{ place: "Post Office", address: "Alice's House" }]
// );

// let next = first.move("Alice's House");

// console.log(next.place);
// // → Alice's House
// console.log(next.parcels);
// // → []
// console.log(first.place);
// // → Post Office