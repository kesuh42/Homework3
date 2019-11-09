            //determine password length
            function passwordLengthFinder() {
                var passwordLength = parseInt(prompt("How many characters do you need?"))
                if (passwordLength < 8 || passwordLength > 128) {
                    alert("Your password length is invalid")
                    return passwordLengthFinder();
                }
                else {
                    return passwordLength
                }
            }
            //generate an array with all possible password characters
            function includedCharacters() {
                var includeSpecial = confirm("Include $pecial characters?");
                var includeNumeric = confirm("Include numer1c characters?");
                var includeLowercase = confirm("Include lowercase characters?");
                var includeUppercase = confirm("Include UPPERCASE characters?");

                var inclusionArray = [];
                if (includeSpecial) {
                    inclusionArray.push("'", " ", "!", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~");
                }
                if (includeNumeric) {
                    inclusionArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
                }
                if (includeLowercase) {
                    inclusionArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
                }
                if (includeUppercase) {
                    inclusionArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
                }
                //if no options are chosen
                if (includeSpecial === false && includeNumeric === false && includeLowercase === false && includeUppercase === false) {
                    alert("You gotta have something...");
                    return includedCharacters();
                }
                else {
                return inclusionArray
                }
            }
            //generate the password
            function generatePassword() {
                var passwordLength = passwordLengthFinder()
                var inclusionArray = includedCharacters()
                var passwordString = ""
                for (i = 0; i < passwordLength; i++) {
                    var rand = inclusionArray[Math.floor(Math.random() * inclusionArray.length)];
                    passwordString = passwordString + rand
                }
                return passwordString
            }

            var passwordButton = document.getElementById("passwordgenerator")
            var returnPassword = document.getElementById("passwordinsert")
            var copyClipboard = document.getElementById("clipboard")

            //Generate Password Button
            passwordButton.addEventListener("click", function() {
                returnPassword.textContent = generatePassword()
            })

            //Copy Button
            copyClipboard.addEventListener("click", function() {
                var text = document.createElement("textarea")
                text.value = returnPassword.textContent
                document.body.appendChild(text)
                text.focus();
                text.select();
                document.execCommand("copy");
                alert("Copied text")
                document.body.removeChild(text)
            })