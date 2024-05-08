import { Client } from "../../../../shared/domain/entites/client";
import { SignInResponse } from "../../../../shared/domain/types/client_responses";

export interface IClientRepository{
    signIn(email: string, password: string): Promise<SignInResponse>;
    signUp(name: string, email: string, password: string, phone: string, cpf: string): Promise<Client>;
    updateName(newName: string): Promise<Client>;
}