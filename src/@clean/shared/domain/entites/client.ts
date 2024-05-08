export type JsonClientSignInProps = {
    token: string;
    message: string;
}

export type ClientSignInProps = {
    name: string;
    email: string;
    password: string;
    phone: string;
    cpf: string;
}


export class Client {
    constructor(public props: ClientSignInProps) {
        if (!Client.validateEmail(props.email)) {
            throw new Error('Email invalido')
        }
        this.props.email = props.email

        if (!Client.validatePassword(props.password)) {
            throw new Error('Senha invalida')
        }
        this.props.password = props.password

        if (!Client.validateName(props.name)) {
            throw new Error('Nome invalida')
        }
        this.props.password = props.password

        if (!Client.validatePhone(props.phone)) {
            throw new Error('Phone invalida')
        }
        this.props.password = props.password


        if (!Client.validateCpf(props.cpf)) {
            throw new Error('Cpf invalida')
        }
        this.props.password = props.cpf
    }



    get email() {
        return this.props.email;
    }

    set setEmail(email: string) {
        if (!Client.validateEmail(email)) {
            throw new Error('Email inválido')
        }
        this.props.email = email
    }
    
    get password() {
        return this.props.password;
    }

    set setPassword(password: string) {
        if (!Client.validatePassword(password)) {
            throw new Error('Senha Inválida')
          }
          this.props.password = password
    }

    get name() {
        return this.props.name;
    }
    
    set setName(name: string) {
        if (!Client.validateName(name)) {
            throw new Error('Nome inválido')
        }
        this.props.name = name
    }

    get phone() {
        return this.props.phone;
    }
    
    set setPhone(phone: string) {
        if (!Client.validatePhone(phone)) {
            throw new Error('Telefone inválido')
        }
        this.props.phone = phone
    }

    get cpf() {
        return this.props.cpf;
    }

    set setCpf(cpf: string) {
        if (!Client.validateCpf(cpf)) {
            throw new Error('CPF inválido')
        }
        this.props.cpf = cpf
    }

    static validateName(name: string): boolean {
        if (name == null) {
            return false
        }
        if (typeof (name) != 'string') {
            return false
        }

        return true
    }
    

    static validateEmail(email: string): boolean {
        const regexp = '(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$)'

        if (email == null) {
            return false
        }
        if (typeof (email) != 'string') {
            return false
        }
        if (!email.match(regexp)) {
            return false
        }
        return true
    }

    static validatePassword(password?: string): boolean {
        const regexp = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'
    
        if (password == null || password == undefined) {
          return false
        } 
        if (typeof(password) != 'string') {
          return false
        } 
        if (password.length < 6) {
          return false
        } 
        if (!password.match(regexp)) {
          return false
        }
        return true
      }

      static validatePhone(phone: string): boolean {
        const regexp = '/^\([1-9]{2}\) [2-9][0-9]{3,4}-[0-9]{4}$/'

        if (phone == null) {
            return false
        }
        if (typeof (phone) != 'string') {
            return false
        }

        if (!phone.match(regexp)) {
            return false
          }

        return true
    }

    static validateCpf(cpf: string): boolean {
        const regexp = '/^\d{3}\.\d{3}\.\d{3}-\d{2}$/'

        if (cpf == null) {
            return false
        }
        if (typeof (cpf) != 'string') {
            return false
        }

        if (!cpf.match(regexp)) {
            return false
          }

        return true
    }
    

}

