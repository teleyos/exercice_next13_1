'use client'
import { ButtonGroup, Flex, IconButton, useEditableControls } from '@chakra-ui/react'
import { MdCheck, MdClose, MdEdit } from 'react-icons/md'

const EditableControls = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
    useEditableControls()

  // @ts-ignore
  return isEditing ? (
    <ButtonGroup justifyContent='center' size='sm'>
      <IconButton icon={<MdCheck />} {...getSubmitButtonProps()} />
      <IconButton icon={<MdClose />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent='center'>
      <IconButton size='sm' icon={<MdEdit />} {...getEditButtonProps()} />
    </Flex>
  )
}
export default EditableControls
