#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.7.1/bin

cd /home/ubuntu/week-12-monorepo-full
git pull origin master
npm run build
pm2 stop react-build
pm2 serve dist/ 3000 --name "react-build" --spa





// this for react app on ec2
