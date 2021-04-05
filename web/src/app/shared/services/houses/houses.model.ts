
import { Media } from '../medias/medias.model';
import { User } from '../users/users.model';

export class House {
    constructor(
        public id: number,
        public owner: number,
        public location: string,
        public address_1: string,
        public address_2: string,
        public address_3: string,
        public postcode: string,
        public town: string,
        public building_type: string,
        public assessment_tax_account: string,
        public assessment_tax_doc: string,
        public staying_since: string,
        public relationship_type: string,
        public occupants: number,
        public active: boolean,
        public created_at: string,
        public modified_at: string
    ) {}
}

export class HouseExtended {
    constructor(
        public id: number,
        public owner: User,
        public location: string,
        public address_1: string,
        public address_2: string,
        public address_3: string,
        public postcode: string,
        public town: string,
        public building_type: string,
        public assessment_tax_account: string,
        public assessment_tax_doc: Media,
        public staying_since: string,
        public relationship_type: string,
        public occupants: number,
        public active: boolean,
        public created_at: string,
        public modified_at: string
    ) {}
}

export class HouseTemp {
    constructor(
        public id: number,
        public owner: number,
        public owner_name: string,
        public location: string,
        public address_1: string,
        public address_2: string,
        public address_3: string,
        public postcode: string,
        public town: string,
        public building_type: string,
        public assessment_tax_account: string,
        public assessment_tax_doc: string,
        public staying_since: string,
        public relationship_type: string,
        public occupants: number,
        public active: boolean,
        public created_at: string,
        public modified_at: string
    ) {}
}