import { Request, Response } from "express"
import login from "../../../business/use-case/user/login"


export default {
    login: async (req: Request, res: Response) => {
        try {
            res.json(await login.login(req.body))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },
}