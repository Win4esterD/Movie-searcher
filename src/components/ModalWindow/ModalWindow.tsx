import {Modal, Box, Divider, Button} from '@mantine/core';
import {Dispatch} from 'react';
import style from './ModalWindow.module.css';
import {Stars} from '../Stars/Stars';

type ModalWindowProps = {
  modalInfo: string;
  isOpened: boolean;
  setModal: Dispatch<boolean>;
};

export function ModalWindow({modalInfo, isOpened, setModal}: ModalWindowProps) {
  return (
    <Modal
      opened={isOpened}
      centered
      onClose={() => setModal(false)}
      title="Your rating"
      size="sm"
      overlayProps={{
        backgroundOpacity: 0.2,
      }}
    >
      <Box className={style.modalInnerContainer}>
        <Divider className={style.modalDivider} />
        <Box component="p" className={style.modalMovieName}>
          {modalInfo}
        </Box>
        <Stars />
        <Button color="var(--main-purple)" className={style.modalButton}>
          Save
        </Button>
      </Box>
    </Modal>
  );
}
