import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import IconButton from '../../../components/IconButton/IconButton';
import { NavLink } from 'react-router-dom';

interface INavigationLinkProps {
  icon: IconDefinition;
  to: string;
}

const NavigationLink = ({ icon, to }: INavigationLinkProps) => (
  <NavLink to={to} style={({ isActive }) => ({ opacity: isActive ? '1' : '0.6' })}>
    <IconButton icon={icon} />
  </NavLink>
);

export default NavigationLink;
