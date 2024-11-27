import { Router } from 'express';
import {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} from '../../controllers/thoughtController';

const router = Router();

// Route to get all thoughts or create a new thought
router.route('/')
  .get(getThoughts)       // GET all thoughts
  .post(createThought);   // POST a new thought

// Route to get, update, or delete a thought by ID
router.route('/:id')
  .get(getThoughtById)    // GET a single thought by ID
  .put(updateThought)     // PUT to update a thought by ID
  .delete(deleteThought); // DELETE a thought by ID

// Route to add a reaction to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);     // POST to add a reaction

// Route to remove a reaction by reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); // DELETE a reaction by reactionId

export default router;
