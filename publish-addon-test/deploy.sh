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


# will exit if PODCAST not set
echo "Deploying ${PODCAST:?Need to set PODCAST non-empty} podcast page to $BUCKET ..."

CDN_AUTH=$(echo $CDN_AUTH | base64 --decode)

CDN_SPACE="gs://usat-storytelling/testing/$BUCKET"
PUBLIC_PATH="https://www.gannett-cdn.com/usat-storytelling/testing/$BUCKET"
CDN_PATH="https://$CDN_AUTH@www.gannett-cdn.com/usat-storytelling/testing/$BUCKET"
DEV_DOMAIN="dev-uw.usatoday.com"

PROJECT_SLUG="$(basename $(pwd))"
PROJECT_FOLDER="./public"

PUBLIC_URL="$PUBLIC_PATH/$PROJECT_SLUG/index.html"

echo "Variables:"
echo $PUBLIC_PATH
echo $CDN_AUTH
echo $CDN_PATH
echo $PROJECT_SLUG
echo $PUBLIC_URL

# this is what I'm testing
echo "PODCAST:" $PODCAST

# GIT_BRANCH="$BUCKET" npm run build

# gsutil -m rsync -r $PROJECT_FOLDER "$CDN_SPACE/$PROJECT_SLUG"

# sometimes we need a special index file on the cdn
# if [[ -f "$PROJECT_FOLDER/index.cdn.html" ]]; then
	# gsutil cp "$PROJECT_FOLDER/index.cdn.html" "$CDN_SPACE/$PROJECT_SLUG/index.html"
# fi

# for filename in $(cd $PROJECT_FOLDER && find *); do
	#echo "$CDN_PATH/$PROJECT_SLUG/$filename"
	# curl -X PURGE "$CDN_PATH/$PROJECT_SLUG/$filename" &
# done

# curl -X PURGE "$CDN_PATH/$PROJECT_SLUG/index.html" -m 10 &

# Add AllUsers:R to the project folder
# gsutil -m acl ch -u AllUsers:R  -r "$CDN_SPACE/$PROJECT_SLUG"


echo "PURGING https://www.$PODCAST.com/podcasts/"
# curl -X PURGE "https://$USAT_AUTH@www.usatoday.com/podcasts/"

wait
echo "Deployed:"
echo $PUBLIC_URL
