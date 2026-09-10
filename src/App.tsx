import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'

function App() {
    const characters = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M",
        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "~","`","!","@","#","$","%","^","&","*","(",")","_",
        "-","+","=","{","[","}","]",",","|",":",";","<",">",
        ".","?","/"
    ];

    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    let characterLength = 15;

    function generatePasswords() {
        setPassword1(generatePassword())
        setPassword2(generatePassword())
    }

    function generatePassword() {
        let password = ""
        for (let i = 0; i < characterLength; i++) {
            let newCharacter = 
                characters[Math.floor(Math.random() * characters.length)]
            password += newCharacter
        }
        return password
    }

    return (
        <>
            <MainContent />
            <button onClick={generatePasswords}>
                Generate passwords
            </button>

            <div id="line"></div>
            <div className="password-output">
                {password1}
            </div>

            <div className="password-output">
                {password2}
            </div>
        </>
    )
}

export default App