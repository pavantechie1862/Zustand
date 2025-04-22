import React, { useEffect } from "react";
import { useUserApiStore } from "../Store/AsyncStore";

const UsersList: React.FC = () => {
  const { data, status, error, fetchData, hasFetched } = useUserApiStore();

  useEffect(() => {
    if (!hasFetched) {
      fetchData();
    }
  }, [hasFetched, fetchData]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      {status === "success" && data ? (
        <ul>
          {data.map((user: any) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <button onClick={fetchData}>Load Users</button>
      )}
    </div>
  );
};

export default UsersList;
