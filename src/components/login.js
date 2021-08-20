import { authEndpoint, clientId, redirectUri, scopes } from "./config";


export const LoginBtn = () => {

  const handleLogin = () => {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;
  }

    return(
        <div className="login">
          <h2>Moosick</h2>
          <button type="submit"  onClick={handleLogin}>login</button>
        </div>
    )
}