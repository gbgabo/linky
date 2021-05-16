import React from "react";
import { TextField, Paper, IconButton, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconPicker } from "../pickers";

interface LinkEditorProps {
  content: {icon: string, name: string, address: string};
  index: number;
  onChange: (value: string, index: number, type: string) => void;
  onRemove: (index: number) => void;
}

export default function LinkEditor({ content, index, onChange, onRemove }: LinkEditorProps) {
  return (
    <div>
      <Paper elevation={3} className="center">
        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item xs={1}>
            <IconPicker
              value={content.icon}
              onChange={(icon: string) => onChange(icon, index, "icon")}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Name"
              name={content.name}
              variant="outlined"
              value={content.name}
              onChange={(e) => onChange(e.target.value, index, "name")}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Address"
              variant="outlined"
              value={content.address}
              onChange={(e) => onChange(e.target.value, index, "address")}
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-label="delete" onClick={() => onRemove(index)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
