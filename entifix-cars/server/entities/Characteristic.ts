import { 
    EMEntity, 
    EntityDocument, 
    ExpositionType,
    DefinedAccessor,
    DefinedEntity
} from "entifix-ts-backend";



interface ICharacteristic {
    charName: string;
    charValue: string;
}

interface ICharacteristicModel extends EntityDocument, ICharacteristic{ }

@DefinedEntity()
class Characteristic extends EMEntity implements ICharacteristic
{
    //#region Properties

    //#endregion

    //#region Methods
   
    //#endregion

    //#region Accessors

    @DefinedAccessor({exposition: ExpositionType.Normal, schema: { type: String }})
    get charName() : string
    { return (this._document as ICharacteristicModel).charName; }
    set charName(value : string)
    { (this._document as ICharacteristicModel).charValue = value; }

    @DefinedAccessor({exposition: ExpositionType.Normal, schema: { type: String }})
    get charValue() : string
    { return (this._document as ICharacteristicModel).charValue; }
    set charValue(value : string)
    { (this._document as ICharacteristicModel).charValue = value; }

    //#endregion
}

export {
    ICharacteristic,
    ICharacteristicModel,
    Characteristic,
}