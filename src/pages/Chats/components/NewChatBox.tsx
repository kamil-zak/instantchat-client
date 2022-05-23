import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import { MouseEvent, useState } from 'react';

const NewChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };
  return (
    <>
      <Button onClick={open}>Create ChatBox</Button>
      {isOpen && <Modal handleClose={() => setIsOpen(false)}>TEST</Modal>}
    </>
  );
};

export default NewChatBox;
