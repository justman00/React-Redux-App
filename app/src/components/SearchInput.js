import {useState} from "react"
import {connect} from 'react-redux';

import {fetchGames} from '../actions'

const SearchInput = (props) => {

    const [inputValue , setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchGames(inputValue)
    }
    return( 
    <div>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValue} />
        <button type = "submit">
            {props.loading ? 'Is Loading' : "Search Games"}
        </button>
    </form>
    {props.error ? <div style = {{color:"red" }}>{props.error}</div> : null }
   
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
} ;
const mapDispatchToProps = {
    fetchGames
}

export default connect(mapStateToProps,mapDispatchToProps) (SearchInput);