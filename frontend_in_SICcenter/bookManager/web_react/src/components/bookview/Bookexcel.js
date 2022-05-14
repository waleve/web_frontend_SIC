import React from "react";
import {Link} from "react-router-dom";
import {Book} from "./book";
import {getBooks} from "../../services/bookService";

export class BookExcel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            initialData:[],
            data:[],
            descending: false,
            edit: null, // [row index, cell index],
            search: false,
            preSearchData: this.props.initialData,
        };
    }

    componentDidMount() {
        const callback =  (data) => {
            console.log(data);
            this.setState({data:data});
            this.setState({initialData:data});
        };
        getBooks({"search":null}, callback);
    }


    search = (e) => {
        this.preSearchData = this.state.data;
        let needle = e.target.value.toLowerCase();  //toLowerCase:将大写转化为小写
        if (!needle) {
            this.setState({data: this.state.initialData});
            return;
        }
        // let searchdata = this.props.initialData.filter(function (row) {
        //     return row[0].toString().toLowerCase().indexOf(needle) > -1;
        // });
        let searchdata = this.state.data.filter(function (row) {
            return row.name.toString().toLowerCase().indexOf(needle) > -1;
        });
        this.setState({data: searchdata});
    };

    render() {
        return(
                <div>
                    <div className={"searchBook"}>
                        <input onChange={this.search} type={"text"} placeholder={"Search"}/>
                    </div>
                    {this.state.data.map(function (row,idx){
                            return(
                                // <Link to={"/BookDetails/" + (idx)}>
                                <Link to={"/BookDetails/" + (row.bookId)}>
                                    {/*<Book key={idx} className="bookCard" name={row[1]} author={row[1]} language={row[2]} time={row[3]} price={row[4]} image={row[5]} order={idx} />*/}
                                    <Book key={idx} className="bookCard" name={row.name} author={row.author} language={row.type} time={row.inventory} price={row.price} image={row.image} order={row.bookId} />
                                </Link>
                            )
                        })}
                </div>
        )
    }
}

// BookExcel.propTypes = {
//     initialData: PropTypes.arrayOf(
//         PropTypes.arrayOf(
//             PropTypes.string
//         )
//     ),
// };

