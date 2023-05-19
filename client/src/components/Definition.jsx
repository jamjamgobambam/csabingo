import NextButton from "./NextButton"

const Definition = ( { currentTerm, setCurrentTerm, setShowTerm, terms } ) => {
    return (
        <article>
            <div className='article-body'>
                { currentTerm ? <p>{currentTerm.definition}</p> : null }
            </div>

            <footer>
                { currentTerm ? <NextButton setCurrentTerm={setCurrentTerm} setShowTerm={setShowTerm} terms={terms} /> : null }
            </footer>
        </article>
    )
}

export default Definition