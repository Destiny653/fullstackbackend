const {Router} = require('express');

const router = Router();
const scheduleController = require('../src/controllers/schedule.controller');
const scheduleMiddleware = require('../src/middlewares/schedule.middleware');

router.post('/create', scheduleMiddleware.create, scheduleController.createSchedule);

module.exports = router;