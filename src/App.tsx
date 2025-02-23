import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { setUsers, setSelectedUser, setLoading, setError } from "./store/userSlice";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import { getUserDetails, getUsers } from "./services/api";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getUsers();
        dispatch(setUsers(data));
      } catch (err) {
        const error = err as Error;
        dispatch(setError(error.message || "Failed to fetch users"));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchUsers();
  }, [dispatch]);

  const handleUserSelect = async (userId: number) => {
    dispatch(setLoading(true));
    try {
      const userData = await getUserDetails(userId);
      dispatch(setSelectedUser(userData));
    } catch (err) {
      const error = err as Error;
      dispatch(setError(error.message || "Failed to fetch user details"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;
  if (error) return <div className="flex h-screen items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="flex h-screen bg-gray-100">
      <UserList onUserSelect={handleUserSelect} />
      <UserDetails />
    </div>
  );
}

export default App;