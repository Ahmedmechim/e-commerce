import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "react-bootstrap";
import EditProduct from "./EditProduct";


const OwnerProduct = () => {
  const dispatch = useDispatch();
  const  product  = useSelector((state) => state.product);
  const theUsers = useSelector((state) => state.user);
const { user } = theUsers;
  const {allProducts}=product
  let myProducts= allProducts.filter(el=>el.userID===user._id)
  const columns = [
      {
        id: "_id",
        label: "ref",
        minWidth: 170,
        align: "center",
      },
    {
      id: "productName",
      label: "Product name",
      minWidth: 170,
      align: "center",
    },
    {
      id: "quantity",
      label: "quantity",
      minWidth: 170,
      align: "center",
    },
    {
      id: "delete",
      label: "Delete Product",
      minWidth: 170,
      align: "center",
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead style={{zIndex:"0"}}>
              <TableRow style={{zIndex:"0"}}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth ,zIndex:0 }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {myProducts.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                          
                        <TableCell key={column.id} align={column.align}>
                          {
                          column.id === "delete"
                            ?
                            <div>
                                <EditProduct productEdit={row}/>
                            </div>
                            :
                             value}
                        </TableCell>
                        
                        
                      );
                      
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={myProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default OwnerProduct;
