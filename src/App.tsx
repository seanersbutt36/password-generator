import './components/MainContent'
import './App.css'
import MainContent from './components/MainContent'

function App() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]

    let password1El = document.getElementById("password1-el")!
    let password2El = document.getElementById("password2-el")!
    let characterLength = 15;

    function generatePasswords() {
        let passwords = []
        for (let i = 0; i < 3; i++) {
            let newPassword = generatePassword()
            passwords.push(newPassword)
        }
        password1El.textContent = passwords[0]
        password2El.textContent = passwords[1]
    }

    function generatePassword() {
        let password = ""
        for (let i = 0; i < characterLength + 1; i++) {
            let newCharacter = 
                characters[Math.floor(Math.random() * characters.length)]
            password += newCharacter
        }
        return password
    }

    return (
        <>
            <MainContent />
            <button onClick={generatePasswords}>Generate passwords</button>
            <div id="line"></div>
            <div id="password1-el" className="password-output"> </div>
            <div id="password2-el" className="password-output"> </div>
        </>
    )
}

export default App