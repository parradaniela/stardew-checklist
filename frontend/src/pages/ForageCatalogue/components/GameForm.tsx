import { useState } from "react"

const GameForm = () => {
    const [formValues, setFormValues] = useState({
        game: 'base',
        yearOne: false
    })

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === 'checkbox') {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.checked
            })

        } else {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.value
            })
        }
    }

    return (
        <form method="get">
            <fieldset>
                <legend>Select a mod</legend>
                <div>
                    <label htmlFor="base-game">Base Game</label>
                    <input type="radio" id="base" value="base" name="game" onChange={handleFormChange} defaultChecked />
                </div>
                <div>
                    <label htmlFor="sve">Stardew Valley Expanded</label>
                    <input type="radio" id="sve" value="sve" name="game" onChange={handleFormChange} />
                </div>
                <div>
                    <label htmlFor="rsv">Ridgeside Village</label>
                    <input type="radio" id="rsv" value="rsv" name="game" onChange={handleFormChange} />
                </div>
            </fieldset>
            <div>
                <label htmlFor="year-one">Show year 1 available only</label>
                <input type="checkbox" id="yearOne" name="yearOne" onChange={handleFormChange} />
            </div>
        </form>
    )
}

export default GameForm