import { AxiosInstance } from "axios";
import { IClientRepository } from "../../../modules/client/domain/repositories/client_repository_interface";
import { JsonClientSignInProps } from "../../domain/entites/client";
import { decorate, injectable } from "inversify";


export class ClientRepositoryHttp implements IClientRepository {
    constructor(private readonly httpClient: AxiosInstance) { }

    async signIn(email: string, password: string): Promise<{}> {
        try {
            const response = await this.httpClient.post<JsonClientSignInProps>('/client', { email, password })
            if (response.status === 200) {
                return response.data.token
            }  
            return ''    
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async signUp(name: string, phone: string, cpf:string, email: string, password: string): Promise<{}> {
        try {
            const response = await this.httpClient.post<JsonClientSignInProps>('/client', { name, phone, cpf, email, password })
            if (response.status === 201) {
                return response.data
            }  
            return ''    
        } catch (error: any) {
            throw new Error(error)
        }
    }
}

decorate(injectable(), ClientRepositoryHttp);