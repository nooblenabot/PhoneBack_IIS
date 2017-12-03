namespace PhoneBack_IIS.PhoneBack {
    export interface SetCityRow {
        Id?: number;
        DefaultValue?: boolean;
        IsActive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        FrCodeInsee?: string;
        Caption?: string;
        City?: string;
        PostCode?: string;
        Country?: number;
        CountryNameFrFr?: string;
    }

    export namespace SetCityRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Caption';
        export const localTextPrefix = 'PhoneBack.SetCity';
        export const lookupKey = 'PhoneBack.City';

        export function getLookup(): Q.Lookup<SetCityRow> {
            return Q.getLookup<SetCityRow>('PhoneBack.City');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const DefaultValue: string;
            export declare const IsActive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const FrCodeInsee: string;
            export declare const Caption: string;
            export declare const City: string;
            export declare const PostCode: string;
            export declare const Country: string;
            export declare const CountryNameFrFr: string;
        }

        [
            'Id', 
            'DefaultValue', 
            'IsActive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'FrCodeInsee', 
            'Caption', 
            'City', 
            'PostCode', 
            'Country', 
            'CountryNameFrFr'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

