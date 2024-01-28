module.exports = {
  apps : [{
    name: "Bridgr-Health",
    script: "server.js",
    watch: true,
    env_production:{
      "NODE_ENV": "production"  
    }
  }]
}
