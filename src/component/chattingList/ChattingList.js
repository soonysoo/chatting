import ButtonAppBar from './AppBar';
import FullWidthTabs from './SelectChatTab';
import ButtonRoom from './ButtonRoom';
import ChipsRoom from './ChipsRoom';

export default function ChattingList(){
    return(
        <div>
            <ButtonAppBar></ButtonAppBar>
            <ChipsRoom></ChipsRoom>
            <FullWidthTabs></FullWidthTabs>
            <ButtonRoom></ButtonRoom>
        </div>
    );
}