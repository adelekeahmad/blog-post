import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from './image/in.png';
import pic2 from './image/whtsap.png';
import pic3 from './image/ytb.png';
import SingleComment from './SingleComment';
import UserCard from './UserCard';
const App = () => {
    return(
<div className='ui-comments'>
    <UserCard>
        <div>
         Hello guys, my name is Ahmad and I live in NewYork.   
        </div>
    </UserCard>
    <UserCard>
    <SingleComment 
    name='Bobby' 
    date='Today at 5:PM' 
    text='Hello G-Landers.'
    picture={ pic1 }
    />
    </UserCard>
    <UserCard>
    <SingleComment 
    name='Saint' 
    date='Today at 6:PM' 
    text='Hi G-Landee.'
    picture={ pic2 }
    />
    </UserCard>
    <UserCard>
    <SingleComment 
    name='Kay' 
    date='Toady at 7:PM' 
    text='We got you covered bro.'
    picture={ pic3 }
    />
    </UserCard>
</div>

    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)