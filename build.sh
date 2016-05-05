#!/bin/sh

filename='fabaoM-'
version='1.0.1'
day=`date +%Y%m%d%H`

MY_BUILD_NUMBER=`echo 0000$BUILD_NUMBER |sed 's/.*\([0-9]\{4\}\)$/\1/'`

filename=$filename$version'-'$day'-'$MY_BUILD_NUMBER



echo 'file name:'$filename
tar czvf  build/$filename.tgz  run.sh  package.json  app.js  config.alpha.js serverPrivateKey_Alpha.pem serverPrivateKey_beta.pem serverPrivateKey_release.pem config.beta.js  config.release.js  adapter/  bin/  node_modules/  public/  routes/  util/  views/
