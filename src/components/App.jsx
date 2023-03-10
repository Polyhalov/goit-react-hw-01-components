import user from 'user.json'
import { Profile } from './profile/Profile';

import { Statistics } from './statistics/Statistics';
import data from 'data.json';

import friends from 'friends.json';
import { FriendList } from './friendlists/FriendList';

import transactions from 'transactions.json'
import { TransactionHistory } from './transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
  