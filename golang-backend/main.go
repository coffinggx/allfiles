package main

import (
	"log"

	"github.com/gofiber/fiber/v3"
)

func main() {
	app := fiber.New()
	app.Static("/", "./index.html")
	app.Static("/index2.html", "./index2.html")
	app.Get("/news", func(c fiber.Ctx) error {
		return c.SendString("News News News No one dies Today")
	})
	log.Fatal(app.Listen(":3000"))
}
