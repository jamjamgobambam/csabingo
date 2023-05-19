import TermsAPI from '../services/terms'

export const getTermsForUnit = async (unitno) => {
    if (unitno === 1) {
        const results = await TermsAPI.getUnit1Terms()
        return results
    }
    else if (unitno === 3) {
        const results = await TermsAPI.getUnit3Terms()
        return results
    }
    else if (unitno === 6) {
        const results = await TermsAPI.getUnit6Terms()
        return results
    }
}

export const getRandomTerm = (terms) => {
    if (!terms) {
        return
    }
    
    const keys = Object.keys(terms)
    let randomTerm

    if (keys.length > 0) {
        const randomKey = keys[Math.floor(Math.random() * keys.length)]
        randomTerm = terms[randomKey]
        delete terms[randomKey]
    }

    return randomTerm
}