import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Card, CardContent } from '@mui/material';

function App() {
  return (
    <div>

      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My UI Lab App</span>
      </nav>

      <div className="container mt-4">

        <h2 className="text-center">Bootstrap UI Demo</h2>

        <div className="card p-3 mt-3">
          <input className="form-control" placeholder="Enter name" />
          <button className="btn btn-primary mt-3">Submit</button>
        </div>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card p-3">Card 1</div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">Card 2</div>
          </div>

        </div>

        <Card style={{ width: 300, margin: '40px auto' }}>
          <CardContent>
            <h3>Material UI Form</h3>
            <TextField label="Name" fullWidth margin="normal" />
            <Button variant="contained" fullWidth>
              Submit
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

export default App;
