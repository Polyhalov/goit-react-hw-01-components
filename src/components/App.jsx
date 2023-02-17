import user from 'user.json'
import { Profile } from './profile/Profile';
export const App = () => {
  return (
    <div>
      <Profile items={user}/>
    </div>
  );
};
   // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}