# git pull
# yarn run build
# pm2 delete "6ammart-web-next-js"
# pm2 start npm --name "6ammart-web-next-js" -- start

# Modified deploy.sh script to save ecosystem.config.js
# on restart.
git pull
yarn run build
pm2 delete "6ammart-web-next-js"
pm2 start npm --name "6ammart-web-next-js" -- start ecosystem.config.js --env production
pm2 save