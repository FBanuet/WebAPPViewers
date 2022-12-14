import { IfcState } from '../BaseDefinitions';
import { BufferGeometry } from 'three';
/**
 * Contains the logic to get the properties of the items within an IFC model.
 */
export declare class PropertyManager {
    private state;
    constructor(state: IfcState);
    getExpressId(geometry: BufferGeometry, faceIndex: number): number | undefined;
    getItemProperties(modelID: number, id: number, recursive?: boolean): Promise<any>;
    getAllItemsOfType(modelID: number, type: number, verbose: boolean): Promise<any[]>;
    getPropertySets(modelID: number, elementID: number, recursive?: boolean): Promise<any[]>;
    getTypeProperties(modelID: number, elementID: number, recursive?: boolean): Promise<any[]>;
    getMaterialsProperties(modelID: number, elementID: number, recursive?: boolean): Promise<any[]>;
    getSpatialStructure(modelID: number, includeProperties?: boolean): Promise<{
        expressID: number;
        type: string;
        children: never[];
    }>;
    private getSpatialStructureJSON;
    private getSpatialStructureWebIfcAPI;
    private getAllItemsOfTypeJSON;
    private filterJSONItemsByType;
    private getItemsByIDJSON;
    private getPropertyJSON;
    private getJSONReferencesRecursively;
    private getJSONItem;
    private getMultipleJSONItems;
    private getPropertyWebIfcAPI;
    private getAllItemsOfTypeWebIfcAPI;
    private getSpatialTreeChunks;
    private getChunksJSON;
    private getChunksWebIfcAPI;
    private saveChunk;
    private getSpatialNode;
    private getChildren;
    private newNode;
    private getNodeType;
    private getAllRelatedItemsOfTypeJSON;
    private getAllRelatedItemsOfTypeWebIfcAPI;
    private getRelated;
    private static isRelated;
    private static newIfcProject;
}
