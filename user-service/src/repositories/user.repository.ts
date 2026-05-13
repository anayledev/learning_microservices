import { User } from "@/generated/prisma/client.ts"
import { UserCreateInput } from "@/generated/prisma/models.ts"
import { IUserRepository } from "@/repositories/IUserRepository.ts"
import { prisma } from "@/lib/prisma.ts"

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }
  async create(data: UserCreateInput): Promise<User> {
    const user = await prisma.user.create({
      data,
    })
    return user
  }
}
