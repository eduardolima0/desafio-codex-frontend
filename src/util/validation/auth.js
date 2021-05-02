const STORAGE_KEY = 'RotasPrivadas'

const isLogged = () => !!localStorage.getItem(STORAGE_KEY)

export {isLogged}