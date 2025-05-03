


<template>
  <div id="app">
    <el-container style="height: 100vh;">
      <el-header style="background-color: #95a5a6; color: white; text-align: center;">
        <h2>Augur</h2>
      </el-header>

      <el-main>
        <el-container>
          <el-row class="justify-center">
            <el-col :span="24" :md="18">
              <el-card>
                <template #header>
                  <div class="clearfix" style="text-align: center;">
                    <span>Distributor Table</span>
                  </div>
                </template>

                <el-table :data="distributors" style="width: 100%">
                  <el-table-column prop="name" label="Name" width="350" />
                  <el-table-column prop="lastMonth" label="Last Month" width="350" />
                  <el-table-column prop="ytdAverage" label="Ytd. Average" width="350" />
                  <el-table-column prop="forecasted" label="Forecasted" width="625" />
                </el-table>
              </el-card>
            </el-col>
          </el-row>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      distributorIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      distributors: [],
    };
  },
  mounted() {
    this.fetchDistributorMetrics();
  },
  methods: {
    async fetchDistributorMetrics() {
      for (const id of this.distributorIds) {
        try {
          const res = await axios.get(`/getDistributorMetrics?id=${id}`)

          this.distributors.push({
            name: res.data.distributor_name,
            lastMonth: res.data.shipped_last_month,
            ytdAverage: res.data.year_to_date_avg,
            forecasted: res.data.forecasted_this_month,
          });
        } catch (error) {
          console.error(`Failed to fetch metrics for distributor ${id}`, error);
        }
      }
    },
  },
};
</script>
<style scoped>
h1 {
  font-family: Monospace, serif;
  font-size: 7vh;
  color: hsl(40, 100%, 73%);
}
</style>