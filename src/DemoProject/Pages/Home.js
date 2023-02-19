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
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function Home() {
  const [handledate, setHandledate] = useState(dayjs());
  const [payload, setPayload] = useState({
    trial: false,
    weekly: false,
    monthly: false,
    lunch: false,
    dinner: false,
    mealType: "",
    lunchTime: "",
    mealInstruction: "",
  });

  const updatePayload = (pairs) =>
    setPayload((prevPayload) => ({ ...prevPayload, ...pairs }));

  const handleChange = (event) => {
    console.log("Event", event.target.name, event.target.value);
    const { name, checked, value } = event.target;
    // updatePayload({ [name]: checked });
    updatePayload({ [name]: value });
  };
  // console.log("Payloads", payload);
  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ width: "100%" }}>
          <Box style={{ width: "82rem" }}>
            <Grid item xs={12} p={3}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      name="startDate"
                      label="Starting Date"
                      inputFormat="DD/MM/YYYY"
                      value={handledate}
                      onChange={(dt) => setHandledate(dt)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={8}>
                  <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                      <FormControlLabel
                        label="Trial"
                        name="trial"
                        labelPlacement="end"
                        control={<Checkbox onChange={handleChange} />}
                      />
                    </Grid>
                    <Grid item xs={2.5}>
                      <FormControlLabel
                        label="Weekly"
                        name="weekly"
                        labelPlacement="end"
                        control={<Checkbox onChange={handleChange} />}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        label="Monthly"
                        name="monthly"
                        labelPlacement="end"
                        control={<Checkbox onChange={handleChange} />}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} p={3}>
              <Grid container spacing={2}>
                <Grid item xs={1}>
                  <FormControlLabel
                    label="Lunch"
                    name="lunch"
                    labelPlacement="end"
                    control={<Checkbox onChange={handleChange} />}
                  />
                </Grid>
                <Grid item xs={1}>
                  <FormControlLabel
                    label="Dinner"
                    name="dinner"
                    labelPlacement="end"
                    control={<Checkbox onChange={handleChange} />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} p={3}>
              <Grid container spacing={2}>
                <Typography variant="h6">Lunch</Typography>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={3}>
                          <FormControl fullWidth>
                            <InputLabel>Meal type</InputLabel>
                            <Select
                              value={payload.mealType}
                              label="Meal Type"
                              name="mealType"
                              onChange={handleChange}
                            >
                              <MenuItem value="veg">Veg</MenuItem>
                              <MenuItem value="nonveg">Nonveg</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                          <FormControl fullWidth>
                            <InputLabel>Meal Time</InputLabel>
                            <Select
                              value={payload.lunchTime}
                              label="Lunch Time"
                              name="lunchTime"
                              onChange={handleChange}
                            >
                              <MenuItem value="12-01">
                                12:00pm to 01:00pm
                              </MenuItem>
                              <MenuItem value="01-02">
                                01:00pm to 02:00pm
                              </MenuItem>
                              <MenuItem value="03-04">
                                02:00pm to 03:00pm
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                          <FormControl fullWidth>
                            <InputLabel>Meal Instruction</InputLabel>
                            <Select
                              value={payload.mealInstruction}
                              label="Meal Instruction"
                              name="mealInstruction"
                              onChange={handleChange}
                            >
                              <MenuItem value="veg">Veg</MenuItem>
                              <MenuItem value="nonveg">Nonveg</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
