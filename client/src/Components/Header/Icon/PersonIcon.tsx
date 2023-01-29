import { FC } from 'react';

const PersonIcon: FC = (): JSX.Element => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path d="M12 11.7q-1.4 0-2.4-.988-1-.987-1-2.387 0-1.425 1-2.413 1-.987 2.4-.987t2.4.987q1 .988 1 2.413 0 1.4-1 2.387-1 .988-2.4.988Zm-7.325 7.35v-2.1q0-.725.387-1.325.388-.6 1.038-.925 1.475-.7 2.95-1.063 1.475-.362 2.95-.362t2.95.362Q16.425 14 17.9 14.7q.65.325 1.038.925.387.6.387 1.325v2.1Z" />
      </svg>
    </div>
  );
};
export default PersonIcon;
