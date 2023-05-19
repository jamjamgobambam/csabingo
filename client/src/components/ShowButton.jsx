import Term from './Term'
import Loading from './Loading'

const ShowButton = ( { currentTerm, showTerm, setShowTerm } ) => {

    const handleOnClick = (event) => {
        event.preventDefault()
        setShowTerm(!showTerm)
    }

    return (
        <article>
            <div className='article-body'>
                { showTerm ? <Term currentTerm={currentTerm} /> : <Loading />}
            </div>

            <footer>
                { !showTerm ? <button onClick={handleOnClick}>Show Term</button> : null }
            </footer>
        </article>
    )
}

export default ShowButton