// valid function to check all feilds in sign_up.html
function valid() {
    var name = document.getElementById('inputName3').value
    var email = document.getElementById('inputEmail3').value
    var password = document.getElementById('inputPassword3').value
    var c_password = document.getElementById('inputPassword4').value
    var error_msg = document.getElementById('error_msg')
    var c_box = document.getElementById('gridCheck1').value
    var text
    error_msg.style.padding = "10px"
    if (name.length < 5) {
      text = "please enter valid name"
      error_msg.innerHTML = text
      return false
    }
  
    if (email.indexOf("@") == -1 || email.length < 10) {
      text = "please enter valid Email"
      error_msg.innerHTML = text
      return false
    }
    if (password.length < 6) {
      text = "please enter valid password"
      error_msg.innerHTML = text
      return false
    }
    if (password == '' || c_password == '') {
      text = 'no password was entered'
      error_msg.innerHTML = text
      return false
    }
  
    if (password != c_password) {
      text = "passwords do not matches"
      error_msg.innerHTML = text
      return false
    }
  
    return true
  }