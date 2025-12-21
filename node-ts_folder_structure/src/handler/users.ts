import type { NextFunction, Request, Response } from "express";

export function GetAllUsers(req: Request, res: Response, next: NextFunction) {
  res.json(["A", "B", "C", "Haha"]);
}
