import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../routes/categories-priview/categories-preview.component"
import Category from "../../routes/category/category.component"


const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category />}/>
    </Routes>
  );
};

export default Shop;
