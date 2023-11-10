export interface RentEntity {
    idRent: string
    dataWypozyczenia: Date;
    idUser: string;
    idTool: string;
    dataZwrotu: Date;
    iloscDni: number;
    rentalActive: boolean;
}

export type AddNewRent = Omit<RentEntity, "idRent" | "dataWypozyczenia" | "dataZwrotu" | "rentalActive">;