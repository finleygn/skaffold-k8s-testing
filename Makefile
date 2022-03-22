.PHONY: apply build delete start

start:
	@skaffold dev --port-forward


##### for debugging

apply:
	@eval $$(minikube docker-env);
	@kubectl apply -f ./k8s/

delete:
	@kubectl delete -f ./k8s/

build:
	@docker build -t finleygn/gateway:latest --file ./docker/gateway.Dockerfile ./apps/gateway
	@docker build -t finleygn/backend:latest --file ./docker/backend.Dockerfile ./apps/backend