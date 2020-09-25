import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_MOVIES_MANAGEMENT } from "../../constants/adminManagement";
import { getMovies } from "../../redux/slice/adminMoviesManagementSlice";
import AdminEdit from "./AdminEdit";

export default function AdminMoviesManagement() {
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div className="admin-movies-management">
          <table>
            <thead>
              <tr>
                {ADMIN_MOVIES_MANAGEMENT.map((e, i) => (
                  <th key={i}>{e}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {movies.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>
                    <img src={e.image} alt="" />
                  </td>
                  <td>{e.name}</td>
                  <td>{e.ratings}</td>
                  <td>{e.time}</td>
                  <td>{e.producer}</td>
                  <td>{e.type}</td>
                  <td>{e.actor}</td>
                  <td>{e.releaseDate}</td>
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
