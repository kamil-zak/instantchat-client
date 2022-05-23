import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButtonWrapper } from './IconButton.styles';

interface IIconButtonProps {
  icon: IconDefinition;
  onClick?: () => void;
}

const IconButton = ({ icon, onClick }: IIconButtonProps) => (
  <IconButtonWrapper onClick={onClick}>
    <FontAwesomeIcon icon={icon} size="2x" />
  </IconButtonWrapper>
);

export default IconButton;
