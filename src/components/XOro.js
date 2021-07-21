import './XOro.css'

function xORo (props) {
  //console.log(props.el)
  let output = <p></p>
  if (props.el === undefined) {
    return null
  }
  if (props.el !== undefined) {
    output = <p>X</p>
    console.log('did it')
  }

  return output;
}

export default xORo;