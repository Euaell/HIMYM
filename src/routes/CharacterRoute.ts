import { Router } from 'express'

import CharacterController from '../controllers/CharacterController'

const router = Router()

router.get('/', CharacterController.getCharacters)
router.post('/', CharacterController.createCharacter)
router.get('/:id', CharacterController.getCharacter)
router.put('/:id', CharacterController.updateCharacter)
router.delete('/:id', CharacterController.deleteCharacter)

export default router