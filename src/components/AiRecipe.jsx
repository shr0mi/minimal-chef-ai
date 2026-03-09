import Markdown from "react-markdown"

export default function AiRecipe(props){
    return(
        <div className='recipe'>
            <h2>Minimal Recipe AI suggests:</h2>
            <Markdown>{props.markdown}</Markdown>
        </div>
    )
}