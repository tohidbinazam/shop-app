const initialState = {
    products: [],
    modal: false,
    single_product: '',
    input: {
        tag: [],
        store: []
    },
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