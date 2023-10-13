
const Prop = (props) =>{
    console.log(props);
    
    return(
        <div className="prop-page page">
            <h2>Prop.jsx</h2>
            <p>{props.name}</p>
        </div>
    );
}
export default Prop;