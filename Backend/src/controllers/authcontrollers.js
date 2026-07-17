const User = require("../models/authmodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
    const {username, email, password, confirmPassword } = req.body;
    // Implementation for user registration
    try {
        // Check if user already exists
        if(!username || !email || !password || !confirmPassword) {
            return res.status(400).json({ 
                success:false,
                message: 'All fields are required' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ 
                success:false,
                message: 'Passwords do not match'
             });
        }

        const existingUser = await User.findOne({ email }); 
        if (existingUser) {
            return res.status(400).json({ 
                success:false,
                message: 'User already exists' 
            });
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ 
            success:true,
            message: 'User registered successfully',
            user: {
              id: newUser._id,
              username: newUser.username,
              email: newUser.email,
            },
        });
    } catch (error) {
        res.status(500).json({ 
            success:false,
            message: "Internal Server Error",
        });
    }

};

const Login = async (req, res) => {
    const { email, password } = req.body;
    // Implementation for user login
    try {
        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password",
            });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ 
                success:false,
                message: 'User not found' 
            });
        }
        
        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ 
                success:false,
                message: 'Invalid credentials' 
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        // Store token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Change to true in production (HTTPS)
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

const logout = (req, res) => {
    res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
});
    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
}

module.exports = { Register, Login, logout };