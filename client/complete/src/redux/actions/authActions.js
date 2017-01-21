import axios from 'axios';
import {browserHistory} from 'react-router';
import {Settings} from '../../settings';

export function setCurrentUser(user){
  return {
    type:'AUTH_USER',
    user
  }
}

function handleError(err){
  if(err.response){
    console.log(err.response.data.error);
  }else{
    console.log(err)
  }
}
export function login(data){
  return dispatch => {
    axios.post(`${Settings.host}/auth/login`,data).then(res => {
      const token = res.data.token;
      const user =res.data.user;
      console.log(res)
      sessionStorage.setItem('jwtToken',token);
      sessionStorage.setItem('user',JSON.stringify(user));
      dispatch(setCurrentUser(user));
      browserHistory.push('/');
      console.log('登陆成功了！')
    }).catch(err => {
      handleError(err)
    })
  }
}
