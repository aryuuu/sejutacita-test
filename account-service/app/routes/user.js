const express = require('express');
const userHandler = require('app/handlers/user');

const router = express();
const subRouter = express();

router.post('/', async (req, res, next) => {
  try {
    const result = await userHandler.createUser(req.body);
  
    res.json({ data: result });
    
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const result = await userHandler.getUsers(req.query);
  
    res.json({ data: result });
    
  } catch (error) {
    next(error)
  }
});


router.use(
  '/:id', 
  (req, res, next) => {
    req.parent = {};
    req.parent.id_user = req.params.id;
    next();
  }, 
  subRouter
);

subRouter.get('/', async (req, res, next) => {
  try {
    const result = await userHandler.getUserById(req.parent.id_user);
  
    res.json({ data: result });
    
  } catch (error) {
    next(error);
  }
});

subRouter.put('/', async (req, res, next) => {
  try {
    const result = await userHandler.updateUser(req.parent.id_user, req.body);
  
    res.json({ data: result });
  } catch (error) {
    next(error)
  }
});

subRouter.delete('/', async (req, res) => {
  try {
    const result = await userHandler.deleteUser(req.parent.id_user);
  
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});



module.exports = router;