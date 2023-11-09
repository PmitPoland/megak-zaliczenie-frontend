export interface UserEntity {
    idUser: string;
    nameUser: string;
    emailUser: string;
    phoneUser: string;
    noteUser: string;
    userCounterOfRent: number;
}

export type AddNewUser = Omit<UserEntity, "idUser">;

