

<FormControl variant="filled" className={classes.formControl}>
    <InputLabel>Variant</InputLabel>
    <Select
    labelId="demo-simple-select-filled-label"
    id="demo-simple-select-filled"
    value={input}
    onChange={handleChange}
    >
        <MenuItem value="">Text Only</MenuItem>
        <MenuItem value={"contained"}>Full</MenuItem>
        <MenuItem value={"outlined"}>Hollow</MenuItem>
    </Select>
</FormControl>