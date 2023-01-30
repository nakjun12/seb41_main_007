import styled from 'styled-components';
import SavePostcode from './SavePostcode';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RadiusButton from 'Components/Common/RadiusButton';
import { TYPE_UserAddress } from 'Types/common/product';
import TinyTitle from 'Components/Common/TinyTitle';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { useState, Dispatch, SetStateAction } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'CustomHook/useSession';
const StyleToastContainer = styled(ToastContainer)`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  padding-right: 30px;

  margin-top: 20px;
`;

const User = styled.div`
  input {
  }
`;

const SaveAddress = () => {
  const numberoverAlram = () => toast.warning('11자리 이상은 불가합니다.');
  const [nameMessage, setNameMessage] = useState<string>('');
  const [addressValue, setAddressValue] = useState<string[]>([]);
  const [dataPut, setDataPut] = useState<TYPE_UserAddress>({
    addressName: '',
    name: '',
    detailAddress: '',
    phoneNumber: '',
  });
  const { loading, session } = useSession();
  if (loading) return <></>;

  const onSaveData = (name: string, value: string) => {
    console.log(name, value);
    setDataPut({ ...dataPut, [name]: value });
  };
  const sucessAlram = () =>
    toast.success('저장되었습니다.', {
      position: 'top-right',

      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value.length);

    if (e.target.value.length < 12) {
      const { name, value } = e.target;
      setDataPut({ ...dataPut, [name]: value });
      console.log(e.target.value);
      console.log(e.target.name);
      // changeAddress(name, value);
      // onSaveData(name, value);
    }
  };

  console.log({ ...dataPut });
  const postAddress = () => {
    const suggest = {
      ...dataPut,
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/addresses`, {
      body: JSON.stringify(suggest),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session}`,
      },
      method: 'POST',
    }).then((response) => console.log(response));
  };

  return (
    <>
      <User>
        <form>
          <TinyTitle>배송지명</TinyTitle>
          <input
            type="text"
            placeholder="배송지명"
            className="text-sm mr-2 w-5/12 h-8"
            name="addressName"
            value={dataPut?.addressName}
            onChange={onChangeForm}
            maxLength={5}
          ></input>

          <TinyTitle>받는 분 정보</TinyTitle>
          <div className="mb-5">
            <input
              type="text"
              placeholder="이름"
              className="text-sm mr-2 w-5/12 h-8 "
              maxLength={5}
              onChange={onChangeForm}
              value={dataPut?.name}
              name="name"
            ></input>
            <input
              type="text"
              placeholder="휴대폰 번호"
              className="text-sm w-5/12 h-8 all: unset"
              onChange={onChangeForm}
              value={dataPut?.phoneNumber}
              maxLength={13}
              name="phoneNumber"
            ></input>
          </div>
        </form>
      </User>
      <div>
        <div className="text-sm font-semibold mb-2">주소</div>
        <div className="bg-gray-50 py-2 text-xs mb-2 flex">
          <div className="text-lg mx-2">
            <FontAwesomeIcon icon={faCircleExclamation} />
          </div>
          <div className="text-sm text-gray-400 mt-1">
            상세주소가 없는 경우는 없음 으로 입력해 주세요.
          </div>
        </div>
        <SavePostcode
          onSaveData={onSaveData}
          dataPut={dataPut}
          addressValue={addressValue.length > 1 ? addressValue : ['', '', '']}
        />
      </div>
      <StyleToastContainer
        limit={4}
        transition={Zoom}
        hideProgressBar
        autoClose={1000}
      />
      {/* <Container
        role="alert"
        autoClose={4000}
        transition={Zoom}
        draggable={false}
        closeOnClick={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        hideProgressBar
        position="bottom-center"
        theme="colored"
        style={{ fontSize: 13 }}
      /> */}
      <div className="my-5 relative h-6">
        <div className="absolute top-0 left-0">
          <RadiusButton
            onClick={() => {
              const numberCheck = /[^0-9]/g;

              if (
                dataPut?.addressName &&
                dataPut?.name &&
                dataPut?.phoneNumber &&
                dataPut?.phoneNumber.length > 10 &&
                dataPut?.name.length > 1 &&
                dataPut?.detailAddress
              ) {
                sucessAlram();
                setNameMessage('성공하였습니다');
                postAddress();
              } else if (
                !dataPut?.phoneNumber ||
                !dataPut?.name ||
                !dataPut?.addressName
              ) {
                setNameMessage('빈칸을 채워주세요');
              } else if (dataPut?.name.length < 2) {
                setNameMessage('받는 분 정보는 2글자이상 채워주세요');
              } else if (numberCheck.test(dataPut?.phoneNumber)) {
                setNameMessage('-없이 11자리 숫자를 입력해주세요');
              } else if (dataPut?.phoneNumber.length > 11) {
                setNameMessage('-없이 11자리 핸드폰 번호를 입력해주세요');
              } else if (!dataPut?.detailAddress) {
                setNameMessage('상세주소가 없다면 없음이라 적어주세요');
              }
            }}
          >
            저장
          </RadiusButton>
        </div>
      </div>
      {<div className=" text-xs">{nameMessage}</div>}
      <Title></Title>
    </>
  );
};
export default SaveAddress;

//유효성검사 안햇음
//input number 문제
//change 컨트롤
//is loading 문제 해결
//반응협 웹 css 디자인 만지기
//온 세이브 오류나서 파괴하고 리덕스로 대체
//문제가 생겨서 해결하기위해 저장하기위한 로직 생성