package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"

	jwt "github.com/appleboy/gin-jwt/v2"
	"github.com/davecgh/go-spew/spew"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	rand.Seed(time.Now().Unix())
}

func main() {
	r := gin.Default()
	cDefault := cors.DefaultConfig()
	cDefault.AllowAllOrigins = true
	cDefault.AllowCredentials = true

	r.Use(cors.New(cDefault))

	middleJWT, err := jwt.New(&jwt.GinJWTMiddleware{
		Realm:       "test zone",
		Key:         []byte("secret key"),
		Timeout:     time.Hour,
		MaxRefresh:  time.Hour,
		IdentityKey: "id",
		PayloadFunc: func(data interface{}) jwt.MapClaims {
			return jwt.MapClaims{
				"id":       "1234",
				"username": "admin",
				"name":     "Bregy Malpartida",
			}
		},
		IdentityHandler: func(c *gin.Context) interface{} {
			claims := jwt.ExtractClaims(c)
			return claims
			// return map[string]interface{}{
			// 	"id":       "1234",
			// 	"username": "admin",
			// 	"name":     "Bregy Malpartida",
			// }
		},

		Authenticator: func(c *gin.Context) (interface{}, error) {
			loginVals := map[string]string{}

			if err := c.ShouldBind(&loginVals); err != nil {
				return "", jwt.ErrMissingLoginValues
			}

			userID := loginVals["username"]
			password := loginVals["password"]

			if (userID == "admin" && password == "admin") || (userID == "test" && password == "test") {
				return map[string]interface{}{
					"id":       "1234",
					"username": "admin",
					"name":     "Bregy Malpartida",
					"lastName": "M",
					"age":      -1,
				}, nil
			}

			return nil, jwt.ErrFailedAuthentication
		},

		Authorizator: func(data interface{}, c *gin.Context) bool {
			spew.Dump(data)
			if v, ok := data.(jwt.MapClaims); ok && v["username"] == "admin" {
				return true
			}
			return false
		},

		Unauthorized: func(c *gin.Context, code int, message string) {
			c.JSON(code, gin.H{
				"code":    code,
				"message": message,
			})
		},

		// TokenLookup is a string in the form of "<source>:<name>" that is used
		// to extract token from the request.
		// Optional. Default value "header:Authorization".
		// Possible values:
		// - "header:<name>"
		// - "query:<name>"
		// - "cookie:<name>"
		// - "param:<name>"
		TokenLookup: "header: Authorization, query: token, cookie: jwt",
		// TokenLookup: "query:token",
		// TokenLookup: "cookie:token",

		// TokenHeadName is a string in the header. Default value is "Bearer"
		TokenHeadName: "Bearer",

		// TimeFunc provides the current time. You can override it to use another time value. This is useful for testing or if your server uses a different time zone than your tokens.
		TimeFunc: time.Now,
	})

	if err != nil {
		panic(err)
	}

	errInit := middleJWT.MiddlewareInit()

	if errInit != nil {
		panic("authMiddleware.MiddlewareInit() Error:" + errInit.Error())
	}

	r.POST("/login", middleJWT.LoginHandler)

	r.NoRoute(middleJWT.MiddlewareFunc(), func(c *gin.Context) {
		claims := jwt.ExtractClaims(c)
		fmt.Printf("NoRoute claims: %#v\n", claims)
		c.JSON(404, gin.H{"code": "PAGE_NOT_FOUND", "message": "Page not found"})
	})

	auth := r.Group("/auth")
	// Refresh time can be longer than token timeout
	auth.GET("/refresh_token", middleJWT.RefreshHandler)
	auth.Use(middleJWT.MiddlewareFunc())
	auth.GET("/hello", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello World")
	})

	r.GET("/add/:a/:b", func(c *gin.Context) {
		n := rand.Intn(10)
		c.String(http.StatusOK, "your number is: %d", n)
	})

	r.POST("/graphql", func(c *gin.Context) {
		// aqui pasa algo
	})

	r.Run(":8080")
}
