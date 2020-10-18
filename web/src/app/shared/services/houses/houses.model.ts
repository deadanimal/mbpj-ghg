export class House {
    public id: string
    public owner: string
    public location: string
    public address: string
    public postcode: string
    public area: string
    public building_type: string
    public assessment_tax_account: string
    public assessment_tax_doc: string
    public staying_since: string
    public relationship_type: string
    public occupants: number
    public active: boolean
    public created_at: string
    public modified_at: string

    constructor(
        id: string,
        owner: string,
        location: string,
        address: string,
        postcode: string,
        area: string,
        building_type: string,
        assessment_tax_account: string,
        assessment_tax_doc: string,
        staying_since: string,
        relationship_type: string,
        occupants: number,
        active: boolean,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.owner = owner
        this.location = location
        this.address = address
        this.postcode = postcode
        this.area = area
        this.building_type = building_type
        this.assessment_tax_account = assessment_tax_account
        this.assessment_tax_doc = assessment_tax_doc
        this.staying_since = staying_since
        this.relationship_type = relationship_type
        this.occupants = occupants
        this.active = active
        this.created_at = created_at
        this.modified_at = modified_at
    }
}

export class HouseTemp {
    public id: string
    public owner: string
    public owner_name: string
    public location: string
    public address: string
    public postcode: string
    public area: string
    public building_type: string
    public assessment_tax_account: string
    public assessment_tax_doc: string
    public staying_since: string
    public relationship_type: string
    public occupants: number
    public active: boolean
    public created_at: string
    public modified_at: string

    constructor(
        id: string,
        owner: string,
        owner_name: string,
        location: string,
        address: string,
        postcode: string,
        area: string,
        building_type: string,
        assessment_tax_account: string,
        assessment_tax_doc: string,
        staying_since: string,
        relationship_type: string,
        occupants: number,
        active: boolean,
        created_at: string,
        modified_at: string
    ) {
        this.id = id
        this.owner = owner
        this.owner_name = owner_name
        this.location = location
        this.address = address
        this.postcode = postcode
        this.area = area
        this.building_type = building_type
        this.assessment_tax_account = assessment_tax_account
        this.assessment_tax_doc = assessment_tax_doc
        this.staying_since = staying_since
        this.relationship_type = relationship_type
        this.occupants = occupants
        this.active = active
        this.created_at = created_at
        this.modified_at = modified_at
    }
}