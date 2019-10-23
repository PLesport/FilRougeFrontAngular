export class User {
     id: number;
     civility: string;
     firstName: string;
     lastName: string;
     adresse: string;
     city: string;
     postalCode: string;
     phoneNumber: string;
     email: string;
     password: string;
     fidelityPoint: number;

     constructor(
      civility: string,
      firstName: string,
      lastname: string,
      adresse: string,
      city: string,
      postalCode: string,
      phoneNumber: string,
      email: string,
      password: string,
      fidelityPoint: number,
     ) {
       this.civility = civility;
       this.firstName = firstName;
       this.lastName = lastname;
       this.adresse = adresse;
       this.city = city;
       this.postalCode = postalCode;
       this.phoneNumber = phoneNumber;
       this.email = email;
       this.password = password;
       this.fidelityPoint = fidelityPoint;
     }
}

