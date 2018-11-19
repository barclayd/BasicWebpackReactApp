import React from 'react';
import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = (props) => (
    <div className={classes.Pizza}>
        <img src={PizzaImage} className={classes.PizzaImage}/>
    </div>
);

export default pizzaImage;
