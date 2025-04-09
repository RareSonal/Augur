<template>
  <div id="app">
    <el-container style="height: 100vh;">
      <el-header style="background-color: #95a5a6; color: white; text-align: center;">
        <h2>Augur</h2>
      </el-header>

      <el-main>
        <el-container>
          <el-row class="justify-center">
            <el-col :span="24" md="18">
              <el-card>
                <template #header>
                  <div class="clearfix" style="text-align: center;">
                    <span>Distributor Table</span>
                  </div>
                </template>
              <el-table :data="distributors" style="width: 100%">
              <el-table-column prop="name" label="Name" width="310" />
              <el-table-column prop="lastMonth" label="Last Month" width="310" />
              <el-table-column prop="ytdAverage" label="Ytd. Average" width="310" />
              <el-table-column prop="forcasted" label="Forecasted" width="310" />
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
export default {
  name: 'App',
  data() {
    return {
      distributors: [
        { name: 'Saltyshore Soda Co.', lastMonth: 2455, ytdAverage: 2000, forcasted: 2500 },
        { name: 'Gerbermin Sips', lastMonth: 500, ytdAverage: 643, forcasted: 455 },
        { name: "Wicker's", lastMonth: 7600, ytdAverage: 8600, forcasted: 7000 },
        { name: 'Tips Taps', lastMonth: 5444553, ytdAverage: 5127384, forcasted: 5495321 },
        { name: "Hancho's", lastMonth: 5644, ytdAverage: 5322, forcasted: 5744 },
        { name: 'Carlsburd', lastMonth: 4321, ytdAverage: 4532, forcasted: 4123 },
        { name: 'Wholestream', lastMonth: 65432, ytdAverage: 67654, forcasted: 64321 },
        { name: 'Fairings', lastMonth: 3454, ytdAverage: 2343, forcasted: 4076 },
        { name: 'National Pour', lastMonth: 20322, ytdAverage: 20319, forcasted: 20321 },
      ],
    };
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