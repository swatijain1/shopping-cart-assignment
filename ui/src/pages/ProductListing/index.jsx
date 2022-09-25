import { useSearchParams } from "react-router-dom";

import { Header, ProductCategories, Products } from "../../container";
import { useGetProductsQuery, useGetCategoriesQuery } from "../../api";
import {
  getActiveCategoryInfo,
  getFilteredProducts,
} from "../../utils/transform";

import "./productListing.scss";

const ProductListing = () => {
  const { data: productList, isError } = useGetProductsQuery();
  const { data: categoriesInfo } = useGetCategoriesQuery();

  const [search, setSearch] = useSearchParams();
  const activeCategory = search.get("category");

  const activeCategoryInfo = getActiveCategoryInfo(
    categoriesInfo,
    activeCategory
  );

  const products = getFilteredProducts(productList, activeCategoryInfo);

  const updateCategory = (selectedCategory) => {
    const currentActiveCategory = search.get("category");
    let category =
      selectedCategory === currentActiveCategory ? "" : selectedCategory;

    if (!category) {
      search.delete("category");
      setSearch(search);
    } else {
      setSearch({ category });
    }
  };

  return (
    <div>
      <Header />
      <div className="product-listing-page">
        {categoriesInfo && (
          <ProductCategories
            {...{ categoriesInfo, updateCategory, activeCategoryInfo }}
          />
        )}
        {products && <Products productList={products} />}
      </div>
    </div>
  );
};

export default ProductListing;
