export const getProducts = (state) => {
    return Object.values(state.products.data)
}