import { BufferGeometry, Material, Mesh, Object3D } from 'three';
import { HighlightConfigOfModel, IfcState } from '../BaseDefinitions';
import { BvhManager } from './BvhManager';
/**
 * Contains the logic to get, create and delete geometric subsets of an IFC model. For example,
 * this can extract all the items in a specific IfcBuildingStorey and create a new Mesh.
 */
export declare class SubsetManager {
    private state;
    private BVH;
    private selected;
    constructor(state: IfcState, BVH: BvhManager);
    dispose(): void;
    getSubset(modelID: number, material?: Material, customId?: string): Mesh<BufferGeometry, Material | Material[]>;
    removeSubset(modelID: number, parent?: Object3D, material?: Material, customId?: string): void;
    createSubset(config: HighlightConfigOfModel): void | Mesh<any, Material | Material[]> | null;
    private createSelectionInScene;
    private getMergedGeometry;
    private checkConfigValid;
    private checkValidConfigParam;
    private getGeomAndMat;
    private updatePreviousSelection;
    private newSelectionGroup;
    private isPreviousSelection;
    private containsIds;
    private addToPreviousSelection;
    private filter;
    private filterGeometries;
    private isEasySelection;
    private isDefaultMat;
    private matID;
    private matIDNoConfig;
}
