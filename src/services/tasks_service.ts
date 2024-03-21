import taskService from "./task.json"
import { Nivel } from "../types";

const task : Array<Nivel> = taskService  as Array<Nivel>;

export const getEntries = () => task;   
