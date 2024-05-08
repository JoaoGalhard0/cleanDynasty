import { Client } from "../../../shared/domain/entites/client";
import { IClientRepository } from "../domain/repositories/client_repository_interface";

export class SignInUseCase{ 
    constructor(private repo: IClientRepository) {}

    async execute(email: string, password: string) {

        const token = await this.repo.signIn(email, password)

        return token
    }   
}