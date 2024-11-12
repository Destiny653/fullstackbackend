 
const create = async (req, res, next) => {
    const body = req.body;
    if(!body.department){
        return res.status(400).json({error: 'Department is required'});
    }
    next();
}

module.exports = { create };