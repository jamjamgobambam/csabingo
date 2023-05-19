import { request } from '../utilities/api'

const termsURL = '/terms'

const getUnit1Terms = () => request('GET', `${termsURL}/unit1`)
const getUnit3Terms = () => request('GET', `${termsURL}/unit3`)
const getUnit6Terms = () => request('GET', `${termsURL}/unit6`)

export default {
    getUnit1Terms,
    getUnit3Terms,
    getUnit6Terms
}