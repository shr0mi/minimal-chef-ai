import {useState, useRef, useEffect} from 'react'
import AiRecipe from './AiRecipe'
import IngredientsList from './IngredientsList';
import { getRecipeGemini } from '../ai';

export default function Main(){
    const [ingredients, setIngredients] = useState([]);

    const [recipeMarkdown, setRecipeMarkdown] = useState("");

    const [recipeShown, setRecipeShown] = useState(false);

    const recipeSection = useRef(null)
    //console.log(recipeSection);

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])

        console.log(ingredients)
    }

    useEffect(()=>{
        if(recipeSection.current != null){
            recipeSection.current.scrollIntoView({behaviour: "smooth"});
        }

    }        
    ,[recipeMarkdown])

    

    async function handleRecipeShown(){
        try{
            const markdown = await getRecipeGemini(ingredients)
            setRecipeMarkdown(markdown)
            setRecipeShown(true)
        }catch(error){
            console.error("Failed to fetch recipe", error)
        }

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

                <IngredientsList ref={recipeSection} ingredients={ingredients} handleRecipeShown={handleRecipeShown}/>

            }
            {recipeShown && 
                <AiRecipe markdown={recipeMarkdown}/>
            }
        </main>
    )
}