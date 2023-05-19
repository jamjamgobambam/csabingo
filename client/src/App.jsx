import { useState, useEffect } from 'react'
import { getTermsForUnit, getRandomTerm } from './utilities/termsutils'
import Dropdown from './components/Dropdown'
import Definition from './components/Definition'
import ShowButton from './components/ShowButton'
import bingo from './assets/bingo.png'
import './App.css'

const App = () => {

  const [unit, setUnit] = useState(0)
  const [terms, setTerms] = useState({term: '', definition: ''})
  const [currentTerm, setCurrentTerm] = useState({term: '', definition: ''})
  const [showTerm, setShowTerm] = useState(false)

  useEffect(() => {
    (async () => {
      const results = await getTermsForUnit(parseInt(unit))
      setTerms(results)
    }) ()
  }, [unit])

  useEffect(() => {
    setCurrentTerm(getRandomTerm(terms))
  }, [terms])

  return (
    <div className='app-main'>
      <div className='app-header'>
        <h1>CSA Bingo!<img src={bingo} /></h1>
      </div>

      <header>
        <span>Choose the unit:</span> <Dropdown setShowTerm={setShowTerm} unit={unit} setUnit={setUnit} terms={terms} />
      </header>

      <main>
        { currentTerm ? null: <h2>Choose the unit 👆</h2> }

        { currentTerm ? <ShowButton currentTerm={currentTerm} showTerm={showTerm} setShowTerm={setShowTerm} /> : null}

        { currentTerm ? <Definition currentTerm={currentTerm} setCurrentTerm={setCurrentTerm} setShowTerm={setShowTerm} terms={terms} /> : null}
      </main>
    </div>
  )
}

export default App