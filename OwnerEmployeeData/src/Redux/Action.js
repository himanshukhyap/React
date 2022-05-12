
export const Allemployeedata = (data) => {
  return {
    type: "getAllEmployee",
    data: data


  }
}
export const GetOwnerData = (data) => {
  
  return {
    type: "GetOwnerData",
    data: data

  }
}
export const loader = (data) => {
  
  return {
    type: "loader",
    data: data

  }
}
export const wrongInput = (data) => {
  
  return {
    type: "wrongInput",
    data: data

  }
}