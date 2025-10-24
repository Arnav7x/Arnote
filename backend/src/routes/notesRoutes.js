import express from 'express';
import { 
        getAllNotes, 
        createNote, 
        updateNote, 
        deleteNote, 
        getNoteById,
        deleteAllNotes
    } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote)
router.put("/:id", updateNote);
router.delete("/:id", deleteNote); 
router.delete("/", deleteAllNotes); 

export default router;

