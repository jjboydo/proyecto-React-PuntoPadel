import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'
import { FaRegCircleXmark } from "react-icons/fa6"

export const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext)

    const firstField = React.useRef()

    return (
        <>
            <Drawer
                isOpen={true}
                placement='bottom'
                initialFocusRef={firstField}
                size={"full"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Link to={"/"}>
                        <FaRegCircleXmark size={25} className='absolute left-[97%] top-[2%]' />
                    </Link>
                    <DrawerHeader borderBottomWidth='1px' className='font-titulo'>
                        Carrito de compras
                    </DrawerHeader>

                    <DrawerBody>
                        {cart.length == 0 ? <h2 className='text-center text-2xl font-titulo font-extrabold my-5 text-accent'>No hay prodcutos en el carrito</h2> :
                            cart.map((item) => (
                                <Card
                                    direction={{ base: 'column', sm: 'row' }}
                                    overflow='hidden'
                                    variant='filled'
                                    key={item.id}
                                    className='my-5'
                                >
                                    <Image
                                        objectFit='cover'
                                        maxW={{ base: '100%', sm: '150px' }}
                                        src={item.img}
                                        alt='Caffe Latte'
                                    />

                                    <Stack>
                                        <CardBody>
                                            <Heading size='md'>{item.name}</Heading>

                                            <Text py='2'>
                                                {item.price}
                                            </Text>

                                            <Text py='2'>
                                                Cantidad: {item.quantity}
                                            </Text>
                                        </CardBody>

                                        <CardFooter>
                                            <Button variant='solid' colorScheme='blue' onClick={() => removeItem(item.id)}>
                                                Eliminar item
                                            </Button>
                                        </CardFooter>
                                    </Stack>
                                </Card>
                            ))
                        }
                    </DrawerBody>

                    {cart.length == 0 ? <DrawerFooter borderTopWidth='1px'>
                        <Link to={"/"}>
                            <Button colorScheme='blue'>Volver a comprar</Button>
                        </Link>
                    </DrawerFooter> :
                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={3} onClick={clearCart}>
                                Vaciar carrito
                            </Button>
                            <Button colorScheme='blue'>Finalizar compra</Button>
                        </DrawerFooter>
                    }
                </DrawerContent>
            </Drawer>
        </>

    )
}
