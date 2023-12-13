import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Alert,
    AlertIcon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Alerts = ({ title, status, message }) => {
    
    return (
        <Modal isOpen={true} size='md'  isCentered>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px)'
            />
            <ModalContent>
                <ModalHeader className='font-titulo text-3xl bg-secondary'>{title}</ModalHeader>
                <Link to={'/'}>
                    <ModalCloseButton />
                </Link>
                <ModalBody className='font-titulo2 text-2xl text-center bg-secondary'>
                    <Alert status={status}>
                        <AlertIcon />
                        {message}
                    </Alert>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
