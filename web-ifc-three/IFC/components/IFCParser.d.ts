import { IfcState } from '../BaseDefinitions';
import { BvhManager } from './BvhManager';
import { IFCModel } from './IFCModel';
export interface ParserProgress {
    loaded: number;
    total: number;
}
export interface OptionalCategories {
    [category: number]: boolean;
}
export interface ParserAPI {
    parse(buffer: any): Promise<IFCModel>;
    getAndClearErrors(_modelId: number): void;
    setupOptionalCategories(config: OptionalCategories): void;
}
/**
 * Reads all the geometry of the IFC file and generates an optimized `THREE.Mesh`.
 */
export declare class IFCParser implements ParserAPI {
    private state;
    private BVH?;
    loadedModels: number;
    optionalCategories: OptionalCategories;
    private currentWebIfcID;
    private currentModelID;
    constructor(state: IfcState, BVH?: BvhManager | undefined);
    setupOptionalCategories(config: OptionalCategories): Promise<void>;
    parse(buffer: any): Promise<IFCModel>;
    getAndClearErrors(_modelId: number): void;
    private notifyProgress;
    private newIfcModel;
    private loadAllGeometry;
    private generateAllGeometriesByMaterial;
    private getGeometryAndMaterials;
    private saveAllPlacedGeometriesByMaterial;
    private addOptionalCategories;
    private savePlacedGeometry;
    private getGeometry;
    private getBufferGeometry;
    private getVertices;
    private getIndices;
    private static getMeshMatrix;
    private static ifcGeomToBufferGeom;
    private static extractVertexData;
    private saveGeometryByMaterial;
    private static storeGeometryAttribute;
    private createMaterial;
}
