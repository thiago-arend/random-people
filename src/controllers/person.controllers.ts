import { Request, Response } from "express";
import httpStatus from "http-status";
import { personService } from "@/services/person.services";

async function get(req: Request, res: Response): Promise<void> {
    const person = await personService.get();

    res.status(httpStatus.OK).send(person);
}

export const personController = { get };