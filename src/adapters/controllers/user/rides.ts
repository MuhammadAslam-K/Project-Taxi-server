import { Request, Response } from "express"
import rides from "../../../business/use-case/user/rides"


export default {
    getRidesOfUser: async (req: Request, res: Response) => {
        try {
            res.json(await rides.getRidesOfUserById(req.token.data))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },
}