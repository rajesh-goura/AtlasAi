import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../contextt/Context';
const Sidebar = () => {
    const[extend,Setextend]=useState(false);
    const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context)

    const loadPrompt = async(prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <>
    <div className="Sidebar">
        <div className="top">
            <img onClick={()=> Setextend(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div onClick={()=>newChat()} className="new-chat">
                <img  src={assets.plus_icon} alt="" />
                {extend?<p>new chat</p>:null}
            </div>
            {extend?
                <div className="recent">
                    <p className='recent-title'>Recent</p>
                    {prevPrompts.map((item,index)=>{
                        return(
                            <div onClick={()=>loadPrompt(item)} className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>{item.slice(0,18)}...</p>
                            </div>
                        )
                    })}

                </div>:null
            }
            
        </div>
        <div className="bottom">
            
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extend?<p>Help</p>:null}
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extend?<p>Activities</p>:null}
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extend?<p>Settings</p>:null}
            </div>


        </div>
    </div>
    </>
  )
}

export default Sidebar
