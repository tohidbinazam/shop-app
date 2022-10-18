import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createProduct, modalHide, setInput, updateProduct } from '../../redux/product/action';
import makeSlug from '../../utility/makeSlug';

const AddProduct = () => {

    // Main State
    const { product, category, tag, brand, store } = useSelector(state => state)

    // Product state
    const { modal, input, single_product } = product

    // Category state
    const { categories } = category

    // Tag state
    const { tags } = tag

    // Brand state
    const { brands } = brand

    // Store state
    const { stores } = store

    const dispatch = useDispatch()

    // const { name, regular_price, sell_price, category, brand, stock, photo, short_desc, long_desc } = input

    // useEffect(() => {
    //     setInput(single_product)
    // }, [single_product])

    // Update init state
    const handleInput = (e) => {
        dispatch(setInput({ [e.target.name] : e.target.value })) 
    }

    // Handle single photo
    const handelPhoto = (e) => {
        dispatch(setInput({ [e.target.name] : e.target.files[0] }))
    }

    // Update Tag state
    const handleTag = (e) => {

        const tag = input.tag
        if (e.target.checked) {
            tag.push(e.target.value)
            dispatch(setInput({ tag }))
        } else {
            const data = tag.filter(data => data !== e.target.value)
            dispatch(setInput({ tag: data }))
        }
    }

    // Update Store state
    const handleStore = (e) => {
        
        const store = input.store
        if (e.target.checked) {
            store.push(e.target.value)
            dispatch(setInput({ store }))
        } else {
            const data = store.filter(data => data !== e.target.value)
            dispatch(setInput({ store: data }))
        }
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if (input.name && input.regular_price && input.category && input.tag && input.brand && input.long_desc) {
            const data = new FormData()

            
            // Make slug and update
            const slug = makeSlug( input.name )

            if (single_product) {
    
                data.append('name', input.name)
                data.append('regular_price', input.regular_price)
                data.append('sell_price', input.sell_price)
                data.append('category', input.category)
                data.append('tag', input.tag)
                data.append('brand', input.brand)
                data.append('stock', input.stock)
                data.append('store', input.store)
                data.append('slug', slug)
                data.append('short_desc', input.short_desc)
                data.append('long_desc', input.long_desc)
                data.append('photo', input.photo)
    
                dispatch(updateProduct(single_product._id, data))
            } else{
                
                data.append('name', input.name)
                data.append('regular_price', input.regular_price)
                data.append('sell_price', input.sell_price)
                data.append('category', input.category)
                data.append('tag', input.tag)
                data.append('brand', input.brand)
                data.append('stock', input.stock)
                data.append('store', input.store)
                data.append('slug', slug)
                data.append('short_desc', input.short_desc)
                data.append('long_desc', input.long_desc)
                data.append('photo', input.photo)
                
                dispatch(createProduct(data))
                e.target.reset()
            }
        } else {
            toast.error('All fields are required')
        }
        
    }

  return (
    <div>
        <Modal show={ modal } onHide={ () => dispatch(modalHide()) } centered>
            <Modal.Header closeButton>
                <h3>{ single_product ? 'Update' : 'Create' } Product</h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleSubmit }>
                    <Row>
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' value={ input.name } onChange={ handleInput } type='text' placeholder='Product name'/>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='6'>
                            <Form.Label>Regular Price</Form.Label>
                            <Form.Control name='regular_price' value={ input.regular_price } onChange={ handleInput } type='number' placeholder='$$'/>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='6'>
                            <Form.Label>Sell Price</Form.Label>
                            <Form.Control name='sell_price' value={ input.sell_price } onChange={ handleInput } type='number' placeholder='$$'/>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='8'>
                            <Form.Label>Category</Form.Label>
                            <Form.Select name='category' value={ input.category } onChange={ handleInput }>
                                <option >Select Category</option>
                                {
                                    categories.map(data =>
                                            <option value={ data._id } >{ data.name }</option> 
                                        )
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='4'>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control name='stock' value={ input.stock } onChange={ handleInput } type='number' placeholder='Available quantity'/>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='4'>
                            <Form.Label>Brand</Form.Label>
                            <Form.Select name='brand' value={ input.brand } onChange={ handleInput }>
                                <option >Select Brand</option>
                                {
                                    brands.map(data =>
                                            <option value={ data._id } >{ data.name }</option> 
                                        )
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3' as={ Col } md='8'>
                            <Form.Label>Photo</Form.Label>
                            <Form.Control name='photo' onChange={ handelPhoto } type='file' accept="image/png, image/jpeg"/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Gallery</Form.Label>
                            <Form.Control name='gallery' onChange={ handleInput } type='file' />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Tags</Form.Label><br />
                            {
                                tags.map(data =>
                                        <Form.Check onClick={ handleTag } value={ data._id } type='checkbox' label={ data.name } inline />
                                    )
                            }
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Store</Form.Label><br />
                            {
                                stores.map(data =>
                                        <Form.Check onClick={ handleStore } value={ data._id } type='checkbox' label={ data.name } inline />
                                    )
                            }
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control name='short_desc' value={ input.short_desc } onChange={ handleInput } as="textarea" />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Long Description</Form.Label>
                            <Form.Control name='long_desc' value={ input.long_desc } onChange={ handleInput } as="textarea" rows={5} />
                        </Form.Group>
                        <Form.Group className='mb-3 text-end'>
                            <Button onClick={ () => dispatch(modalHide()) } variant='secondary me-2'>Close</Button>
                            <Button type='submit'> { single_product ? 'Update' : 'Create' }</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default AddProduct