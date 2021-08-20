export const SearchBar = () => {
    return (
        <div >
          <div className="navBar">
            <h1 className="navBrand">Moosick</h1>
            <div className="searchContainer">
              <input  onChange={handleSetSearchKey} />
              <button type="submit" onClick={handleSearchPlaylist}>submit</button>
            </div>
          </div>
          <ul>
            <li><a className="active" href="./create-playlist">Home</a></li>
            <li><a href="#create">Create Playlist</a></li>
            <TransitionsModal/>
            <li className="logout"><a href="/">Logout</a></li>
          </ul>
        </div>
      )
}