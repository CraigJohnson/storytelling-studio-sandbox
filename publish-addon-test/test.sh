#!/usr/bin/env sh

set -e

# staging or production?
BUCKET="dev"
while [ "$1" != "" ]; do
  case $1 in
    --staging )
      shift
      BUCKET="dev"
      ;;

    --production )
      shift
      BUCKET="master"
      ;;

    * ) shift;;
  esac
done

echo "Deploying to $BUCKET ..."

CDN_AUTH=Zm9vOmJhcgo=

CDN_AUTH=$(echo $CDN_AUTH | base64 -D)

echo $CDN_AUTH

# CDN_SPACE="gs://usat-storytelling/testing/$BUCKET"
# PUBLIC_PATH="https://www.gannett-cdn.com/usat-storytelling/testing/$BUCKET"
# CDN_PATH="https://$CDN_AUTH@www.gannett-cdn.com/usat-storytelling/testing/$BUCKET"
# DEV_DOMAIN="dev-uw.usatoday.com"

# PROJECT_SLUG="$(basename $(pwd))"
# PROJECT_FOLDER="./public"

# PUBLIC_URL="$PUBLIC_PATH/$PROJECT_SLUG/index.html"

# echo "Variables:"
# echo $PUBLIC_PATH
# echo $CDN_PATH
# echo $PROJECT_SLUG
# echo $PUBLIC_URL

echo "Use the force, Luke!"