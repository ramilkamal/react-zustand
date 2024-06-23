import { useUsersStore } from '../model/users';

export const Users = () => {
  const users = useUsersStore((state) => state.users);
  const addUsers = useUsersStore((state) => state.addUser);

  const handle = () => {
    addUsers('new user')
  }

  return (
    <div className="users">
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>{user.id}. {user.username}</div>
      ))}
      <button onClick={handle}>create user</button>
    </div>
  );
};
