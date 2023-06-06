import mongoose from "mongoose";

const ImageScheme = new mongoose.Schema(
    {
        name: {
           type: String,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("images", ImageScheme);