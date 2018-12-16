import { hideEmail } from 'utils'
import moment from 'moment'
import _ from 'lodash'

export default class User {
    constructor({ name, dob, email, picture, gender }) {
        this.name = name
        this.sex = gender
        this.dob = moment(dob).format('DD.MM.YYYY')
        this.fullEmail = email
        this.picture = picture
    }

    isFemale() {
        return this.sex === 'female'
    }

    get firstName() {
        return _.capitalize(this.name.first)
    }

    get lastName() {
        return _.capitalize(this.name.last)
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    get email() {
        return hideEmail(this.fullEmail)
    }
}
