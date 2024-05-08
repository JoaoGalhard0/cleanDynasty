import { IClientRepository } from "../domain/repositories/client_repository_interface";

export class UpdateNameUseCase{
    constructor(private repo: IClientRepository){

    }

    async execute(newName: string){
        const client = await this.repo.updateName(newName);
        return client;
    }
}