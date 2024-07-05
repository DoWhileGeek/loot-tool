import { ButtonBase, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" className="font-medium">
        Choose your adventure
      </Typography>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 w-1/2 mx-auto">
        <ButtonBase component={Link} to="/gen/building">
          <Paper className="p-3 bg-slate-300 aspect-video" elevation={3}>
            <Typography variant="h3">Building</Typography>
            <Typography>
              Generate a building with loot and creature tables.
            </Typography>
          </Paper>
        </ButtonBase>
        <ButtonBase component={Link} to="/gen/town">
          <Paper className="p-3 bg-amber-300 aspect-video" elevation={3}>
            <Typography variant="h3">Town</Typography>
            <Typography>
              Generate a town with buildings that have loot and creature tables.
            </Typography>
          </Paper>
        </ButtonBase>
      </div>
    </div>
  );
};

export default App;
