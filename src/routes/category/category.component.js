import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";

import {CategoryContainer, CategoryTitle} from './category.styles'
import { Spinner } from "../../components/spinner/spinner.component";

const Category = () => {
    const {category} = useParams();
    const isLoading = useSelector(selectCategoriesIsLoading)
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category])
    
    useEffect(()=>{
       
        setProducts(categoriesMap[category])
    },[category, categoriesMap])
    return (
        <Fragment>
        <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
        {
            isLoading ? (<Spinner/>): (<CategoryContainer> 
        
                {
                   products && products.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </CategoryContainer>)
        }
        
        </Fragment>
    );
};

export default Category;