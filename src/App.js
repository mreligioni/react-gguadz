import React from 'react';
import './style.css';
import data from './data.js';
import Iframe from './IFrame.js';

/*
Instruction: Write a simply chat using React and css. Iframe is added as a final result Points to do:
1. Modify the data in component and display the messages. Show the author and content of message. Messages should be sorted by date
2. Add the functionality of adding messages to the chat
3. Use style.css to style chat 
4. Possible to scroll only content in chat
5. Send message using `Enter` key
6. Clear message after send
7. After send message scroll chat to the last message
8. If 2 or more messages are consecutive, hide the author
9. Your own messages should appear on the right. Rest on the left
*/

export default function App() {
  return (
    <>
      <div>
        <h1>Chat</h1>
        <div>Message 1</div>
        <div>Message 2</div>
        <input type="text" />
      </div>
      <Iframe />
    </>
  );
}
