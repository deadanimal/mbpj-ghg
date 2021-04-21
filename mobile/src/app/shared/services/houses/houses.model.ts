export class House {
    public id: number
    public owner: number
    public location: string
    public address_1: string
    public address_2: string
    public address_3: string
    public postcode: string
    public town: string
    public state: string
    public building_type: string
    public assessment_tax_account: string
    public assessment_tax_doc: number
    public staying_since: string
    public relationship_type: string
    public occupants: number
    public active: boolean
    public created_at: string
    public modified_at: string

    constructor(
        id: number,
        owner: number,
        location: string,
        address_1: string,
        address_2: string,
        address_3: string,
        postcode: string,
        town: string,
        state: string,
        building_type: string,
        assessment_tax_account: string,
        assessment_tax_doc: number,
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
        this.address_1 = address_1
        this.address_2 = address_2
        this.address_3 = address_3
        this.postcode = postcode
        this.town = town
        this.state = state
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