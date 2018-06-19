help: ## Prints this help.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-21s\033[0m %s\n", $$1, $$2}'

build: ## Builds the image
	cp .env.dist .env
	docker-compose build

run: ## Runs the project with all its containers in daemon mode
	docker-compose up -d

run-verb: ## Runs the project and takes over the current terminal
	docker-compose up