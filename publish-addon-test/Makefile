PODCAST?=

ENV?=PODCAST=${PODCAST}


# Github publish action calls:
# install - install node_modules
# update - update src/content/data.json
# build - defer to deploy step
# deploy - deploy to dev
# preprod - deploy to preprod
# publish - deploy to production

install:
	mkdir -p ./public
	npm ci

update:
	npm run update

# Build called in deploy.sh, so do nothing here.
build:
	@:

deploy:
	$(ENV) ./deploy.sh

preprod:
	$(ENV) ./deploy.sh --staging

publish:
	$(ENV) ./deploy.sh --production
	
hello:
	$(ENV) echo ${PODCAST}