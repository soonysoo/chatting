import ButtonAppBar from './AppBar';
import ButtonRoom from './ButtonRoom';
import FaceGrid from './FaceGrid'

export default function ChattingList(){
    return(
      <div>
        <ButtonAppBar></ButtonAppBar>
        <FaceGrid></FaceGrid>
        <ButtonRoom name="방 나가기"></ButtonRoom>
      </div>
    );
}