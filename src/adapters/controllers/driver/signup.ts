import { Request, Response } from "express"
import signup from "../../../business/use-case/driver/signup"


export default {
    signup: async (req: Request, res: Response) => {
        try {
            res.json(await signup.registration(req.body))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },
}