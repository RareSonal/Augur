module.exports = async function (context, req) {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    context.res = {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
    return;
  }

  const distributorId = req.query.id;

  if (!distributorId || isNaN(parseInt(distributorId))) {
    context.res = {
      status: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: { error: 'Invalid or missing distributor ID. Please provide a valid ?id=<number>.' },
    };
    return;
  }

  const id = parseInt(distributorId);

  const distributorMetrics = {
    1: { distributor_name: 'Saltyshore Soda Co.', year_to_date_avg: 2000, shipped_last_month: 2455, forecasted_this_month: 2500, shipped_quantities: [1900, 2100, 2455] },
    2: { distributor_name: 'Gerbermin Sips', year_to_date_avg: 643, shipped_last_month: 500, forecasted_this_month: 455, shipped_quantities: [550, 620, 500] },
    3: { distributor_name: "Wicker's", year_to_date_avg: 8600, shipped_last_month: 7600, forecasted_this_month: 7000, shipped_quantities: [8000, 8200, 7600] },
    4: { distributor_name: 'Tips Taps', year_to_date_avg: 5127384, shipped_last_month: 5444553, forecasted_this_month: 5495321, shipped_quantities: [5300000, 5400000, 5444553] },
    5: { distributor_name: "Hancho's", year_to_date_avg: 5322, shipped_last_month: 5644, forecasted_this_month: 5744, shipped_quantities: [5200, 5500, 5644] },
    6: { distributor_name: 'Carlsburd', year_to_date_avg: 4532, shipped_last_month: 4321, forecasted_this_month: 4123, shipped_quantities: [4400, 4300, 4321] },
    7: { distributor_name: 'Wholestream', year_to_date_avg: 67654, shipped_last_month: 65432, forecasted_this_month: 64321, shipped_quantities: [66000, 67000, 65432] },
    8: { distributor_name: 'Fairings', year_to_date_avg: 2343, shipped_last_month: 3454, forecasted_this_month: 4076, shipped_quantities: [3000, 3200, 3454] },
    9: { distributor_name: 'National Pour', year_to_date_avg: 20319, shipped_last_month: 20322, forecasted_this_month: 20321, shipped_quantities: [20000, 20200, 20322] },
  };

  const data = distributorMetrics[id];

  context.res = data
    ? {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: data,
      }
    : {
        status: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: { error: 'Distributor not found' },
      };
};
