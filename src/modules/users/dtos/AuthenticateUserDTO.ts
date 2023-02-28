export interface IAuthenticateUserDTO {
  login: string;
  password: string;
}

export interface IResponseDTO {
  user: {
    id: number;
    login: string;
  };
  token: string;
}
