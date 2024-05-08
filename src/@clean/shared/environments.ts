import { IClientRepository } from "../modules/client/domain/repositories/client_repository_interface"
import { STAGE } from "./domain/enum/stage_enum"
import { httpClient } from "./infra/http"
import { ClientRepositoryHttp } from "./infra/repositories/client_repository_http"
import { ClientRepositoryMock } from "./infra/repositories/client_repository_mock"

export class Environments {
    stage: STAGE = STAGE.TEST

    configureLocal() {
        import.meta.env.STAGE = import.meta.env.STAGE || 'TEST'
    }

    loadEnvs() {
        if (!import.meta.env.STAGE) {
            this.configureLocal()
        }

        this.stage = import.meta.env.STAGE as STAGE
    }

    static getClientRepo(): IClientRepository {

        if (Environments.getEnvs().stage === STAGE.TEST) {
            return new ClientRepositoryMock()
        } else if (Environments.getEnvs().stage === STAGE.DEV || Environments.getEnvs().stage === STAGE.PROD) {
            return new ClientRepositoryHttp(httpClient)
        } else {
            throw new Error('Invalid STAGE')
        }
    }

    static getEnvs() {
        const envs = new Environments()
        envs.loadEnvs()
        return envs
    }
}