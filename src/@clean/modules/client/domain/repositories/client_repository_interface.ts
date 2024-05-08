export interface IClientRepository{
    signIn(email: string, password: string): Promise<{}>;
    signUp(name: string, email: string, password: string, phone: string, cpf: string): Promise<{}>;
}