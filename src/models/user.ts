export interface User {
  id: number
  email: string
  name?: string
  phone?: string
  cpf?: string
  english: boolean
  spanish: boolean
  created_at: Date
}
