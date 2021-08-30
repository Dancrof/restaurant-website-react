import React, { useState } from 'react'
import './content.css'
import ProductJson from '../services/content.json';

function Content() {
    
    const getProduct = ProductJson.product;
    const [produt, setProduct] = useState(getProduct);
    
    return (
        <div className="content">
            {produt.map(item => (
           
                <div key={item.id} className="card">
                    <img src={item.img} alt={item.title} />
                    <div class="card-content">
                        <h1>{item.title}</h1>
                        <p class="price">$ {item.Price}</p>
                        <p>{item.description}</p>
                    </div>
                    <button>Details</button>
                </div>

            ))}
        </div>
    );
}

export default Content
