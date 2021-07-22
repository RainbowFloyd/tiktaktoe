import './Letter.css'

const Letter = (props) => {
  //console.log(props)
  let output = <p onClick={() => props.handleClick(props.squardNum)} className="square"></p>
  if (props.wasClicked === false) {
    output = <p
    onClick={() => props.handleClick(props.squardNum)}
    className="square">not clicked</p>
  }
  if (props.wasClicked === true) {
    output = <p
    onClick={() => props.handleClick(props.squardNum)}
    className="square">clicked!</p>
  }
  return output;
}

export default Letter;


