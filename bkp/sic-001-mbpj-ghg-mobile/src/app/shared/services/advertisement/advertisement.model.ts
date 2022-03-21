export class Advertisement {
    public id: string
    public ads_title: string
    public ads_image: number
    public status: boolean

    constructor(
        id: string,
        ads_title: string,
        ads_image: number,
        status: boolean,
    ){
        this.id = id
        this.ads_title = ads_title
        this.ads_image = ads_image
        this.status = status
    }
}