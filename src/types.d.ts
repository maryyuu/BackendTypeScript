export type level = 'Hard'| 'Medium'| 'Easy'

export interface Nivel {
    id: number,
    name: string,
    date: string,
    level: string,
    description: string
}