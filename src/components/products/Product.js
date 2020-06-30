import React from 'react'

const Product = (props) =>{

    const renderData = () =>{
        const {product} = props;
        return(
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <i>{product.price}</i>
            </div>
        )
    }
    return(
        <div>
            {renderData()}
        </div>
    )
}

export default Product;