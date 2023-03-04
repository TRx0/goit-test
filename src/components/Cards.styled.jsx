import styled from '@emotion/styled';


export const Box = styled.div`
width: 308px;
height: 396px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
padding: 28px 36px 36px 36px;
position: relative;
`
export const Logo = styled.img`
position: absolute;
left: 20px;
right: 20px;
height:22px;
width:76px;
`
export const Profile = styled.li`
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top:178px;
`
export const BackgroundImage = styled.img`
margin-bottom:18px;
`
export const BackgroundLine = styled.img`
    
`
export const Avatar = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
export const AvatarBorder = styled.div`
height: 64px;
width: 64px;
background: #ebd8ff;
border: 8px solid rgba(0,0,0,0);
border-radius: 50%;
position: relative;
overflow: hidden;
box-shadow: 0 4.39163px 4.39163px rgb(0 0 0 / 6%), inset 0 -2.19582px 4.39163px #ae7be3, inset 0 4.39163px 3.29372px #fbf8ff;
margin-bottom: 26px;
`
export const Tweets = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #EBD8FF;
margin:0;
margin-bottom: 16px;
`
export const Followers = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #EBD8FF;
margin:0;
margin-bottom: 26px;
`
export const FollowButton = styled.button`
width: 196px;
height: 50px;
border-radius: 10.3108px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
cursor: pointer;
color: #373737;
border: none; 
background: ${(props) => props.backgroundColor};
`