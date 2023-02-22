const {User} = require("../models/user.model");
const express = require("express");
const router = express.Router();

router.post('/register', async (req, res) => {
	console.log(req.body)
	
	try {
		//const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({
			email: req.body.email,
			//password: req.body.password
		})
	
		if (user) {
			return res.send(user)
			//return res.json({status: 'ok', user: true})
		} else {
			return res.json({status: error, user: false})
		}

	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}


	// if (!user) {
	// 	return { status: 'error', error: 'Invalid login' }
	// }

	// const isPasswordValid = await bcrypt.compare(
	// 	req.body.password,
	// 	user.password
	// )

	// if (isPasswordValid) {
	// 	const token = jwt.sign(
	// 		{
	// 			name: user.name,
	// 			email: user.email,
	// 		},
	// 		'secret123'
	// 	)

	// 	return res.json({ status: 'ok', user: token })
	// } else {
	// 	return res.json({ status: 'error', user: false })
	// }
})

router.get('/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

router.post('/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

module.exports = router;
