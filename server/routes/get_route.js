const router = require("express").Router()

const {
	getData,
	patchData,
	deleteData
} = require("../controls/data.js")

const {
	wrapAsync
} = require("../../util/util.js")



// router.route("/").get(userStatus(), wrapAsync(routeUpDataRating))

// router.route("/").post(userStatus(), wrapAsync(getAccountMsg))

// router.route("/").patch(userStatus(), wrapAsync(upDateClass))



router.route("/data").get(wrapAsync(getData))
router.route("/data").patch(wrapAsync(patchData))
router.route("/data").delete(wrapAsync(deleteData))

module.exports = router