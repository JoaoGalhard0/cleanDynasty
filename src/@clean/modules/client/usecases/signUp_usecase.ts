import { Client } from "../../../shared/domain/entites/client";
import { IClientRepository } from "../domain/repositories/client_repository_interface";

export class SignUpUseCase {
    constructor(private repo: IClientRepository) {}

    async execute(name: string, email: string, password: string, phone: string, cpf: string) {

        const response = await this.repo.signUp(name, email, password, phone, cpf)
        return response
    }
}