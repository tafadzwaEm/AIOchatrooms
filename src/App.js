import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss"
import Header from "./components/Header";
import Messages from "./components/Messages";
import Sendmessage from "./components/Sendmessage";
import { auth } from "./firebase-config";
import {useAuthState} from 'react-firebase-hooks/auth'


function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="container">
      <div className="chatwrapper">
        <div className="chatwindow">
          <Header user={user}/>
          {
          user ? <>
            <Messages user={user}/>
            <Sendmessage/> 
          </>:
          <div className='messageswindow'>
                  <p>Log in to join the conversation...</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
