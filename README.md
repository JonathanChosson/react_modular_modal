# React modular modal

A modular modal component for React application.</br>

## NPM publication

[You can see npm publication here](https://www.npmjs.com/package/react_modular_modal)

## Installation

You can install [react_modal_library](https://www.npmjs.com/package/react_modular_modal) with **npm** command : </br>
`npm i react_modular_modal`
</br></br>
or with **yarn** command : </br>
`yarn add react_modular_modal`

## Use react_modal_library

1. Import Modal component to your file : </br>
   `import { Modal } from "react_modular_modal"`

2. Insert Modal component at rendering (example) : </br>

```js
import { Modal } from "react_modular_modal"

const Form = () => {
    /**
     * useState for modal status
     */
    const [modalOpen, setModalOpen] = useState(false)

    /**
     * Action for toggle modal visibility
     * @returns void
     */
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        openModal()
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="field">Empty field</label>
                    <input
                        aria-required="true"
                        type="text"
                        id="field"
                        name="field"
                        required
                    />
                </div>
            </form>
            <button type="submit" id="submit" onClick={(e) => handleSubmit(e)}>
                Save
            </button>
            {isOpen && <Modal text="Employee created" close={closeModal} />}
        </div>
    )
}

export default Form
```

3. Pass props `text` and `close` to Modal component.

## Props expected

-   `text` contains text to display in Modal component </br>
-   `close` contains function that returns false

<img src='https://img.shields.io/badge/Autor-Chosson Jonathan-blue' />

## Licence

<img src='https://forthebadge.com/images/badges/open-source.svg' />
