import { db } from "@/database/database.connection";
import { Count, Person } from "@/protocols/protocols";

async function getById(id: number): Promise<Person> {
    const person = await db.query<Person>(`SELECT * FROM people WHERE id=$1;`, [id]);
    
    return person.rows[0];
}

async function getCount(): Promise<number> {
    const result = await db.query<Count>(`SELECT COUNT(*) FROM people;`);
    
    return result.rows[0].count;
}

export const personRepository = { getById, getCount };