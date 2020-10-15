import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title, calories, image, ingredients, source}) => {
// const rounded = Number.parseFloat({calories});
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories.toFixed(0)} calories</p>
            <p className={style.source}>Source: {source}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;