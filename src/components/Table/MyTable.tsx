import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getAllUsers } from "../../utils/userThunk";
import { User } from "../../types/userType";
import { createData } from "../../utils/createData";
import { filterUsers } from "../../utils/filterUsers";

export function MyTable() {
  const dispatch: AppDispatch = useDispatch();

  const users = useSelector((state: RootState) => state.users.users);
  const filter = useSelector((state: RootState) => state.users.filter);
  const search = useSelector((state: RootState) => state.users.search);
  

  const filteredUsers = filterUsers(users, filter, search);

  const rows = filteredUsers.map((user: User) =>
    createData(user.name, user.username, user.email, user.phone)
  );

  console.log(users)

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        {rows.length > 0 ? (
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell align="center">Oooops! There is no user with such {filter}</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
