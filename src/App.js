import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss"
import Header from "./components/Header";
import { auth } from "./firebase-config";
import {useAuthState} from 'react-firebase-hooks/auth'
import ChatroomSelector from "./components/ChatroomSelector";
import Messages from "./components/Messages"


function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="container" style={{width: "100%", padding:"0px", marginTop:"0px"}}>
      <div className="chatwrapper">
        <div className="chatwindow">
          <Header user={user}/>
          {
          user ?
            <ChatroomSelector/>:
          <div className='messageswindow'>
                  <p>Log in to enter chatrooms...</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
