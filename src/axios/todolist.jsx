import Axios from "axios";


export function getTodoList(){
    Axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos").then(
      (res) => {
        if (res.data.code === 200) {
            console.log(res)
          return { res.data.data };
        }
      }
    );
}