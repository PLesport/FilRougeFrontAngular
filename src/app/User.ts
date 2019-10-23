export class User {
     id: number;
     civility: string;
     firstName: string;
     lastName: string;
     adress: string;
     city: string;
     postalCode: string;
     phoneNumber: string;
     email: string;
     password: string;
     fidelityPoints: number;

     constructor(
      civility: string,
      firstName: string,
      lastname: string,
      adress: string,
      city: string,
      postalCode: string,
      phoneNumber: string,
      email: string,
      password: string,
      fidelityPoints: 0,
     ) {
       this.civility = civility;
       this.firstName = firstName;
       this.lastName = lastname;
       this.adress = adress;
       this.city = city;
       this.postalCode = postalCode;
       this.phoneNumber = phoneNumber;
       this.email = email;
       this.password = password;
       this.fidelityPoints = fidelityPoints;
     }
}

