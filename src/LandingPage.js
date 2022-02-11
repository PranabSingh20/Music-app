import "./LandingPage.css"
import { LeftConatainer } from './Components/LeftConatainer';
import { MainContainer } from './Components/MainContainer';
import {SongProvider} from './SongContext';

function LandingPage({accessToken}) {
  console.log(accessToken);
  return (
    <SongProvider>
      <div className="LandingPage">
        <LeftConatainer accessToken={accessToken}/>
        <MainContainer accessToken={accessToken}/>
        <div className='background'></div>
      </div>
    </SongProvider>
  );
}

export default LandingPage;
