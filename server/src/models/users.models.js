import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema({
        username: {
            type : String,
            required : true,
            unique: true,
            lowercase : true,
            trim: true,
            index: true
        },
        email: {
            type : String,
            required : true,
            unique: true,
            lowercase : true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        userPhone: {
            type: Number,
            required: [true, "User phone is required"]
        },
        careTakerPhone: {
            type: Number,
            required: [true, "careTaker phone is required"]
        },
        medName: {
            type: String
        },
        dosage: {
            type: String
        },
        refreshToken: {
            type: String
        },
        userType:{
            type: Boolean
        }

    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username
        },
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMj",
        {
            expiresIn: '1d'
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        "JJNDajshdjakwudakmnzkKKASDK.jaxcnjehakdP,masclmxclkeklkfnrf0845ksj",
        {
            expiresIn: '10d'
        }
    )
}

export const User = mongoose.model("User", userSchema)