module.exports = {
  apps : [{
    name: "Bridgr-Health",
    script: "server.js",
    watch: true,
    env_production:{
      "PORT": 8001,
      "NODE_ENV": "production"  
    }
  }]
}
