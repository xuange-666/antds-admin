import axios from "axios"
//同步向store获取state
let requestTable = (data) => {    //派发action
    return {
      type:"ajaxTable",
      data
    }
}

//异步请求
let requestTableAsync = () => {
  return async (dispatch) => {
    //异步代码
    let { data } = await axios.get("http://127.0.0.1:9000/users")
    dispatch(requestTable(data))
  }
}

export default requestTableAsync;