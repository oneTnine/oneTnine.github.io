import React from 'react';
import ReactDOM from 'react-dom';
import Grouptalk from 'components/Grouptalk';
import Directtalk from 'components/Directtalk';
import Chatlog from 'components/Chatlog';
import 'css/index.css';
import 'css/reset.css';
import logo from 'img/oneTnine_Talk_logo_White.svg';

const App = () => {

	return (
		<div>
            <header className="main-header">
                <div className="logo-container" >
                <a href="/"><img src={logo} alt="oneTnine talk logo" className="logo"/></a>
                <a href="/" className="logo-txt">TALK</a>
                </div>
            </header>
      
            <aside className="side-info open" id="others">
                <section className="left-panel">
                    <div className="org-details">
                        <a href="#" className="org-name">TD Bank</a>
                        <ul className="log-details">
                            <a href="#">Good Morning Bijaya !</a>
                        </ul>
                    </div>
                    <hr/>
                    {/* group talk */}
                    <div className="sub-section">
                        <a href="#" className="sub-heading">Group Talk</a>
                        <Grouptalk/>{/* component */}
                    </div>

                    {/* direct talk */}
                    <div className="sub-section">
                        <a href="#" className="sub-heading">Direct Talk</a>
                        <Directtalk/>{/* component */}
                    </div>
                </section>

                <button className="toggle-side" id="btnOthers">
                    <span>Talks</span>
                </button>
            </aside>
            
            <main className="conversation" id="conversation">
                <h2 className="chat-header">Your talk with Tim Martin</h2>
                <hr/>
                {/* chat log */}
                <Chatlog/>{/* component */}
                <br/>
                
                <footer className="message-footer">
                    <div className="new-message">
                        <textarea name="message" className="new-message-form"></textarea>
                        <input type="submit" value="SEND" className="send-btn"/>
                    </div>
                </footer>
            </main>
        </div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));

