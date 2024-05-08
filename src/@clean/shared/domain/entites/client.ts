export type JsonClientProps = {
    Name: string;
    Email: string;
    Password: string;
    Phone: string;
    Cpf: string;
}

export type ClientProps = {
    name: string;
    email: string;
    password: string;
    phone: string;
    cpf: string;
}

export class Client {
    constructor(public props: ClientProps) {
        this.props.cpf = this.cpf
        this.props.email = this.email
        this.props.name = this.name
        this.props.password = this.name
        this.props.phone = this.phone
    }

    static fromJson(json: JsonClientProps){
        return new Client({
            name: json.Name,
            email: json.Email,
            password: json.Password,
            phone: json.Phone,
            cpf: json.Cpf
        })
    }

    get email() {
        return this.props.email;
    }

    set setEmail(email: string) {
        this.props.email = email
    }
    
    get password() {
        return this.props.password;
    }

    set setPassword(password: string) {
        this.props.password = password
    }

    get name() {
        return this.props.name;
    }
    
    set setName(name: string) {
        this.props.name = name
    }

    get phone() {
        return this.props.phone;
    }
    
    set setPhone(phone: string) {
        this.props.phone = phone
    }

    get cpf() {
        return this.props.cpf;
    }

    set setCpf(cpf: string) {
        this.props.cpf = cpf
    }
    
}

