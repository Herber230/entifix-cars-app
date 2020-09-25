import { 
    EMEntity, 
    EntityDocument, 
    DefinedAccessor, 
    ExpositionType, 
    EMMemberActivator,
    MemberBindingType,
    DefinedEntity
} from "entifix-ts-backend";

import { ICharacteristic, Characteristic, ICharacteristicModel } from "./Characteristic";
import { Brand } from "./Brand";



interface ICar {
    idBrand?: string;
    lineName: string;
    year: number;
    color: string;
    characteristics: Array<ICharacteristic>
}

interface ICarModel extends EntityDocument, ICar { }

@DefinedEntity()
class Car extends EMEntity implements ICar
{
    //#region Properties

    private _characteristics : Array<Characteristic>
    private _brand : Brand;

    //#endregion

    //#region Methods
   
    //#endregion

    //#region Accessors

    @DefinedAccessor({ exposition: ExpositionType.Normal, schema: { type: String } })
    get lineName(): string { return (this._document as ICarModel).lineName; }
    set lineName(value: string) { (this._document as ICarModel).lineName = value; }

    @DefinedAccessor({ exposition: ExpositionType.Normal, schema: { type: Number } })
    get year(): number { return (this._document as ICarModel).year; }
    set year(value: number) { (this._document as ICarModel).year = value; }

    @DefinedAccessor({ exposition: ExpositionType.Normal, schema: { type: String } })
    get color(): string { return (this._document as ICarModel).color; }
    set color(value: string) { (this._document as ICarModel).color = value; }

    @DefinedAccessor({ exposition: ExpositionType.Normal, schema: { type: String }, alias: 'idBrand', 
        activator: new EMMemberActivator(Brand.getInfo(), MemberBindingType.Reference, true)
    })
    get brand() : Brand
    { return this._brand; }
    set brand(value : Brand)
    { (this._document as ICarModel).idBrand = value && value._id ? value._id.toString() : null; this._brand = value; }

    @DefinedAccessor({ exposition: ExpositionType.Normal, schema: { type: Array }, 
        activator: new EMMemberActivator(Characteristic.getInfo(), MemberBindingType.Snapshot, true, { resourcePath: 'characteristics' })
    })
    get characteristics() : Array<Characteristic>
    { return this._characteristics; }
    set characteristics(value : Array<Characteristic>)
    { (this._document as ICarModel).characteristics = value ? value.map(v => v.getDocument() as ICharacteristicModel) : null; this._characteristics = value; }


    //#endregion
}

export {
    ICar,
    ICarModel,
    Car
}