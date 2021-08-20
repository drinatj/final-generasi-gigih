import React from 'react';
import './App.css';
import {LoginBtn} from "./components/login";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import configureStore from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from './store/token';
import { Provider } from 'react-redux';

const store = configureStore;

function App() {

  const {accessTokenBearer} = useSelector((state) => state.token)
  const dispatch = useDispatch();

  function loginComponent(){
    dispatch(getToken());
    let component;
    if (accessTokenBearer === "Bearer null" || accessTokenBearer === ""){
      console.log('ga masok')
      component = <LoginBtn/>
    }else{
      component = <Redirect to="/dashboard"/>
    }
    return component
  }
  
  // const [accessToken, setAccessToken] = useState()
  // const [isAuthentic, setAuthentic] = useState(false)

  // const getParamsFromUrl = (hash) => {
  //   const stringAfterHashtag = hash.substring(1)
  //   const paramsInUrl = stringAfterHashtag.split("&")
  //   const paramsSplitUp = paramsInUrl.reduce((acc, currentVal) => {
  //     const [key, value] = currentVal.split("=")
  //     acc[key] = value
  //     return acc
  //   }, {})
  //   return paramsSplitUp
  // }

  // //ambil token
  // useEffect(() => {
  //   if (window.location.hash) {
  //     const {access_token} = getParamsFromUrl(window.location.hash)
  //     setAccessToken(access_token)
  //   }
  //   if (accessToken){
  //     setAuthentic(true)
  //   }
  // }, [accessToken])

  return (
    <Provider store={store}>
      <Router>
      <Switch>
      <Route exact path="/" component={loginComponent}>
        </Route>
        <Route  path="/dashboard" component={Home}>
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
