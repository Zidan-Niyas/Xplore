import { eventData } from "./eventData.js";
import { workshopData } from "./eventData.js";
import { culturalEventData } from "./eventData.js";
import { competitionData } from "./eventData.js";

export const AllEvents = [...eventData, ...workshopData, ...culturalEventData, ...competitionData];

