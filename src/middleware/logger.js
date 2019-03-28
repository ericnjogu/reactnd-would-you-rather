const logger = (store) => (next) => (action) =>{
    console.group(action.type)
    console.log('current state ', action)
    const nextVal =
next(action)
    console.log('new state is ', store.getState())
    console.groupEnd()
    return nextVal
}

export default logger