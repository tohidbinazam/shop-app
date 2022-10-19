const initialState = {
    products: [],
    add_modal: false,
    edit_modal: false,
    quick_view: false,
    single_product: '',
    edit_input:'',
    skeleton: {
        status: true,
        row : 7,
        col : 6,
        img : true,
        button : 2
    },
    error: ''
}

export default initialState