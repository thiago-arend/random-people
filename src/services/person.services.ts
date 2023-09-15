import { errors } from "@/errors/errors";
import { Person } from "@/protocols/protocols";
import { personRepository } from "@/repositories/person.repositories";

async function get(): Promise<Person | void> {
    const peopleQuantity = await personRepository.getCount();
    if (peopleQuantity === 0) throw errors.databaseNotPopulated();

    const randomId = getRandomIntInclusive(1, peopleQuantity);
    const randomPerson = await personRepository.getById(randomId);

    return randomPerson;
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const personService = { get };