import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  tableCellClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "./MealSummary.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function MealSummary({ tableData }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = [
    { id: "date", label: "Date" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log("TableData", tableData);

  return (
    // <Paper sx={{ width: "100%", overflow: "hidden" }}>
    <>
      <TableContainer sx={{ maxHeight: 440, pr: 0.5 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <b>{column.label}</b>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => {
              return (
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.rowId}
                >
                  <StyledTableCell key={row.rowId}>
                    <Typography> {row.currentDate}</Typography>
                  </StyledTableCell>
                  <StyledTableCell key={row.rowId}>
                    <Typography> {row.lunchType}</Typography>
                    <Typography>
                      {row.lunchInstruction && `(${row.lunchInstruction})`}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell key={row.rowId}>
                    <Typography> {row.dinnerType}</Typography>
                    <Typography>
                      {row.dinnerInstruction && `(${row.dinnerInstruction})`}
                    </Typography>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default MealSummary;
