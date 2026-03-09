import {useState} from 'react'
import AiRecipe from './AiRecipe'
import IngredientsList from './IngredientsList';

export default function Main(){
    const [ingredients, setIngredients] = useState([]);

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])

        console.log(ingredients)
    }

    const [recipeShown, setRecipeShown] = useState(false);

    function handleRecipeShown(){
        setRecipeShown(true)

    }


    return(
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. onion" 
                    name="ingredient"
                />
                <button >+ Add ingredient</button>
            </form>
            { ingredients.length > 0 &&

                <IngredientsList ingredients={ingredients} handleRecipeShown={handleRecipeShown}/>

            }
            {recipeShown && 
                <AiRecipe/>
            }
        </main>
    )
}