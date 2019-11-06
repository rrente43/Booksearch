import React , {PropTypes} from 'react'
import classes from 'styles/search.css'
import classNames from 'classNames'

export const Search = (props) => {
    const { getBooks, books,query} = props
    const mappedBooks =!books.isEmpty() ? books.map((book, index) => {

    }): <h4>No Results found</h4>
    return(

        <div className={classes.wrapper}>
                <section className ='contanier-fluid'>
                    <div className ="row">
                    <div className ='col-md-12'>
                        <h1> Book Search API</h1>
                    </div>
                    </div>
                    <div className ="row">
                    <div className ='col-md-4'>
                        Favorite Book List
                    </div>
                    <div className ='col-md-8'>
                        <div className= "form-group">
                            <input type = 'text' className= 'form-control' id= 'search' placeholder= 'Search for a Book' 
                            onChange = {({target}) => console.log(target.value)}/>
                        </div>
                    </div>
                    <div>
                        Books Go Here
                    </div>
                    </div>
                </section>
                  
        </div>

    )
}
Search.PropTypes = {
    getBooks: PropTypes.func,
    books: PropTypes.any,
    query: PropTypes.string

}
export default Search