import {MenuItem} from '../Types/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'cube-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle',
    component: 'AlertScreen',
  },
  {
    name: 'TextBox',
    icon: 'chatbox-ellipses',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListPage',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'infinite',
    component: 'InfiniteScrollScreen',
  },
];
