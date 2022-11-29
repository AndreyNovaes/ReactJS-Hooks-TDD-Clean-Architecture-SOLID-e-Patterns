import { AccountModel } from '@/domain/model/account-model';

export type AuthenticationParams = {
  email: string;
  password: string;
};

// é uma abstração, precisamos de uma classe
// que implemente essa interface  que precisa
// ter um método auth, com entrada e saída definidas pelo tipo

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
