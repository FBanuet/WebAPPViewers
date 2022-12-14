import { IfcState } from '../BaseDefinitions';
export declare class MemoryCleaner {
    private state;
    constructor(state: IfcState);
    releaseAllModels(): void;
    private releaseGeometryByMaterials;
    private releaseJSONMemory;
    private releaseMeshModelMemory;
    private releaseMeshMemory;
}
