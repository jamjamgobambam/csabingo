import { getRandomTerm } from '../utilities/termsutils'

const NextButton = ( { setCurrentTerm, setShowTerm, terms } ) => {

    const handleOnClick = (event) => {
        event.preventDefault()
        setCurrentTerm(getRandomTerm(terms))
        setShowTerm(false)
    }

    return (
        <button onClick={handleOnClick}>
            Next Definition
        </button>
    )
}

export default NextButton