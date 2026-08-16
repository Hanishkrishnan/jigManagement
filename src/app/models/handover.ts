export interface Handover {
    handoverID: number;
    requestID: number;
    unitName: string;
    qcPassedAt: Date;
    handedOverTo: string;
    handoverDate: Date;
    status: string;
}
