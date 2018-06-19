help: ## Prints this help.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-21s\033[0m %s\n", $$1, $$2}'

build: ## Builds the image
	sudo bash ./scripts/build.sh

run: ## Runs the project and all its containers
	docker-compose up -d 