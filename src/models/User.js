import dayjs from 'dayjs'
import _ from 'lodash'

import { hideEmail } from 'utils'

export default class User {
    constructor({ name, dob, email, picture, gender }) {
        this.name = name
        this.sex = gender
        this.dateOfBirth = dob
        this.fullEmail = email
        this.picture = picture
    }

    isFemale() {
        return this.sex === 'female'
    }

    get dob() {
        return dayjs(this.createdDate)
            .format('DD.MM.YYYY.')
            .toLowerCase()
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
