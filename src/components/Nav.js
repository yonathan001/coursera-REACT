import avator from './avator.png';

function logo(props){
  const userPic = <img src={avator} />;
 return userPic;   
}

function Nav(){
    return(

        <div>
            <h1>this is avator</h1>
            <logo />
        </div>
    );
}

export default Nav;