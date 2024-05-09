let age = 20;

let message = age >= 18 ? "you get a licence" : "you dont get licence";
console.log(message);

// switch case statements//----====

let day = 5;
switch (day) {
  case 1:
    console.log("monday");
break;
case 2:
    console.log("tuesday")
    break;
    case 3:
        console.log("wednesday")
        break;
        case 4:
            console.log("thursday")
            break;
            case 5:
                console.log("friday")
                break;
                case 6: 
                console.log("saturday")
                break;
                case 7: 
                console.log("sunday")
                break;
  default:
    console.log("there is no day ")
    break;
}


// 3. Create a variable and make thier value dynamic by using ternary operator (?).  You can create any dynamic value or program//


let admin = true
let user = admin ? "Adminstrator": "regular user"
console.log(`userRole ${user}`)