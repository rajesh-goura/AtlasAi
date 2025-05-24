import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../contextt/Context'

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,setInput,input,resultData}=useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Atlas</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult?
                <div>
                                <div className="greet">
                <p><span>Hello, I am Atlas</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to visit on a road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to visit on a road trip</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to visit on a road trip</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to visit on a road trip</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

                </div>
                : <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                        
                    </div>
                </div>
            }


            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>

                <div className="bottom-info">
                    <p>AtlasAi is made by using google gemini AI model, it may display inaccurate info, including about people, so double-check its responses.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Main
