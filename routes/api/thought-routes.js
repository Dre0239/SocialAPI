const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/Thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reaction/:reactionId
router
  .route('/:thoughtId/reaction')
  .post(createReaction);

router
  .route('/:thoughtId/reaction/:reactionId')
  .delete(deleteReaction);

module.exports = router;
