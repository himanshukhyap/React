
let data = []
export default function Reducer(state = data, Action) {

  switch (Action.type) 
  {
    case "getAllEmployee": state = []
      return state.concat(Action.data)


    default:
      return state;
  }
}

export function OwnerData(state={} , Action) {

  switch (Action.type) {
  
    case "GetOwnerData": return  Action.data

    default:
      return state;
  }
}


export function loader(state=true, Action) {

  switch (Action.type) {
    case "loader": 
     return Action.data;
  
    default:
      return state;
  }
}

export function wrongInput(state=false, Action) {

  switch (Action.type) {
    case "wrongInput": 
     return Action.data;
  
    default:
      return state;
  }
}