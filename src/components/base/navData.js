import { faRProject } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export const NavData = [
  {
    title: 'Home',
    path: '/',
    icon: <FontAwesomeIcon icon={faHome} />
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <FontAwesomeIcon icon={faBuilding} />
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <FontAwesomeIcon icon={faCode} />
  },
  {
    title: 'Education',
    path: '/education',
    icon: <FontAwesomeIcon icon={faGraduationCap} />
  }
];
