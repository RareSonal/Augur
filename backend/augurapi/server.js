// server.js (Node.js)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// API endpoint to fetch metrics for a distributor
app.get('/distributors/:id/metrics', (req, res) => {
  const distributorId = req.params.id;

  const metrics = {
    distributor_name: `Distributor ${distributorId}`,
    year_to_date_avg: 1500,
    shipped_last_month: 1200,
    forecasted_this_month: 1600,
    shipped_quantities: [1000, 1200, 1400] // Example data
  };

  res.json(metrics);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
