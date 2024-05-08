import { AxiosInstance } from "axios";
import { IClientRepository } from "../../../modules/client/domain/repositories/client_repository_interface";
import { Client, JsonClientProps } from "../../domain/entites/client";
import { decorate, injectable } from "inversify";
import { SignInResponse } from "../../domain/types/client_responses";

export class ClientRepositoryHttp implements IClientRepository {
    constructor(private readonly httpClient: AxiosInstance) { }

    async signIn(email: string, password: string): Promise<SignInResponse> {
        try {
            const response = await this.httpClient.post<SignInResponse>('/client', { email, password })
            return response.data
                
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async signUp(name: string, phone: string, cpf:string, email: string, password: string): Promise<Client> {
        try {
            const response = await this.httpClient.post<JsonClientProps>('/client', { name, phone, cpf, email, password })
            const client = Client.fromJson(response.data)
            return client

        } catch (error: any) {
            throw new Error(error)
        }
    }

    async updateName(newName: string): Promise<Client> {
        try{
            const response = await this.httpClient.post<JsonClientProps>('/client', {newName})
            const client = Client.fromJson(response.data)
            return client
            
        } catch (error: any){
            throw new Error(error)
        }
    }
}

decorate(injectable(), ClientRepositoryHttp);