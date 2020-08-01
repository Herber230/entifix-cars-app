import {
    EntifixApplication, 
    EntifixAppConfig
} from 'entifix-ts-backend';

import { Brand, IBrandModel } from './entities/Brand';
import { Characteristic, ICharacteristicModel } from './entities/Characteristic';
import { Car, ICarModel } from './entities/Car';

class App extends EntifixApplication
{
    //#region Properties

    //#endregion


    //#region Methods

    protected registerEntities(): void 
    {
        this.serviceSession.registerEntity<IBrandModel, Brand>(Brand, Brand.getInfo());
        this.serviceSession.registerEntity<ICharacteristicModel, Characteristic>(Characteristic, Characteristic.getInfo());
        this.serviceSession.registerEntity<ICarModel, Car>(Car, Car.getInfo());   
    }

    protected exposeEntities(): void 
    {
        this.routerManager.exposeEntity('Brand');
        this.routerManager.exposeEntity('Characteristic');
        this.routerManager.exposeEntity('Car');
    }

    //#endregion
    

    //#region Accessors

    protected get serviceConfiguration() {
        let config : EntifixAppConfig = {
            serviceName: 'entifix-cars',
            mongoService: {
                user: 'entifixUser',
                url: 'mongodb:27017/entifix-cars-db',
                password: 'entifix123',
            },
            protectRoutes: { enable: false },
            devMode: true            
        } 
        return config;
    }

    //#endregion
}

export { App }

