export interface ToolEntity {
    idTool: string ;
    nameTool: string;
    depositTool: number;
    toolCounterRent: number;
    availabilityTool: boolean;
    // availabulityTool: true; // nie będzie możliwości wprowadzenia ręcznie danych
}

export type AddNewTool = Omit<ToolEntity, "idTool" | "toolCounterRent" | "availabilityTool">