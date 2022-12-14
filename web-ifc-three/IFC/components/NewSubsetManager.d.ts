import { Material, Object3D } from 'three';
import { IfcState, HighlightConfigOfModel } from '../BaseDefinitions';
import { BvhManager } from './BvhManager';
/**
 * Contains the logic to get, create and delete geometric subsets of an IFC model. For example,
 * this can extract all the items in a specific IfcBuildingStorey and create a new Mesh.
 */
export declare class Highlighter {
    private state;
    private BVH;
    private mat;
    private previous?;
    constructor(state: IfcState, BVH: BvhManager);
    dispose(): void;
    getSubset(modelID: number, material?: Material): void;
    removeSubset(modelID: number, parent?: Object3D, material?: Material): void;
    createSubset(config: HighlightConfigOfModel): void;
    createSubsetMap(modelID: number): void;
    highLightItems(modelID: number, ids: number[], parent: Object3D): void;
    private static getValue;
}
