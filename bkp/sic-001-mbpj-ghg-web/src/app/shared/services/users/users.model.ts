export class User {
    public id: string
    public full_name: string
    public new_nric: string
    public old_nric: string
    public phone: string
    public tel: string
    public email: string
    public gender: string
    public occupation: string
    public user_type: string
    public nric_picture: string
    public profile_picture: string
    public relationship_type: string
    public username: string
    public is_active: boolean
    public date_joined: string

    constructor(
        id: string,
        full_name: string,
        new_nric: string,
        old_nric: string,
        phone: string,
        tel: string,
        email: string,
        gender: string,
        occupation: string,
        user_type: string,
        nric_picture: string,
        profile_picture: string,
        relationship_type: string,
        username: string,
        is_active: boolean,
        date_joined: string
    ){
        this.id = id
        this.full_name = full_name
        this.new_nric = new_nric
        this.old_nric = old_nric
        this.phone = phone
        this.tel = tel
        this.email = email
        this.gender = gender
        this.occupation = occupation
        this.user_type = user_type
        this.nric_picture = nric_picture
        this.profile_picture = profile_picture
        this.relationship_type = relationship_type
        this.username = username
        this.is_active = is_active
        this.date_joined = date_joined
    }
}