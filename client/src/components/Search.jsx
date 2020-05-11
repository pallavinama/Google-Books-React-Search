import React from 'react';
import axios from "axios";

const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

class Search extends React.Component {
    state = {
        books: [],
        bookSearch: "",
      };

    setInputChange = (event) => {
        //console.log("event.target.name "+event.target.name);
        //console.log("event.target.value "+event.target.value);
        const bookSearchInput = event.target.value;
        //this.setState({ [name]: value });
        this.setState({bookSearch: bookSearchInput});
        console.log("state.bookSearch "+this.state.bookSearch);
    };

    /*setInputChange(event){
        console.log("event.target.value "+event.target.value);
        //const { name, value } = event.target;
        //this.setState({ [name]: value });
        this.setState({});
    }*/

    searchGoogleBook = (event) => {
        event.preventDefault();

        let currentComponent = this;
        console.log("searched for "+this.state.bookSearch);   
        axios.get(apiUrl+this.state.bookSearch)            
            .then(function (res){
                currentComponent.setState({ books: res.data.items }, function() {
                    console.log(this.state.books);
                  });
                //console.log("res.data.items "+res.data.items);
                //this.setState({books: [{"id":3},{"id":4}]});
                //alert("this.state.books "+this.state.books);
            })
            .catch(function (error){
                console.log("error in get "+error);
            });
    }

    /*searchGoogleBook(event){
        event.preventDefault();

        axios.get(apiUrl+this.state.bookSearch)
            .then(function (res){
                console.log("searched for "+this.state.bookSearch);   
            })
            .catch(function (error){
                console.log("error in get");
            });
    }*/

    render(){
        return(
            <div>
                <form>
                    <label>
                        Search:
                    <input type="text" name="bookSearch" onChange={this.setInputChange}/>
                    </label>
                    <input type="submit" name="search" onClick={this.searchGoogleBook}/>
                </form>

                <table>
                       <tr>
                                        <th>Title</th>
                                        <th>Authors</th>
                                        <th>Description</th>
                                    </tr>
                                {this.state.books.map(book => {
                                    return(
                                        
                                            <tr>
                                                <td>{book.volumeInfo.title}</td>
                                                <td>{book.volumeInfo.authors} </td>
                                                <td>{book.volumeInfo.description} </td>
                                               

                                            </tr>                        
                                    );
                                })
                                }
                </table>                                
            </div>
        );
    }
}

export default Search;