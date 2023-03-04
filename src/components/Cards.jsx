import { Box , BackgroundImage, Avatar, Tweets,FollowButton,Followers, Profile, AvatarBorder, BackgroundLine, Logo} from "./Cards.styled";
import backgroundImage from "../images/background_image.png"
import backgroundLine from "../images/line.png"
import hansel from "../images/hansel.png"
import logo from "../images/logo.png"
import { useLocalStorageBoolean } from "react-use-window-localstorage";
import { useLocalStorageNumber } from "react-use-window-localstorage";


export const Card = () => {
 
const [isFollowing, setIsFollowing] = useLocalStorageBoolean(
    "boolValue",
    true
  );
  const [followers, setFolowers] = useLocalStorageNumber("follow", 100500);
  const [color, setIsColor] = useLocalStorageBoolean("boolValue", false);
  
const handleClick = () => {
    setIsColor(!color);
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      setFolowers(followers + 1);
    }
    if (isFollowing) {
      setFolowers(followers - 1);
    }
  };

  return (
    <Box >
      <Logo src={logo} alt="logo" />
      <BackgroundImage src={backgroundImage} />
      <BackgroundLine src={backgroundLine } />
        <Profile>
            <AvatarBorder>
              <Avatar src={hansel}  />
            </AvatarBorder>
          <Tweets>554 TWEETS</Tweets>
          <Followers>{followers.toLocaleString("ja-JP")} FOLLOWERS</Followers>    
          <FollowButton onClick={handleClick} backgroundColor={color ? "#5CD3A8;" : "#EBD8FF;"} > {isFollowing ? "FOLLOWING" : "FOLLOW"}</FollowButton> 
        </Profile>
      </Box>
   
  )
    
  
};
