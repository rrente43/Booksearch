import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import SearchRoute from '/Search/Search.js'

export const createRoutes = (store) => ({
    path: '/',
    component: CoreLayout,
    indexRoute: SearchRoute(store),
    childRoutes: [
        SearchRoute(store)
    ]
})

export default createRoutes