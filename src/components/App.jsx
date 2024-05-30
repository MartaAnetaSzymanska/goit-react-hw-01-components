import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}></Profile>
    </>
  );
}

export default App;
