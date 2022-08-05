const router = require("express").Router()

const {
	getData,
	patchData,
	test
} = require("../controls/data.js")

const {
	wrapAsync
} = require("../../util/util.js")



// router.route("/").get(userStatus(), wrapAsync(routeUpDataRating))

// router.route("/").post(userStatus(), wrapAsync(getAccountMsg))

// router.route("/").patch(userStatus(), wrapAsync(upDateClass))



router.route("/data").get(wrapAsync(getData))
router.route("/data").patch(wrapAsync(patchData))
router.route("/test").post(wrapAsync(test))

module.exports = router