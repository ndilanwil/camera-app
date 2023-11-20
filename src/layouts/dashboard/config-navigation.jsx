import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'users',
    path: '/user',
    icon: icon('group'),
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: icon('ic_user'),
  },
  {
    title: 'settings',
    path: '/settings',
    icon: icon('ic_settings-1'),
  },
];

export default navConfig;
