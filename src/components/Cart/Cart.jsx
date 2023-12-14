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
import { FaRegCircleXmark, FaRegTrashCan } from "react-icons/fa6"

export const Cart = () => {

    const { cart, removeItem, clearCart, cartTotal } = useContext(CartContext)

    const firstField = React.useRef()

    return (
        <>
            <Drawer
                isOpen={true}
                placement='bottom'
                initialFocusRef={firstField}
                size={"full"}
                overflow='scroll'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Link to={"/"}>
                        <FaRegCircleXmark size={25} className='absolute md:left-[95%] left-[90%] top-[2%] text-back' />
                    </Link>
                    <DrawerHeader borderBottomWidth='1px' className='font-titulo bg-accent text-back'>
                        Carrito de compras
                    </DrawerHeader>

                    <DrawerBody overflow='scroll'>
                        {cart.length == 0 ? <h2 className='text-center text-2xl font-titulo font-extrabold my-5 text-accent'>No hay prodcutos en el carrito</h2> :
                            cart.map((item) => (
                                <Card
                                    direction={{ base: 'row', sm: 'row' }}
                                    overflow='hidden'
                                    variant='filled'
                                    key={item.id}
                                    className='my-5 !bg-secondary'
                                >
                                    <Image
                                        objectFit='cover'
                                        maxW={{ base: '0px', sm: '150px' }}
                                        src={item.img}
                                        alt='Producto'
                                        className='mix-blend-multiply'
                                    />

                                    <Stack direction={['column', 'row']} w='full'>
                                        <CardBody>
                                            <Heading size='md' className='!text-lg font-semibold uppercase leading-tight truncate whitespace-normal !font-titulo'>{item.name}</Heading>

                                            <Text py='2' className='font-titulo2 text-2xl font-bold text-accent'>
                                                $ {item.price}
                                            </Text>

                                            <Text py='2' className='text-md font-semibold font-parrafo'>
                                                Cantidad: {item.quantity}
                                            </Text>

                                            <Text py='2' className='font-semibold font-parrafo text-primary text-lg'>
                                                Subtotal: $ {item.subtotal}
                                            </Text>
                                        </CardBody>

                                        <CardFooter>
                                            <Button variant='solid' colorScheme='red' onClick={() => removeItem(item.id)}>
                                                <FaRegTrashCan />
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
                        <DrawerFooter borderTopWidth='1px' className='flex-col gap-5 justify-center sm:flex-row sm:gap-0'>
                            <div className='flex flex-auto gap-9 items-center flex-col sm:flex-row'>
                                <Text className='text-2xl font-titulo2 font-bold'>Total del carrito:</Text>
                                <Text className='text-3xl font-titulo2 font-bold'>${cartTotal}</Text>
                            </div>
                            <Button variant='outline' mr={3} onClick={clearCart}>
                                Vaciar carrito
                            </Button>
                            <Link to={"/checkout"}>
                                <Button colorScheme='blue'>Iniciar compra</Button>
                            </Link>
                        </DrawerFooter>
                    }
                </DrawerContent>
            </Drawer>
        </>

    )
}
