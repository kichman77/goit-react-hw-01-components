import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import users from './db/user.json';
import statData from './db/statistical-data.json';
import friendsDb from './db/friends.json';
import items from './db/transactions.json';
// console.log(users);
// console.log(statData);
// console.log(friedsDb);
// console.log(items);

function App() {
  const { name, tag, location, avatar, stats } = users;
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title='' stats={statData} />
      <FriendList friendsDb={friendsDb} />
      <TransactionHistory items={items}/>
    </div>
  );
}

export default App;
