import Stack from 'react-bootstrap/Stack';
import EditProfile from './EditProfile';
import Ads from './Ads';
import PepView from './PepView';

function RightSide() {
    return (
        <Stack className='RightSide' direction="stack">
            <div className="info">
                <h1><EditProfile/></h1>
                <h1><Ads/></h1>
                <h1><PepView/></h1>
            </div>
        </Stack>
    );
}

export default RightSide;