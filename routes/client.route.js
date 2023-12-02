import { Router } from "express";

import { getAllClients, getClientById, updateClient, deleteClient, createClient, connectionClient } from "../controllers/client.controller.js";
const routerClient = Router()

routerClient.get("/", getAllClients)
routerClient.get("/:id", getClientById)
routerClient.post("/", createClient)
routerClient.put("/:id", updateClient)
routerClient.delete("/:id", deleteClient)
routerClient.get("/:courriel/:password", connectionClient)

export default routerClient