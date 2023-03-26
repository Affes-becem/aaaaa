export class UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export class User {
  id: string;
  username: string;
  password: string;
  userDetails: UserDetails;
  token: string;
  role: string ;
}
