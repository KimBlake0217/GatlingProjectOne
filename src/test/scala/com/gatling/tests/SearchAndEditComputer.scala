package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class SearchAndEditComputer extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36")

	val search =	exec(http("Home")
		.get("/computers"))
		.pause(4)
		.exec(http("Search")
			.get("/computers?f=Ace"))
		.pause(1)
		.exec(http("Select")
			.get("/computers/381"))
		.pause(5)

	val edit = exec(http("Edit")
		.post("/computers/381")
		.formParam("name", "ACE")
		.formParam("introduced", "2010-01-02")
		.formParam("discontinued", "2011-01-02")
		.formParam("company", "2"))
		.pause(5)


	val scn = scenario("SearchAndEditComputer").exec(search, edit)

	val users = scenario("Users").exec(search)
	val admin = scenario("Admins").exec(search,edit)
	val tester = scenario("testers").exec(search,edit)

	setUp(
		users.inject(rampUsers(10).during(10)),
		admin.inject(rampUsers(4).during(10)),
		tester.inject(rampUsers(20).during(20))
	).protocols(httpProtocol)


}