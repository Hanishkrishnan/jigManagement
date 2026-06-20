export interface Jig{
    id: number;
    jigName: string;
    quantity : number;
    project:{
        id:number;
        projName:string;
    }
    part:{
        id:number;
        partName:string
    }
}