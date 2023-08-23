'use client'
import {
  ButtonGroup,
  Flex,
  IconButton,
  IconButtonProps,
  useEditableControls
} from '@chakra-ui/react'
import { MdCheck, MdClose, MdEdit } from 'react-icons/md'

const EditableControls = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
    useEditableControls()

  return isEditing ? (
    <ButtonGroup justifyContent='center' size='sm'>
      <IconButton
        icon={<MdCheck />}
        {...(getSubmitButtonProps() as Omit<IconButtonProps, 'icon'>)}
      />
      <IconButton
        icon={<MdClose />}
        {...(getCancelButtonProps() as Omit<IconButtonProps, 'icon'>)}
      />
    </ButtonGroup>
  ) : (
    <Flex justifyContent='center'>
      <IconButton
        size='sm'
        icon={<MdEdit />}
        {...(getEditButtonProps() as Omit<IconButtonProps, 'icon' | 'size'>)}
      />
    </Flex>
  )
}
export { EditableControls }
