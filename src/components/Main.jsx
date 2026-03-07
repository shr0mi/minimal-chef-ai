export default function Main(){
    const ingredients = ["Chicken", "Onion", "Beans"];

    const submitted = (event) => {
        event.preventDefault()
        console.log("Form Submitted");
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