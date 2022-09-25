import { Header, Carousel, HomePageCategories } from "../../container";
import { useGetCategoriesQuery, useGetBannersQuery } from "../../api";

const Home = () => {
  const { data: categories, isError } = useGetCategoriesQuery();
  const { data: banners } = useGetBannersQuery();

  return (
    <div>
      <Header />
      <div className="home">
        {banners && <Carousel banners={banners} />}
        {categories && <HomePageCategories categories={categories} />}
      </div>
    </div>
  );
};

export default Home;
