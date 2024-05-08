import 'reflect-metadata'
import { Container } from "inversify";
import { SignInUseCase } from "../../../modules/client/usecases/signIn_usecase";
import { httpClient } from '../http';
import { ClientRepositoryHttp } from '../repositories/client_repository_http';
import { STAGE } from '../../domain/enum/stage_enum';


export const RegistryClient = {
    AxiosAdapter: Symbol.for('AxiosAdapter'),
    ClientRepositoryHttp: Symbol.for('ClientRepositoryHttp'),
    SignInUseCase: Symbol.for('SignInUseCase'),
    SignUpUseCase: Symbol.for('SignUpUseCase')
}

export const containerClient = new Container()

containerClient.bind(RegistryClient.AxiosAdapter).toConstantValue(httpClient)

containerClient.bind(RegistryClient.ClientRepositoryHttp)
  .toDynamicValue((context) => {
    return new ClientRepositoryHttp(context.container.get(RegistryClient.AxiosAdapter))
  })

  containerClient.bind(RegistryClient.SignInUseCase)
  .toDynamicValue((context) => {
    if (import.meta.env.VITE_STAGE === STAGE.TEST) {
      throw new Error('Invalid stage')
    } else if (import.meta.env.VITE_STAGE === STAGE.DEV || import.meta.env.VITE_STAGE === STAGE.PROD) {
      return new SignInUseCase(context.container.get(RegistryClient.ClientRepositoryHttp))
    } else {
      throw new Error('Invalid stage')
    }
  })

  containerClient.bind(RegistryClient.SignUpUseCase)
  .toDynamicValue((context) => {
    if (import.meta.env.VITE_STAGE === STAGE.TEST) {
      throw new Error('Invalid stage')
    } else if (import.meta.env.VITE_STAGE === STAGE.DEV || import.meta.env.VITE_STAGE === STAGE.PROD) {
      return new SignInUseCase(context.container.get(RegistryClient.ClientRepositoryHttp))
    } else {
      throw new Error('Invalid stage')
    }
  })