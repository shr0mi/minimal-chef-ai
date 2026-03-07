import {useState} from 'react'

export default function Main(){
    const [ingredients, setIngredients] = useState([]);

    const submitted = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])

        console.log(ingredients)
    }


    return(
        <main>
            <form action="" className="add-ingredient-form" onSubmit={submitted}>
                <input 
                    type="text"
                    placeholder="e.g. onion" 
                    name="ingredient"
                />
                <button >+ Add ingredient</button>
            </form>
            <ul>
                {ingredients.map((i) => <li key={i}>{i}</li>)}
            </ul>
        </main>
    )
}