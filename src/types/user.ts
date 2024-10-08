export interface User {
  accessToken: string
  username: string
  email: string
  roles: []
  tokenType: string
}
export interface UserCredentials {
  username: string
  password: string
}

export interface DecodedUserFromToken extends User {
  aud: string
  exp: EpochTimeStamp
  iat: EpochTimeStamp
  iss: string
  nbf: EpochTimeStamp
}
