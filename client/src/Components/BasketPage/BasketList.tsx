import { FC, useState } from 'react';
import styled from 'styled-components';
import Basket from './Basket';
import { useAppSelector } from 'Redux/app/hook';
import { selectprice, Pricestate } from 'Redux/reducer/priceSlice';

import { useNumberComma } from 'Utils/commonFunction';

const BasketForm = styled.div`
  width: 1180px;

  margin: 0 auto;
`;

const Baskethead = styled.div`
  position: relative;
  display: flex;
`;
const BasketLefthead = styled.div`
  background: var(--green-60);
  color: var(--bg-white-05);
  padding: 0 46px;
  height: 48px;
  line-height: 48px;
`;
const BasketRighthead = styled.div`
  position: absolute;
  right: 0px;
  bottom: 8px;
  height: 48px;
  line-height: 48px;
  padding: 0 12px;
  border: 1px solid var(--black-20);
  color: var(--gray-40);
  cursor: pointer;
`;

const Tableheader1 = styled.th`
  background: white;
  width: 67px;
  height: 63px;
  border-top: 1px solid var(--green-60);
  border-bottom: 1px solid var(--gray-05);

  padding: 20px 0;
`;

const THinput = styled.input`
  width: 18px;
  height: 20px;
`;

const Tableheader2 = styled.th`
  background: white;
  width: 793px;
  height: 63px;
  border-top: 1px solid var(--green-60);
  border-bottom: 1px solid var(--gray-05);
  padding: 20px 0;
  font-size: var(--small);
  color: var(--a-gray-40);
  font-weight: bold;
`;

const Tableheader3 = styled.th`
  background: white;
  width: 160px;
  height: 63px;
  border-top: 1px solid var(--green-60);
  border-bottom: 1px solid var(--gray-05);
  padding: 20px 40px 20px 0;
  font-size: var(--small);
  color: var(--a-gray-40);
  font-weight: bold;
`;
const Tableheader4 = styled.th`
  background: white;
  width: 110px;
  height: 63px;
  border-top: 1px solid var(--green-60);
  border-bottom: 1px solid var(--gray-05);
  padding: 20px 0;
  font-size: var(--small);
  color: var(--a-gray-40);
  font-weight: bold;
`;
const Tableheader5 = styled.th`
  background: white;
  width: 50px;
  height: 63px;
  border-top: 1px solid var(--green-60);
  border-bottom: 1px solid var(--gray-05);
  padding: 20px 0;
`;
const TableBottom = styled.div`
  border-top: 2px solid #000;
  position: relative;
  padding: 44px 28px 40px 28px;
  border-bottom: 1px solid #f0f0f0;
  height: 134px;
  min-height: 50px;
  display: flex;

  flex-direction: column;
  align-items: flex-end;
`;
const TotalPrice = styled.div`
  // position: absolute;
  // top: 60px;
  // right: 28px;
  // margin: 0;
  // padding: 0;
  // border: 0;
  // outline: 0;
  // font-size: 100%;
  // vertical-align: baseline;
`;

const ButtonContainer = styled.div`
  text-align: center;
  padding: 60px 0;
`;

const BasketList: FC = () => {
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const resultarr: Pricestate[] = useAppSelector(selectprice);
  const jsondata: string | null = localStorage.getItem('baskets');
  const baskets = JSON.parse(jsondata || '[]');

  const result: number = resultarr.reduce((acc, cur) => {
    acc = acc + cur.price * cur.count;
    return acc;
  }, 0);
  const resultCount: number = resultarr.reduce((acc, cur) => {
    console.log(cur);
    acc = acc + cur.count;
    return acc;
  }, 0);

  console.log(checkItems);
  // 체크박스 단일 선택
  const handleSingleCheck = (checked?: boolean, id?: number) => {
    console.log('치킨');
    if (checked && id) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems([...checkItems, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray: number[] = [];
      baskets.forEach((el: any) => idArray.push(el.productId));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  console.log(checkItems);

  return (
    <>
      <BasketForm>
        <Baskethead>
          <BasketLefthead>일반반찬세트</BasketLefthead>
          <BasketRighthead>선택삭제</BasketRighthead>
        </Baskethead>
        <table>
          <thead>
            <tr>
              <Tableheader1>
                <THinput
                  type="checkbox"
                  value="basic"
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  checked={checkItems.length === baskets.length ? true : false}
                ></THinput>
              </Tableheader1>
              <Tableheader2>상품정보</Tableheader2>
              <Tableheader3>수량</Tableheader3>
              <Tableheader4>주문금액</Tableheader4>
              <Tableheader5></Tableheader5>
            </tr>
          </thead>
          <Basket
            handleSingleCheck={handleSingleCheck}
            checkItems={checkItems}
          />
        </table>
        <TableBottom>
          <TotalPrice>
            {' '}
            <span>주문 개수 </span>
            {resultCount}
            <span> 개</span>
          </TotalPrice>
          <TotalPrice>
            <span>예상 주문금액 </span>
            {useNumberComma(result)}
            <span> 원</span>
          </TotalPrice>
        </TableBottom>
      </BasketForm>
      <ButtonContainer>안녕</ButtonContainer>
    </>
  );
};

export default BasketList;
