import avator from './avator.png';

function Logo(props){
  const userPic = <img src={avator} alt='img1' />;
 return userPic;   
}

function App(){
    return(

        <div>
            <h1>this is avator</h1>
            <Logo />
        </div>
    );
}

export default App;

