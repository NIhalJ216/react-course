// Radio group
<Grid item xs={12} p={3}>
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <FormControl>
        <FormLabel>Select Meal</FormLabel>
        <RadioGroup
          // defaultValue="female"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value={payload.lunch}
            control={<Radio />}
            label="Lunch"
          />
          <FormControlLabel
            value={payload.dinner}
            control={<Radio />}
            label="Dinner"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  </Grid>
</Grid>;

// CheckBox
<Grid item xs={8} style={{ paddingTop: "0rem", marginTop: "1rem" }}>
  <Grid container spacing={2}>
    <Grid item xs={2.5} style={{ paddingTop: "0rem", marginTop: "1rem" }}>
      <FormControlLabel
        label="Trial"
        name="trial"
        labelPlacement="end"
        control={<Checkbox onChange={handleChange} />}
      />
    </Grid>
    <Grid item xs={2.5} style={{ paddingTop: "0rem", marginTop: "1rem" }}>
      <FormControlLabel
        label="Weekly"
        name="weekly"
        labelPlacement="end"
        control={<Checkbox onChange={handleChange} />}
      />
    </Grid>
    <Grid item xs={3} style={{ paddingTop: "0rem", marginTop: "1rem" }}>
      <FormControlLabel
        label="Monthly"
        name="monthly"
        labelPlacement="end"
        control={<Checkbox onChange={handleChange} />}
      />
    </Grid>
  </Grid>
</Grid>;
