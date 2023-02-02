import { FC } from 'react';
import { useCustomQuery } from 'CustomHook/useCustomQuery';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { BGcontainer } from 'Components/Common/BGcontainer';
import CategoryList from 'Components/Common/CategoryList';
import ProductList from 'Components/Common/ProductList';
import Navigation from 'Components/Pagination/Navigation';
import RouteChangeTracker from 'Utils/GoogleTracker';

const ProductListPage: FC = () => {
  RouteChangeTracker();
  let { categoryId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const sch = location.search;
  const params = new URLSearchParams(sch);
  const pageQuery = params.get('page');
  const queryKey = `categoryId${categoryId}page${pageQuery}`;
  const { isLoading, data, error } = useCustomQuery(
    pageQuery
      ? `/products?size=20&categoryId=${categoryId}&page=${pageQuery}`
      : `/products?size=20&categoryId=${categoryId}`,
    queryKey,
  );
  if (isLoading)
    return (
      <BGcontainer>
        <CategoryList />
      </BGcontainer>
    );
  if (error) return <NotFoundPage />;
  const { page, totalPages } = data.pageInfo;
  const handlerSetOffset = (page: number) => {
    window.scrollTo(0, 0);
    return navigate(`/products/${categoryId}?page=${page}`);
  };
  return (
    <BGcontainer>
      <CategoryList />
      <ProductList products={data.data} />
      <Navigation
        totalPage={totalPages}
        currentPage={page}
        callbackFunc={handlerSetOffset}
      />
    </BGcontainer>
  );
};

export default ProductListPage;
