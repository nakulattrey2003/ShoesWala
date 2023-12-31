import React from 'react';
import {BsFillBagHeartFill} from "react-icons/bs";

function Card({img, title, star, outlineStar, reviews, newPrice, prevPrice}){
    return(
        <>
            <section className="card">
                <img 
                    className='card-img'
                    src={img} 
                    alt={title}
                />
                <div className='card-details'>
                    <h3 className='card-title'>{title}</h3>
                    <section className='card-reviews'>
                        {star}{star}{star}{star}{outlineStar}
                        <span className='total-reviews'>{reviews}</span>
                    </section>
                    <section className='card-price'>
                        <div className='price'>
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div className='bag'>
                            <BsFillBagHeartFill className='bag-icon' />
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Card;