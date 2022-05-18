import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';

export const NavData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon aria-hidden="true" />
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <WorkIcon aria-hidden="true" />
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <CodeIcon aria-hidden="true" />
  },
  {
    title: 'Education',
    path: '/education',
    icon: <SchoolIcon aria-hidden="true" />
  }
];
