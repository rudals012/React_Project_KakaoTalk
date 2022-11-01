import React, { useState } from 'react';
import {db, storage} from "../fbase";
import { collection, addDoc, query, onSnapshot, orderBy } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/ChatFactory.scss";


function ChatFactory({userObj}) {
  const [chat, setChat] = useState(""); 
  const [attachment, setAttachment] = useState("");

  const onSubmit = async(e) => {
    e.preventDefault();
    let attachmentUrl = "";
    if(attachment !== ""){
      const storageRef = ref(storage, `${userObj.uid}/${uuidv4()}`); // 폴더 이름은 사용자객체 id/ 유니크한 id가 파일이름이 됨
      const response = await uploadString(storageRef, attachment, 'data_url');
      //console.log(response);
      attachmentUrl = await getDownloadURL(ref(storage, response.ref));
    }

    await addDoc(collection(db, "tweets"), {
      text: chat,
      createAt: Date.now(),
      createId: userObj.uid,
      attachmentUrl //attachmentUrl : attachmentUrl 
    });
    setChat("");
    setAttachment("");
  }

  const onChange = e => {
    const {target: {value}} = e;
    setChat(value);
  }

  const onFileChange = e => {
    //console.log(e.target.files);
    const {target: {files}} = e;
    const theFile = files[0];
    const reader = new FileReader();
    /* 두가지 시점을 가지고 있음
    파일을 인식하는 시점 / 파일 인식을 끝내는 시점
     */

    // 웹브라우저가 파일 인식을 끝낸 시점
    reader.onloadend = (finishedEvent) => {
      // console.log(finishedEvent);
      const {currentTarget:{result}} = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {setAttachment("");};
  
  return (
    <form onSubmit={onSubmit} className="factoryForm">
      <label htmlFor="attach-file" className='factoryInput__label'>
        <span className='blind'>Add photos</span>
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </label>
      <input type="file" accept='image/*' onChange={onFileChange} id="attach-file" style={{opacity: 0,}} className="attach_file"/>
      <div className="factoryInput__container">
        <input type="text" className="factoryInput__input" placeholder="Please write" value={chat} onChange={onChange} maxLength={120}/>
        <input type="submit" value="&rarr;" className="factoryInput__arrow"/>
      </div>
      {/* {attachment && 
        <div>
          <img src={attachment} style={{backgroundImage: attachment,}} />
          <div className="factoryForm__clear" onClick={onClearAttachment}>
            <span>Remove</span>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </div>
        </div>
      } */}
    </form>
  )
}

export default ChatFactory