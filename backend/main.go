package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"fmt"
)

/*
type User struct {
	username string
	token    string
}
type UserAuth struct {
	username string
	password string
}
*/
var db = make(map[string]string)

func setupRouter() *gin.Engine {
	// Disable Console Color
	// gin.DisableConsoleColor()
	r := gin.Default()

	// Ping test
	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})
	r.GET("/test/:user/:repo/", func(c *gin.Context) {
		user := c.Param("user")
		repo := c.Param("repo")
		c.JSON(http.StatusOK, gin.H{"user": user, "repo": repo})
		fmt.Println(c)

	})

	return r
}

func main() {
	r := setupRouter()
	// Listen and Server in 0.0.0.0:8080
	r.Run(":8080")
}
