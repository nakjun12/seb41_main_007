import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomQuery } from 'CustomHook/useCustomQuery';
import Empty from 'Components/Common/Empty';
import CustomTitle from 'Components/Header/CustomTitle';
import NotFoundPage from './NotFoundPage';
import { BGcontainer } from 'Components/Common/BGcontainer';
import ProductList from 'Components/Common/ProductList';

import Navigation from 'Components/Pagination/Navigation';
import CategoryList from 'Components/Common/CategoryList';

const AllProductsPage: FC = () => {
  const navigate = useNavigate();
  const sch = location.search;
  const params = new URLSearchParams(sch);
  const page = params.get('page');
  const queryKey = `productsAll${page}`;
  const { isLoading, data, error } = useCustomQuery(
    `/products?sort=likeCount&order=ascending&page=${page}&size=20`,
    queryKey,
  );
  if (isLoading)
    return (
      <>
        <CustomTitle title={`상품 리스트 | FarmPi`} />
        <Empty />;
      </>
    );
  if (error) return <NotFoundPage />;

  const handlerSetOffset = (page: number) => {
    window.scrollTo(0, 0);
    return navigate(
      `/products/all?sort=likeCount&order=ascending&page=${page}&size=20`,
    );
  };

  return (
    <BGcontainer>
      <CategoryList />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ProductList products={data.data} />
        <Navigation
          totalPage={data.pageInfo.totalPages}
          currentPage={data.pageInfo.page}
          callbackFunc={handlerSetOffset}
        />
      </div>
    </BGcontainer>
  );
};

export default AllProductsPage;
