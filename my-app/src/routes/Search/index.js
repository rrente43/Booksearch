import {injectReducer} from '../../store/reducers';
export default(store) =>({
    getComponent (nextState, cb){
        require.ensure([],(require)=>{
            const Counter = require('./containers/SearchContainer').default
            const reducer = require('./modules/search').default

            injectReducer(store,{key: 'search',reducer})
            cb(null, Counter)
        }, 'search')
    }
})
