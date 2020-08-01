import { 
    EMEntity, 
    EntityDocument, 
    ExpositionType,
    DefinedAccessor,
    DefinedEntity
} from "entifix-ts-backend";



interface IBrand {
    name: string;
    country: string;
}

interface IBrandModel extends EntityDocument, IBrand { }

@DefinedEntity()
class Brand extends EMEntity implements IBrand
{
    //#region Properties

    //#endregion

    //#region Methods
   
    //#endregion

    //#region Accessors

    @DefinedAccessor({exposition: ExpositionType.Normal, schema: { type: String }})
    get name() : string
    { return (this._document as IBrandModel).name; }
    set name(value : string)
    { (this._document as IBrandModel).name = value; }

    @DefinedAccessor({exposition: ExpositionType.Normal, schema: { type: String }})
    get country() : string
    { return (this._document as IBrandModel).country; }
    set country(value : string)
    { (this._document as IBrandModel).country = value; }

    //#endregion
}

export {
    IBrand,
    IBrandModel,
    Brand
}