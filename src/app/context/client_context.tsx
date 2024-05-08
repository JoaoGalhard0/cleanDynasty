import { PropsWithChildren, createContext } from "react"
import { Client } from "../../@clean/shared/domain/entites/client"
import { Environments } from "../../@clean/shared/environments"
import { SignUpUseCase } from "../../@clean/modules/client/usecases/signUp_usecase"
import { SignInUseCase } from "../../@clean/modules/client/usecases/signIn_usecase"
import { UpdateNameUseCase } from "../../@clean/modules/client/usecases/update_name_usecase"

export type ClientContextType = {
    signIn: (email: string, password: string) => Promise<string | undefined>
    signUp: (name: string, email: string, password: string, phone: string, cpf: string) => Promise<Client | undefined>
    updateName: (newName: string) => Promise<Client | undefined>
}

const defaultClientContext: ClientContextType = {
  signIn: async (email: string, password: string) => {
    return undefined
  },

  signUp: async (name: string, email: string, password: string, phone: string, cpf: string) => {
    return undefined
  },

  updateName: async(newName: string) => {
    return undefined
  }
}

export const ClientContext = createContext(defaultClientContext)

const repo = Environments.getClientRepo();

const signInUsecase = new SignInUseCase(repo)

const signUpUsecase = new SignUpUseCase(repo)

const updateNameUsecase = new UpdateNameUseCase(repo)

export function ClientContextProvider({ children }: PropsWithChildren) {

  async function signIn(email: string, password: string) {
    try {
      const { token } = await signInUsecase.execute(email, password)
      localStorage.setItem('token', token)

      return token
    } catch (error: any) {
      console.error('Something went wrong with login: ',error)
    }
  }

  async function signUp(name: string, email: string, password: string, phone: string, cpf: string) {
    try{
        const client = await signUpUsecase.execute(name, email, password, phone, cpf)

        return client
    } catch (error: any){
        console.error("fodace", error)
    }
  }

  async function updateName(newName: string) {
    try{
        const client = await updateNameUsecase.execute(newName)

        return client
    } catch (error: any){
        console.error("fodace 2.0", error)
        
    }
  }
  
  return (
    <ClientContext.Provider value={{ signIn, signUp, updateName }}>
      {children}
    </ClientContext.Provider>
  )

}
