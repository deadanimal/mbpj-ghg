export class CarbonEmissionFactor {
    public id: string
    public electric_carbon_emission_factor: number
    public water_carbon_emission_factor: number
    public year: string
    public created_at: any
    public modified_at: any

    constructor(
        id: string,
        electric_carbon_emission_factor: number,
        water_carbon_emission_factor: number,
        year: string,
        created_at: any,
        modified_at: any
    ){
        this.id = id
        this.electric_carbon_emission_factor = electric_carbon_emission_factor
        this.water_carbon_emission_factor = water_carbon_emission_factor
        this.year = year
        this.created_at = created_at
        this.modified_at = modified_at
    }
}