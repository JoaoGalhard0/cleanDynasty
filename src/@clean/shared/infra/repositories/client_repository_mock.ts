import { IClientRepository } from "../../../modules/client/domain/repositories/client_repository_interface";
import { Client } from "../../domain/entites/client";
import { SignInResponse } from "../../domain/types/client_responses";

export class ClientRepositoryMock implements IClientRepository{
    private Clients: Client[] = [
        new Client({
            name: "aasd",
            cpf: "283761873",
            email: "email",
            password: "123",
            phone: "1237856"
        })
    ]
    async signIn(email: string, password: string): Promise<SignInResponse> {
        return {
            token: "asd",
            message: "asihjdg"
        }
    }
    async signUp(name: string, email: string, password: string, phone: string, cpf: string): Promise<Client> {
        return new Client ({
            name: "aasd",
            cpf: "283761873",
            email: "email",
            password: "123",
            phone: "1237856"
        })
    }
    async updateName(newName: string): Promise<Client> {
        return new Client({
            name: "aasd",
            cpf: "283761873",
            email: "email",
            password: "123",
            phone: "1237856"
        })
    }
}