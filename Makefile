include .env

.PHONY: all

build:
	docker build -t chatbot-ui .

run:
	export $(cat .env | xargs)
	docker stop chatbot-ui || true && docker rm chatbot-ui || true
	docker run --name chatbot-ui --rm -e API_KEY=${API_KEY} -p 