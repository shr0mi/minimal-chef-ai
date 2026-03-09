import {useState} from 'react'

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
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className='ingredient-list'>
                    {ingredients.map((i) => <li key={i}>{i}</li>)}
                </ul>
                {ingredients.length > 3 && 
                <div className='get-recipe-container-center'>
                <div className='get-recipe-container'>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from a list of ingredients.</p>
                    </div>
                    <button onClick={handleRecipeShown}>Get a recipe</button>
                </div>
                </div>
                }
            </section>
            }
            {recipeShown && 
            <div className='recipe'>
                <h2>Recipe:</h2>
            </div>
            }
        </main>
    )
}