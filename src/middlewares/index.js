export const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'pokeloco' }, ...actionInfo.action.payload] //actionInfo.action.payload es el array de pokemons

    const updatedActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured },
    }
    next(updatedActionInfo)
}