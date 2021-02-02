import {connect} from 'react-redux';


const GamesList = props => {

   
    return (
    <div>
        <h4>List of Games found</h4>
        {props.games.map((games) => (
            <div>{games.title}</div>
        ))}
        
    </div>
        );
};

const mapStateToProps = (state) => {
    return{
        games: state.games
    }
}
   
export default connect(mapStateToProps) (GamesList); 