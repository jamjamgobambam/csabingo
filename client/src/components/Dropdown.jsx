const Dropdown = ( { unit, setUnit, setShowTerm } ) => {

    const handleOnChange = (event) => {
        const { value } = event.target
        setUnit(value)
        setShowTerm(false)
    }

    return (
        <div>
            <select id='unit' value={unit} onChange={handleOnChange}>
                <option name='unit' value='0'>Choose the unit</option>
                <option name='unit' value='1'>Unit 1: Object-Oriented Programming</option>
                <option name='unit' value='3'>Unit 3: Arrays and Algorithms</option>
                <option name='unit' value='6'>Unit 6: ArrayLists and String Methods</option>
            </select>
        </div>
    )
}

export default Dropdown