//a reducer takes in two thins:
//
//1. the action (info about what happened)
//2. copy of current state

export default function posts(state = [], action) {
  console.log("STATE INSIDE POSTS => ", state)
  switch(action.type){
    case 'INCREMENT_LIKES':
      console.log("Incrementing Likes!")
      const i = action.index
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1)
      ]
    default:
      return state
  }
  return state
}