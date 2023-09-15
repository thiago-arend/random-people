import { db } from "@/database/database.connection";
import { Person } from "@/protocols/protocols";
import { QueryResultRow } from "pg";

async function getById(id: number): Promise<Person> {
    const person = await db.query<Person>(`SELECT * FROM people WHERE id=$1;`, [id]);
    
    return person.rows[0];
}

async function getCount(): Promise<number> {
    const result = await db.query<QueryResultRow>(`SELECT COUNT(*) FROM people;`);
    const count = Number(result.rows[0].count);

    return count;
}

export const personRepository = { getById, getCount };