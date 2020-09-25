import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_USERS_MANAGEMENT } from "../../constants/adminManagement";
import { getUsers } from "../../redux/slice/adminUsersManagementSlice";
import AdminEdit from "./AdminEdit";

export default function AdminUsersManagement() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div className="admin-users-management">
          <table>
            <thead>
              <tr>
                {ADMIN_USERS_MANAGEMENT.map((e, i) => (
                  <th key={i}>{e}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>{e.region}</td>
                  <td>{e.birthday}</td>
                  <td>{e.gender}</td>
                  <td>
                    <AdminEdit />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
