const router = require("express").Router()

const {
	getData,
	test
} = require("../controls/data.js")

const {
	wrapAsync
} = require("../../util/util.js")



// router.route("/").get(userStatus(), wrapAsync(routeUpDataRating))

// router.route("/").post(userStatus(), wrapAsync(getAccountMsg))

// router.route("/").patch(userStatus(), wrapAsync(upDateClass))



router.route("/data").get(wrapAsync(getData))
router.route("/test").post(wrapAsync(test))

module.exports = router