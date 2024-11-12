require('dotenv').config();
const express = require('express');
const {connect} = require('mongoose');
const cors = require('cors'); 

// Connect to MongoDB
connect(process.env.DATABASE_URL)
.then(connection=>{
    const app = express();
    app.use(cors()) 
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    // Routes
    const adminRoutes = require('./routes/admin.route');
    const courseRoutes = require('./routes/course.route');
    const userRoutes = require('./routes/user.route'); 
    const scheduleRoutes = require('./routes/schedule.route');
    const levelRoutes = require('./routes/level.route');
    const evaluationRoutes = require('./routes/evaluation.route')
    const departmentRoutes = require('./routes/department.route');

    app.use('/api/admins', adminRoutes);
    app.use('/api/courses', courseRoutes);
    app.use('/api/users', userRoutes); 
    app.use('/api/schedules', scheduleRoutes);
    app.use('/api/levels', levelRoutes);
    app.use('/api/evaluations', evaluationRoutes);
    app.use('/api/departments', departmentRoutes);

    // THIS ROUTE IS JUST FOR JOI VALIDATION
    const indexRoute = require('./routes/index.route')
    app.use('/', indexRoute);

    app.use((req, res, next)=>{
        return res.status(404).json({
            status: 'NOT FOUND',
            status_code: 404,
            message: 'The requested resource was not found',
            data:{
                protocol: req.protocol,
                method: req.method.toUpperCase(),
                url: req.originalUrl,
                path: req.path,
                query: req.query,
                ip: req.ip, 
                host: req.hostname,  
                port: req.port,
                timestamp: new Date()
            }
        })
    })
 
    app.use((error, req, res, next)=>{
        return res.status(500).json({
            status: 'ERROR',
            status_code: error.status || 500,
            message: error.message,
            data:{
                protocol: req.protocol,
                method: req.method.toUpperCase(),
                error: error.stack,
                url: req.originalUrl,
                path: req.path,
                query: req.query,  
                ip: req.ip,
                host:req.hostname, 
                port: req.port,
                timestamp: new Date()
            }
        })
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error)=>{
    console.error('Error connecting to MongoDB: ', error)
})
