import axios from "axios"
import { server ,server1} from "../store"

export const loadHospital = (credential) => async (dispatch) => {
    try {
      dispatch({
        type: "loadHospRequest",
      });
      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const {data} = await axios.post(`${server}/hospital/login`, credential, config);
      
      dispatch({
        type: "loadHospSuccess",
        payload: data,
      });
    } catch (error) {
       
       
      dispatch({
        type: "loadHospFail",
        payload: error.response.data.message,
      });
      
    }
  };



  export const logoutHospital = (credential) => async (dispatch) => {
    try {
      dispatch({
        type: "logoutRequest",
      });
     
    await axios.get(`${server}/hospital/logout`,{
        withCredentials:true
      });
      
      dispatch({
        type: "logoutSuccess",

      });
    } catch (error) {
       
       
      dispatch({
        type: "logoutFail",
        payload: error.response.data.message,
      });
      
    }
  };

  export const adminloadUser= ()=>async(dispatch)=>{
    try {
      dispatch({
        type:"loadUserRequest"
      })
      const {data}= await axios.get(`${server1}/admin/users`)
       dispatch({
        type:"loadUserSuccess",
        payload:data.users
       })
     
  
    } catch (error) {
      dispatch({
        type:"loadUserFail",
      })
    }
  }
  export const adminDeleteUser = (id)=>async(dispatch)=>{
    try {
    
      dispatch({
        type:"deleteUserRequest"
      })
      await axios.delete(`${server}/admin/user/${id}`)

      const {data}= await axios.get(`${server1}/admin/users`)
       dispatch({
        type:"loadUserSuccess",
        payload:data.users
       })
      
    } catch (error) {
      // console
      dispatch({
        type:"deleteUserFail",
        payload:"Error in deleting"
      })
    }
  }