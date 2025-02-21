import React, { useContext, useState } from 'react'
import {assets} from "../../assets/assets"
import "./Sidebar.css"
import { Context } from '../../contexts/Context'


const Sidebar = () => {

    const [extended,setExtended]=useState(true)
    const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context);

    const loadPrompt=async(prompt)=>{
        setRecentPrompt(prompt);
        await onSent(prompt)


    }

    


  return (
    <div className="sidebar">
        <div className="top">
            <img onClick={()=>{setExtended(extended?false:true)}} className="menu" src={assets.menu_icon} alt='menu-icon' />
            <div onClick={()=>newChat()} className="new_chat">
                <img src={assets.plus_icon}/>
                {extended?(<p>New Chat</p>):null}
            </div>


        {extended?
        <div className="recent">
                <p className="recent_title">Recents</p>

                {prevPrompt.map((item,index)=>{
                    return(
                        <>
                        <div onClick={()=>loadPrompt(item)} className="recent_entry">
                            <img src={assets.message_icon} alt="message-icon"/>
                            <p>{item.slice(0,18)}...</p>
                        </div>
                        
                        
                        </>


                    )


                })}



                
            </div>
        :null
      }

            

        </div>
        <div className="bottom">
            <div className='bottom_item recent_entry'>
                <img src={assets.question_icon}/>
                
                {extended?(<p >Help</p>):null}
            </div>

            <div className='bottom_item recent_entry'>
                <img src={assets.history_icon}/>
                
                {extended?(<p >Activity</p>):null}
            </div>

            <div className='bottom_item recent_entry'>
                <img src={assets.setting_icon}/>
                
                {extended?(<p >Settings</p>):null}
            </div>



        </div>
      
    </div>
  )
}

export default Sidebar
