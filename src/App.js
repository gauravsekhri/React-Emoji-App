import React, {useState} from "react";
import './App.css';

var headtext = "Emoji Fun Game";
var clickk = 0;

function App() {

  var emojiList = {
    "😄" : "Smiling",
    "😭" : "Crying",
    "❤️" : "Heart",
    "🤣" : "Laughing",
    "😠" : "Angry",
    "🤕" : "Injured",
    "😪" : "Sleepy",
    "🤒" : "Sick",
    "😞" : "Sad",
    "😨" : "Fear",
    "🤧" : "Sneeze"
    // "smiling" : "😄",
    // "crying" : "😭",
    // "heart" : "❤️",
    // "laughing" : "🤣",
    // "angry" : "😠"
  }

  var [userInput, setuserInput] = useState("");

  function InpChange(event){
    // setuserInput(event.target.value);

    var textInput = event.target.value;
    var meaning = emojiList[textInput];

    console.log(meaning);

    if(meaning === undefined){
      meaning = "Not found in Database";
    }

    setuserInput(meaning);

  }

  function emojiClick(emoji){
    console.log(emoji);
    var meaning = emojiList[emoji];
    setuserInput(meaning);
  }

  var emojiNew = Object.keys(emojiList);

  return (
    <div className="App">
      <h1>{headtext}</h1>
      <input type="text" onChange={InpChange} placeholder="Enter Emoji"></input> <br></br>

      {emojiNew.map( function(emoji){
      return <span className="emojies" onClick={() => emojiClick(emoji)} key={emoji}>
      {emoji}
      </span>
      
      })}

      <div className="output">{userInput}</div>

    </div>
  );
}

export default App;
