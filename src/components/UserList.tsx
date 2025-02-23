import { useSelector } from "react-redux";
import { RootState } from "../store";

interface UserListProps {
  onUserSelect: (userId: number) => void;
}

export default function UserList({ onUserSelect }: UserListProps) {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <div className="w-1/4 bg-white p-4 shadow">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => onUserSelect(user.id)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}