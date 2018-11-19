import React from 'react';
import classes from './PizzaImage.css';
import pizza from '../../assets/pizza.jpg';

const pizzaImage = (props) => (
    <div className={classes.Pizza}>
        <img src={pizza} className={classes.PizzaImage}/>
    </div>
);

export default pizzaImage;
