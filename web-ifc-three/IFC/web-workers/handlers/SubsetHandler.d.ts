import { IFCWorkerHandler } from '../IFCWorkerHandler';
import { WorkerAPIs } from '../BaseDefinitions';
import { Material, Mesh, Object3D } from 'three';
import { HighlightConfigOfModel } from '../../BaseDefinitions';
import { SubsetAPI } from '../../components/SubsetManager';
import { Serializer } from '../serializer/Serializer';
export declare class SubsetHandler implements SubsetAPI {
    private handler;
    private serializer;
    API: WorkerAPIs;
    private subsetID;
    private scene?;
    constructor(handler: IFCWorkerHandler, serializer: Serializer);
    createSubset(config: HighlightConfigOfModel): Promise<Mesh>;
    getSubset(modelID: number, material?: Material): Promise<Mesh>;
    removeSubset(modelID: number, parent?: Object3D, material?: Material): Promise<void>;
    dispose(): void;
}
