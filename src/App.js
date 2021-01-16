import React,{Fragment} from 'react';
import Provider from './provider';
import Context from './context';


const Agent = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />
}

const AgentTwo = () => {
  return <AgentBond />
}

const AgentBond = () => {
  return (
    <Context.Consumer>
      {context => (<Fragment>
        <h3>Mission Information:</h3>
        <p>Mission name : {context.data.mname}</p>
        <h3>Mission status: {context.data.accept}</h3>
        <button onClick={context.isAccepted}>Toggle Mission Status</button>
      </Fragment>)}
    </Context.Consumer>
  )
}
const App = () => {
  return (
    <div>
      <h1>Context Api</h1>
      <Provider>
        <Agent />
      </Provider>
    </div>
  )
}

export default App
