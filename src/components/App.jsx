import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";

import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json";
import { getRandomHexColor } from "./Statistics/GetRandomHexColor";

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
      <Statistics stats={data} color={getRandomHexColor} />
    </>
  );
}

export default App;
