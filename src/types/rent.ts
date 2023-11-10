export interface RentEntity {
    idRent: string
    dataWypozyczenia: Date;
    idUser: string;
    idTool: string;
    dataZwrotu: Date;
    iloscDni: number;
    rentalActive: boolean;
    // user: UserEntity;
    // tool: ToolEntity;
}

export type AddNewRent = Omit<RentEntity, "idRent" | "dataWypozyczenia" | "dataZwrotu" | "rentalActive">;