# devlpcode backend
## Requirements
- Go-Dep
- MongoDB

## Installation

- `go get github.com/devlpco/backend`

## Dependency Management

- `go get -v ` (within directory) --> Installs all dependencies

- or

- Go-dep --> (Debian) `sudo apt install go-dep` --> Installs Go dependency manager

- `dep init` then `dep ensure` --> Installs all dependencies 

## Running

- Type  `go run main.go` in the directory

- Open browser, and type `localhost:8080`

- As of now, you should only see a page displaying a 404 error