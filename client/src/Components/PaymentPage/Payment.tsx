import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { Fragment, FC, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const classNames: FC = (...classes: any) => {
  return classes.filter(Boolean).join(' ');
};

export const VirtualAccount: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="bg-gray-100 py-4 px-3 text-sm mt-6">
        - 소액 결제의 경우 PG사 정책에 따라 결제 금액 제한이 있을 수 있습니다.
      </div>
    </>
  );
};

export const Deposit: FC = (): JSX.Element => {
  return (
    <>
      <div className="bg-gray-100 px-4 py-2 mt-6">
        <div className="flex">
          <div className="mr-6 mt-2">입금은행</div>
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  은행을 선택하시오
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {/* {({ active }) => (
                        <a
                          href="#!"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          국민:766702-00022544 이유정(팜피인)
                        </a>
                      )} */}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="mr-6 mt-2">입금자명</div>
          <input type="text" className="py-2 w-11/12"></input>
        </div>
      </div>
    </>
  );
};

export const AccountTransfer: FC = (): JSX.Element => {
  return (
    <>
      <div className="bg-gray-100 mt-6 py-3 px-3">
        <div className="flex">
          <div className="mr-6 mt-2">예금주명</div>
          <input type="text" className="py-2 w-11/12 "></input>
        </div>
        <div className="text-sm mt-5">
          - 소액 결제의 경우 PG사 정책에 따라 결제 금액 제한이 있을 수 있습니다.
        </div>
      </div>
    </>
  );
};

const onClickControl = () => {};

const Payment: FC = (): JSX.Element => {
  const [deposit, setDeposit] = useState<boolean>(false);
  const [creditcard, setCreditCard] = useState<boolean>(false);
  const [virtualAccout, setVirtualAccount] = useState<boolean>(false);
  const [accountTransfer, setAccountTransfer] = useState<boolean>(false);
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List onClick={() => onClickControl}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="무통장입금" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List onClick={() => setCreditCard(!creditcard)}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCardOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="신용카드" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="third mailbox folders">
        <List onClick={() => setVirtualAccount(!virtualAccout)}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SmartphoneOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="가상계좌" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="fourth mailbox folders">
        <List onClick={() => setAccountTransfer(!accountTransfer)}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AttachMoneyOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="계좌이체" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      {deposit && <Deposit />}
      {creditcard && <VirtualAccount />}
      {virtualAccout && <VirtualAccount />}
      {accountTransfer && <AccountTransfer />}
    </Box>
  );
};
export default Payment;