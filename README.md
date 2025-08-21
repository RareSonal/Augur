# Augur – Azure Serverless Metrics Dashboard

A lightweight, real-time distributor metrics dashboard built using Vue.js and Azure Functions, deployed on Azure Static Web Apps. Ideal for showcasing serverless architecture, cloud-native deployments, and DevOps best practices.

# 🚀 Features

- 📊 Fetch and display distributor metrics in real-time
- ☁️ Fully serverless backend using Azure Functions (Node.js)
- 🖥️ Frontend hosted on Azure Static Web Apps
- 🔁 RESTful API endpoint: `/api/getDistributorMetrics?id=<distributor_id>`
- 🔒 CORS support and environment-based configuration
- 🔧 Built-in local development with Azure Function Emulator

# 🛠️ Tech Stack

| Layer       | Stack                         |
|------------|-------------------------------|
| Frontend    | Vue.js, Element Plus          |
| Backend     | Azure Functions (Node.js)     |
| Hosting     | Azure Static Web Apps         |
| DevOps      | GitHub Actions, CORS Config   |
| Monitoring  | Azure Application Insights    |

# 🔧 Setup Instructions

### Prerequisites
- Node.js (v16+)
- Azure CLI
- Azure Functions Core Tools
- Vue CLI (`npm install -g @vue/cli`)

### Local Development

#### 1. Clone the repo
```bash
git clone https://github.com/RareSonal/Augur.git
cd Augur
```
#### 2. Start Azure Functions locally
```bash
cd api
func start
```
#### 3. Start Vue frontend
```bash
cd dashboard
npm install
npm run serve
```

Vue app will run on http://localhost:8080 and fetch data from the local Azure Functions running on http://localhost:7071/api.

# ☁️ Deployment (Azure)

Fork/Push the repo to your GitHub

Connect repo to Azure Static Web Apps

Set build folder to dashboard

Azure will automatically detect:

Frontend: Vue

API Backend: Azure Functions in api/

CI/CD enabled via GitHub Actions

# 📬 Contributions
Pull requests and suggestions are welcome! If you'd like to add support for automatic PR-based deploy previews, CI testing, or multi-region deployment — open an issue or PR.
