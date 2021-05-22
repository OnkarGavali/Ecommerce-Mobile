export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email || email.length <= 0) return "Email can't be empty."
    if (!re.test(email)) return 'Ooops! We need a valid email address.'
    return ''
  }


export function passwordValidator(password) {
  
    if (!password || password.length <= 0) return "Password can't be empty."
    if (password.length < 8) return "Password can't be less than 8 ."
    return ''
  }




export function UserNameValidator(UserName) {
  
  if (!UserName || UserName.length <= 0) return "UserName can't be empty."
  if (UserName.length < 6) return "UserName can't be less than 6 ."
  return ''
}



export function isEmpty (value) {
  if(
    value === undefined || 
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0))
    {
      return true
    }
    else{
      return false
    }

}
const Validation = { emailValidator, passwordValidator,UserNameValidator,isEmpty};
export default Validation;