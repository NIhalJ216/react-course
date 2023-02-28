import React, { useState } from "react";
import dayjs from "dayjs";
import {
  Grid,
  Paper,
  TextField,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MealSummary from "./MealSummary";

function Home() {
  const [startDate, setHandledate] = useState(dayjs());
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isTrial, setIsTrial] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotTrial, setIsNotTrial] = useState(false);

  const [payload, setPayload] = useState({
    orderFor: "",
    lunch: false,
    dinner: false,
    lunchMealType: "",
    lunchTime: "",
    lunchMealInstruction: "",
    dinnerMealType: "",
    dinnerTime: "",
    dinnerMealInstruction: "",
  });

  const updatePayload = (pairs) =>
    setPayload((prevPayload) => ({ ...prevPayload, ...pairs }));

  const handleChange = (event) => {
    const { name, checked, value } = event.target;
    if (["dinner", "lunch"].includes(name)) {
      updatePayload({ [name]: checked });
    } else {
      if (value === "Trial") {
        setIsTrial(true);
      } else if (name === "orderFor") {
        setIsTrial(false);
        setIsNotTrial(true);
      }
      updatePayload({ [name]: value });
    }
  };

  const handleNext = () => {
    if (
      !payload.orderFor ||
      (payload.lunch && !payload.lunchMealType) ||
      (payload.lunch && !payload.lunchTime) ||
      (payload.dinner && !payload.dinnerMealType) ||
      (payload.dinner && !payload.dinnerTime)
    ) {
      setIsError(true);
    } else {
      let endDate;
      switch (payload.orderFor) {
        case "Trial":
          endDate = dayjs(startDate).format("DD-MMM-YYYY");
          break;
        case "Weekly":
          endDate = dayjs(startDate).add(6, "day").format("DD-MMM-YYYY");
          break;
        case "Monthly":
          endDate = dayjs(startDate).add(29, "day").format("DD-MMM-YYYY");
          break;
        default:
          break;
      }

      const {
        lunchMealType,
        lunchMealInstruction,
        dinnerMealType,
        dinnerMealInstruction,
      } = payload;

      if (endDate) {
        let currentDate = dayjs(startDate).format("DD-MMM-YYYY");
        let rowId = 0;
        const tempTableData = [];
        const lunchType = payload.lunch ? lunchMealType : "No Order";
        const lunchInstruction = payload.lunch ? lunchMealInstruction : "";
        const dinnerType = payload.dinner ? dinnerMealType : "No Order";
        const dinnerInstruction = payload.dinner ? dinnerMealInstruction : "";

        while (dayjs(currentDate).diff(endDate) <= 0) {
          if (isTrial) {
            if (isNotTrial) {
              tempTableData.push({
                rowId: tableData.length + 1,
                currentDate: dayjs(currentDate).format("DD-MMM-YYYY"),
                lunchType,
                lunchInstruction,
                dinnerType,
                dinnerInstruction,
              });
            } else {
              tempTableData.push(...tableData, {
                rowId: tableData.length + 1,
                currentDate: dayjs(currentDate).format("DD-MMM-YYYY"),
                lunchType,
                lunchInstruction,
                dinnerType,
                dinnerInstruction,
              });
            }
            setIsNotTrial(false);
          } else {
            tempTableData.push({
              rowId,
              currentDate: dayjs(currentDate).format("DD-MMM-YYYY"),
              lunchType,
              lunchInstruction,
              dinnerType,
              dinnerInstruction,
            });
          }
          currentDate = dayjs(currentDate).add(1, "day");
          rowId++;
        }

        setTableData(tempTableData);
      }
      setIsError(false);
      updatePayload({
        orderFor: "",
        lunch: false,
        dinner: false,
        lunchMealType: "",
        lunchTime: "",
        lunchMealInstruction: "",
        dinnerMealType: "",
        dinnerTime: "",
        dinnerMealInstruction: "",
      });
      setShowTable(true);
    }
  };

  console.log("Payloads", payload);
  console.log("TableDatas", tableData);

  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ width: "100%" }}>
          <Box style={{ width: "82rem" }}>
            <Grid item xs={12} p={3}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={4}
                  style={{ paddingTop: "0rem", marginTop: "1rem" }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      name="startDate"
                      label="Starting Date"
                      inputFormat="DD/MM/YYYY"
                      value={startDate}
                      onChange={(dt) => setHandledate(dt)}
                      renderInput={(params) => (
                        <TextField size="small" {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ paddingTop: "0rem", marginTop: "1rem" }}
                >
                  <FormControl error={isError && !payload.orderFor}>
                    <FormLabel>Meal for</FormLabel>
                    <RadioGroup
                      // defaultValue="female"
                      row
                      name="orderFor"
                      value={payload.orderFor}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Trial"
                        control={<Radio />}
                        label="Trial"
                      />
                      <FormControlLabel
                        value="Weekly"
                        control={<Radio />}
                        label="Weekly"
                      />
                      <FormControlLabel
                        value="Monthly"
                        control={<Radio />}
                        label="Monthly"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={4} p={3} style={{ paddingTop: "0rem" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={4} style={{ marginTop: "1.6rem" }}>
                      <Typography variant="body1">Select Meal :</Typography>
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: "1rem" }}>
                      <FormControlLabel
                        label="Lunch"
                        name="lunch"
                        labelPlacement="end"
                        control={<Checkbox onChange={handleChange} />}
                      />
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: "1rem" }}>
                      <FormControlLabel
                        label="Dinner"
                        name="dinner"
                        labelPlacement="end"
                        control={<Checkbox onChange={handleChange} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {payload.lunch && (
              <Grid item xs={12} p={3} style={{ paddingTop: "0rem" }}>
                <Grid container spacing={2}>
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}
                  >
                    Lunch
                  </Typography>
                  <Grid item xs={12} style={{ paddingTop: "0rem" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            xs={3}
                            style={{ paddingTop: "0rem", marginTop: "1rem" }}
                          >
                            <FormControl
                              fullWidth
                              size="small"
                              error={isError && !payload.lunchMealType}
                            >
                              <InputLabel>Meal type</InputLabel>
                              <Select
                                value={payload.lunchMealType}
                                label="Meal Type"
                                name="lunchMealType"
                                onChange={handleChange}
                              >
                                <MenuItem value="Veg Meal">Veg</MenuItem>
                                <MenuItem value="Non-veg Meal">Nonveg</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            style={{ paddingTop: "0rem", marginTop: "1rem" }}
                          >
                            <FormControl
                              fullWidth
                              size="small"
                              error={isError && !payload.lunchTime}
                            >
                              <InputLabel>Meal Time</InputLabel>
                              <Select
                                value={payload.lunchTime}
                                label="Lunch Time"
                                name="lunchTime"
                                onChange={handleChange}
                              >
                                <MenuItem value="12pm - 01pm">
                                  12:00pm to 01:00pm
                                </MenuItem>
                                <MenuItem value="01pm - 02pm">
                                  01:00pm to 02:00pm
                                </MenuItem>
                                <MenuItem value="02pm - 03pm">
                                  02:00pm to 03:00pm
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            style={{ paddingTop: "0rem", marginTop: "1rem" }}
                          >
                            <FormControl
                              fullWidth
                              size="small"
                              error={isError && !payload.lunchMealInstruction}
                            >
                              <InputLabel>Meal Instruction</InputLabel>
                              <Select
                                value={payload.lunchMealInstruction}
                                label="Meal Instruction"
                                name="lunchMealInstruction"
                                onChange={handleChange}
                              >
                                <MenuItem value="Standard Meal">
                                  Standard meal
                                </MenuItem>
                                <MenuItem value="Roti without Rice">
                                  Roti without rice
                                </MenuItem>
                                <MenuItem value="Paratha without Rice">
                                  Paratha without rice
                                </MenuItem>
                                <MenuItem value="Rice only">Rice only</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}

            {payload.dinner && (
              <Grid item xs={12} p={3} style={{ paddingTop: "0rem" }}>
                <Grid container spacing={2}>
                  <Typography
                    variant="h6"
                    style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}
                  >
                    Dinner
                  </Typography>
                  <Grid item xs={12} style={{ paddingTop: "0rem" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            xs={3}
                            style={{ paddingTop: "0rem", marginTop: "1rem" }}
                          >
                            <FormControl
                              fullWidth
                              size="small"
                              error={isError && !payload.dinnerMealType}
                            >
                              <InputLabel>Meal type</InputLabel>
                              <Select
                                value={payload.dinnerMealType}
                                label="Meal Type"
                                name="dinnerMealType"
                                onChange={handleChange}
                              >
                                <MenuItem value="Veg Meal">Veg</MenuItem>
                                <MenuItem value="Non-veg Meal">Nonveg</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            style={{ paddingTop: "0rem", marginTop: "1rem" }}
                          >
                            <FormControl
                              fullWidth
                              size="small"
                              error={isError && !payload.dinnerTime}
                            >
                              <InputLabel>Meal Time</InputLabel>
                              <Select
                                value={payload.dinnerTime}
                                label="Lunch Time"
                                name="dinnerTime"
                                onChange={handleChange}
                              >
                                <MenuItem value="07pm - 08pm">
                                  07:00pm to 08:00pm
                                </MenuItem>
                                <MenuItem value="08pm - 09pm">
                                  08:00pm to 09:00pm
                                </MenuItem>
                                <MenuItem value="09pm - 10pm">
                                  09:00pm to 10:00pm
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            style={{ paddingTop: "0rem", marginTop: "1rem" }}
                          >
                            <FormControl
                              fullWidth
                              size="small"
                              error={isError && !payload.dinnerMealInstruction}
                            >
                              <InputLabel>Meal Instruction</InputLabel>
                              <Select
                                value={payload.dinnerMealInstruction}
                                label="Meal Instruction"
                                name="dinnerMealInstruction"
                                onChange={handleChange}
                              >
                                <MenuItem value="Standard Meal">
                                  Standard meal
                                </MenuItem>
                                <MenuItem value="Roti without Rice">
                                  Roti without rice
                                </MenuItem>
                                <MenuItem value="Paratha without Rice">
                                  Paratha without rice
                                </MenuItem>
                                <MenuItem value="Rice only">Rice only</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              p={3}
              style={{ paddingTop: "0rem", marginTop: "1rem" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ paddingTop: "0rem" }}>
                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        {showTable && (
          <Paper elevation={3} style={{ width: "100%", marginTop: "1rem" }}>
            <Box style={{ width: "82rem" }}>
              <Grid item xs={12} p={3}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    style={{ paddingTop: "0rem", marginTop: "1rem" }}
                  >
                    <MealSummary tableData={tableData} />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}

export default Home;
