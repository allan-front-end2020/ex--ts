interface userProps{
    firtsName: string,
    lastName:  string,
    username : string,
    email: string,
    password: string,
    cpf: string,
    contact: string,
    isAdmin: string,
}
class user implements userProps{

    firtsName: string
    lastName:  string
    username:  string
    email: string
    password: string
    cpf: string
    contact: string
    isAdmin: string


    constructor(
        firtsName: string,
        lastName:  string,
        username : string,
        email: string,
        password: string,
        cpf: string,
        contact: string,
        isAdmin: string)
        
        {
       this.firtsName = firtsName
       this.lastName = lastName
       this.username = username
       this.email = email
       this.password = password
       this.cpf = cpf
       this.contact = contact
       this.isAdmin = isAdmin }

       public getfirtsName () : string{
           return this.firtsName
       }
       
     
       public getlastName() : string{
        return this.lastName
       }


       public username() : string{
         return this.username
      }

        public email() : string{
        return this.email

    }
        public password () : string{
            return this.password
        }
        public cpf () : string{
            return this.cpf
        }
        
        public contact() : string{
            return this.contact
        }

        public isAdmin () : string{
            return this.isAdmin
        }

}

