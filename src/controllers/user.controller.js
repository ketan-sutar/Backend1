import { asyncHandler } from "../middlewares/asyncHandler";

const registerUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "OK" });
});


