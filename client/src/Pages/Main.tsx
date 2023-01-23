import { FC } from 'react';
import { Carousell } from 'Components/Common/Carousel';
import Example from 'Components/Review/ReviewCss';
import StartDive from 'Components/NewProduct/StartDive';
import CustomTitle from 'Components/Header/CustomTitle';
import Story from 'Components/Main/Story';
import NewProduct from 'Components/NewProduct/NewProduct';
import BestProduct from 'Components/BestProduct/BestProduct';

const Main: FC = (): JSX.Element => {
  return (
    <main>
      <CustomTitle title="FarmPi" description={'팜피에 오신걸 환영합니다!'} />
      <Carousell />
      <Story />
      <NewProduct />
      <StartDive />
      <BestProduct />
      <Example />
    </main>
  );
};

export default Main;
