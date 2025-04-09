<template>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="distributors"
        item-value="name"
        class="elevation-1"
        dense
      >
        <template v-slot:[`item.name`]="{ item }">
          <span>{{ item.name }}</span>
        </template>
        <template v-slot:[`item.lastMonth`]="{ item }">
          <span>{{ item.lastMonth }}</span>
        </template>
        <template v-slot:[`item.ytdAverage`]="{ item }">
          <span>{{ item.ytdAverage }}</span>
        </template>
        <template v-slot:[`item.forcasted`]="{ item }">
          <span>{{ item.forcasted }}</span>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'DistributorTable',
    data() {
      return {
        headers: [
          { text: 'Name', align: 'start', key: 'name', sortable: true },
          { text: 'Last Month', value: 'lastMonth', sortable: true },
          { text: 'YTD Average', value: 'ytdAverage', sortable: true },
          { text: 'Forecasted', value: 'forcasted', sortable: true },
        ],
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
  /* Customize the table appearance */
  .v-data-table {
    max-width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .v-data-table th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  
  .v-data-table td {
    padding: 8px;
  }
  </style>
  