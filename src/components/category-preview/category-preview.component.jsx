import { useSelector } from "react-redux";
import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { Spinner } from "../spinner/spinner.component";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryPreviewContainer>
          <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
          </h2>{" "}
          <Preview>
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Preview>
        </CategoryPreviewContainer>
      )}
    </>
  );
};

export default CategoryPreview;
