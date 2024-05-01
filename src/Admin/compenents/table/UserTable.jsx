import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllHospitals, updateHospitalStatus, deleteHospital ,getHospitalDetails, loadUser} from "../../../actions/userAction";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";
import { adminDeleteUser, adminloadUser } from "../../../actions/hospitalAction";

const makeStyle = (status) => {
  if (status === "confirmed") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
      cursor: "pointer",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
      cursor: "pointer",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
      cursor: "pointer",
    };
  }
};

export default function BasicTable(props) {
  const { error,adminUser } = useSelector((state) => state.adminuser);

  const dispatch = useDispatch();





 const deleteHandler = async(id)=>{
 dispatch(adminDeleteUser(id))
 }

  useEffect(() => {
    // if (error) {
    //   alert(error);
    // }

    dispatch(adminloadUser());
  }, [dispatch, error]); 

  return (
    <div className="Table">
      <h3>{props.title}</h3>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        <Table sx={{ minWidth: 850 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell>Hospital</TableCell>
              <TableCell align="left">Contact No</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {adminUser&& adminUser.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.gender}</TableCell>
                
               
                <TableCell align="left" className="Details">
                  <button onClick={()=>deleteHandler(row._id)} >Delete</button> 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    //onClick={() => handleDeleteHospital(row._id)}
  );
}
