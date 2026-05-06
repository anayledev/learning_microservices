import bcrypt from "bcryptjs"
import type { User } from "@/generated/prisma/client.ts"

interface RegisterServiceRequest {
  name: string
  email: string
  password: string
}

interface RegisterServiceResponse {
  user: User
}

export class RegisterService {
  constructor(private readonly userRepository: any) {}

  async execute({ name, email, password }: RegisterServiceRequest): Promise<RegisterServiceResponse> {
    //verificar se ja existe usuario com o email informado

    const doesUserExistsWithEmail = await this.userRepository.findByEmail(email)
    if (doesUserExistsWithEmail) {
      throw new Error("Usuário ja existe com esse email")
    }
    const passwordHashed =
  }
}
