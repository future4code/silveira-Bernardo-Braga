import { connection } from "./connection"

export default async function selectAllUsers(): Promise<any> {
  const result = await connection('aula49_exercicio').where({ type: "CX" })

  //   .raw(`
  //     SELECT id, name, email, type
  //     FROM aula49_exercicio;
  //  `)

  return result
}