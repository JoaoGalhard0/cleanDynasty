import { Client } from "../../../shared/domain/entites/client";
import { IClientRepository } from "../domain/repositories/client_repository_interface";

export class SingUpUseCase {
    constructor(private repo: IClientRepository) {}

    async execute(name: string, email: string, password: string, phone: string, cpf: string) {
        if(!Client.validateEmail(email) ) {
            throw new Error('Email invalido')
        }

        if(!Client.validatePassword(password) ) {
            throw new Error('Senha invalida')
        }

        if (!Client.validateName(name)) {
            throw new Error('Nome invalida')
        }

        if (!Client.validatePhone(phone)) {
            throw new Error('Phone invalida')
        }

        if (!Client.validateCpf(cpf)) {
            throw new Error('Cpf invalida')
        }

        const response = await this.repo.signUp(name, email, password, phone, cpf)
        return response
    }
}