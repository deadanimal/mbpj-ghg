export class User {
    public id: number
    public full_name: string
    public nric_old: string
    public nric_new: string
    public nric_doc: number
    public mobile: string
    public phone: string
    public email: string
    public occupation: string
    public username: string
    public user_type: string
    public gender: string
    public is_active: boolean
    public date_joined: string

    constructor(
        id: number,
        full_name: string,
        nric_old: string,
        nric_new: string,
        nric_doc: number,
        mobile: string,
        phone: string,
        email: string,
        occupation: string,
        username: string,
        user_type: string,
        gender: string,
        is_active: boolean,
        date_joined: string
    ) {
        this.id = id
        this.full_name = full_name
        this.nric_old = nric_old
        this.nric_new = nric_new
        this.nric_doc = nric_doc
        this.mobile = mobile
        this.phone = phone
        this.email = email
        this.occupation = occupation
        this.username = username
        this.user_type = user_type
        this.gender = gender
        this.is_active = is_active
        this.date_joined = date_joined
    }
}

export class UserTemp {
    public id: number
    public full_name: string
    public nric_old: string
    public nric_new: string
    public nric_doc: string
    public mobile: string
    public phone: string
    public email: string
    public occupation: string
    public username: string
    public user_type: string
    public gender: string
    public is_active: boolean
    public date_joined: string

    constructor(
        id: number,
        full_name: string,
        nric_old: string,
        nric_new: string,
        nric_doc: string,
        mobile: string,
        phone: string,
        email: string,
        occupation: string,
        username: string,
        user_type: string,
        gender: string,
        is_active: boolean,
        date_joined: string
    ) {
        this.id = id
        this.full_name = full_name
        this.nric_old = nric_old
        this.nric_new = nric_new
        this.nric_doc = nric_doc
        this.mobile = mobile
        this.phone = phone
        this.email = email
        this.occupation = occupation
        this.username = username
        this.user_type = user_type
        this.gender = gender
        this.is_active = is_active
        this.date_joined = date_joined
    }
}