import React from "react";
import { TextField, Paper, IconButton, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconPicker } from "../pickers";

interface PanelEditorProps {
  content: { icon: string; name: string; details?: string };
  index: number;
  onChange: (value: string, index: number, type: string) => void;
  onRemove: (index: number) => void;
}

export default function PanelEditor({
  content,
  index,
  onChange,
  onRemove,
}: PanelEditorProps) {
  return (
    <div>
      <Paper elevation={3} className="center">
        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item xs={1}>
            <IconPicker
              value={content.icon}
              onChange={(icon) => onChange(icon, index, "icon")}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Title"
              name={content.name}
              variant="outlined"
              value={content.name}
              onChange={(e) => onChange(e.target.value, index, "name")}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Details"
              variant="outlined"
              value={content.details}
              onChange={(e) => onChange(e.target.value, index, "details")}
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
