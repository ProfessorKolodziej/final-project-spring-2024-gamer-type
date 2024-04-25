// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log('hi')

/* const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answers')

const questions = [
	{
		id: 0,
		text: "Pick one:",
		answers: [
			{
				text: "High risk, high reward"
			},
			{
				text: "Low risk, calculated reward"
			}
		]
	},
	{
		id: 1,
		text: "I'd rather cook a meal for a friend:",
		answers: [
			{
				text: "With the friend."
			},
			{
				text: "By myself."
			}
		]
	},
	{
		id: 2,
		text: "Flashback to middle school: capture the flag,",
		answers: [
			{
				text: "I'll be going for the flag."
			},
			{
				text: "I've got defense."
			}
		]
	},
	{
		id: 3,
		text: "If you had to cheat (in a game) it'd be:",
		answers: [
			{
				text: "To win."
			},
			{
				text: "To see if I can get away with it."
			}
		]
	},
	{
		id: 4,
		text: "Choose your fighter:",
		answers: [
			{
				text: "The underdog. Always the underdog."
			},
			{
				text: "Let's be fo real, I'm taking the guaranteed champ."
			}
		]
	},
	{
		id: 5,
		text: "Thoughts on meandering:",
		answers: [
			{
				text: "Rather not, I have somewhere to be"
			},
			{
				text: "I'm always down for a little detour"
			}
		]
	},
	{
		id: 6,
		text: "Someone here needs to make a sacrifice",
		answers: [
			{
				text: "It's not gonna be me."
			},
			{
				text: "It could very well be me."
			}
		]
	},
	{
		id: 7,
		text: "First time playing a game, what turn are you taking?",
		answers: [
			{
				text: "I'd prefer to go last"
			},
			{
				text: "I've got first"
			}
		]
	},
	{
		id: 8,
		text: "On a group project",
		answers: [
			{
				text: "I'm telling others what to do"
			},
			{
				text: "I'm asking others what they want to do"
			}
		]
	}

]

const answers = [
	{
		combination: ["High risk, high reward", "With the friend.", "I'll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be", "It's not gonna be me.", "It's not gonna be me.", "I'm telling others what to do"],
		text: "Type 1"
	}

	/*{
		combination: ["A", "C", "E", "G", "I", "K", "M", "O", "R"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "G", "I", "K", "M", "P", "Q"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "G", "I", "K", "M", "P", "R"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "G", "I", "K", "N", "P", "Q"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "G", "I", "K", "N", "P", "R"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "G", "I", "L", "N", "P", "Q"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "G", "I", "L", "N", "P", "R"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "G", "J", "L", "N", "P", "Q"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "G", "J", "L", "N", "P", "R"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "H", "J", "L", "N", "P", "Q"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "E", "H", "J", "L", "N", "P", "R"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "F", "H", "J", "L", "N", "P", "Q"],
		text: "Type 1"
	},

	{
		combination: ["A", "C", "F", "H", "J", "L", "N", "P", "R"],
		text: "Type 1"
	},

	{
		combination: ["A", "D", "F", "H", "J", "L", "N", "P", "Q"],
		text: "Type 1"
	},

	{
		combination: ["A", "D", "F", "H", "J", "L", "N", "P", "R"],
		text: "Type 1"
	},

	{
		combination: ["B", "D", "F", "H", "J", "L", "N", "P", "Q"],
		text: "Type 1"
	},

	{
		combination: ["B", "D", "F", "H", "J", "L", "N", "P", "R"],
		text: "Type 1"
	},*/

const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
	{
		id: 0,
		text: "Pick one:",
		answers: [
			{
				text: "High risk, high reward",
			},
			{
				text: "Low risk, calculated reward",
			}
		]
	},
	{
		id: 1,
		text: "I’d rather cook a meal for a friend:",
		answers: [
			{
				text: "With the friend.",
			},
			{
				text: "By myself.",
			},
		]
	},
	{
		id: 2,
		text: "Flashback to middle school: capture the flag.",
		answers: [
			{
				text: "I’ll be going for the flag.",
			},
			{
				text: "I’ve got defense.",
			},
		]
	},

	{
		id: 3,
		text: "If you had to cheat (in a game) it’d be:",
		answers: [
			{
				text: "To win.",
			},
			{
				text: "To see if I can get away with it.",
			}
		]
	},
	{
		id: 4,
		text: "Choose your fighter:",
		answers: [
			{
				text: "The underdog. Always the underdog.",
			},
			{
				text: "Let’s be for real, I’m taking the guaranteed champ.",
			}
		]
	},
	{
		id: 5,
		text: "Thoughts on meandering:",
		answers: [
			{
				text: "Rather not, I have somewhere to be.",
			},
			{
				text: "I’m always down for a lil detour.",
			}
		]
	},
	{
		id: 6,
		text: "Someone here needs to make a sacrifice",
		answers: [
			{
				text: "It’s not gonna be me.",
			},
			{
				text: "It could very well be me.",
			}
		]
	},
	{
		id: 7,
		text: "First time playing a game, what turn are you taking?",
		answers: [
			{
				text: "I’d prefer to go last",
			},
			{
				text: "I’ve got first",
			}
		]
	},
	{
		id: 8,
		text: "On a group project",
		answers: [
			{
				text: "I’m telling others what to do",
			},
			{
				text: "I’m asking others what they want to do",
			}
		]
	}
]

const answers = [
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Maverick",
	},
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
	questions.forEach(question => {
		const titleBlock = document.createElement('div')
		titleBlock.id = question.id
		titleBlock.classList.add('title-block')
		const titleHeading = document.createElement('h2')
		titleHeading.textContent = question.text
		titleBlock.append(titleHeading)
		questionDisplay.append(titleBlock)

		const answersBlock = document.createElement('div')
		answersBlock.id = question.id + "-questions"
		answersBlock.classList.add('answer-options')

		unansweredQuestions.push(question.id)

		question.answers.forEach(answer => {
			const answerBlock = document.createElement('div')
			answerBlock.classList.add('answer-block')
			answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
			//const answerImage = document.createElement('img')
			//answerImage.setAttribute('src', answer.image)
			//answerImage.setAttribute('alt', answer.alt)

			const answerTitle = document.createElement('h3')
			answerTitle.textContent = answer.text

			const answerInfo = document.createElement('p')
			//const imageLink = document.createElement('a')
			//imageLink.setAttribute('href', answer.image)
			//imageLink.textContent = answer.credit
			//const sourceLink = document.createElement('a')
			//sourceLink.textContent = 'Unsplash'
			//sourceLink.setAttribute('src', 'https://www.unsplash.com')
			//answerInfo.append(imageLink, ' to ', sourceLink)

			answerBlock.append(answerTitle, answerInfo)

			answersBlock.append(answerBlock)
		})

		questionDisplay.append(answersBlock)

	})
}
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
	if (unansweredQuestions.includes(questionId))
		chosenAnswers.push(chosenAnswer)
	const itemToRemove = unansweredQuestions.indexOf(questionId)

	if (itemToRemove > -1) {
		unansweredQuestions.splice(itemToRemove, 1)
	}
	//console.log(chosenAnswers)
	//console.log(unansweredQuestions)

	disableQuestionBlock(questionId, chosenAnswer)
	const lowestQuestionId = Math.min(...unansweredQuestions)
	location.href = '#' + lowestQuestionId

	if (!unansweredQuestions.length) {
		location.href = '#answer'
		showAnswer()
	}
}

const showAnswer = () => {
	let result
	answers.forEach(answer => {
		const isMatch = answer.combination.every(combinationItem => chosenAnswers.includes(combinationItem));
		if (isMatch) {
			result = answer;
		} else if (!result) {
			//first answer object is default
			result = answers[0]
		}
	})


	const answerBlock = document.createElement('div')
	answerBlock.classList.add('result-block')
	const answerTitle = document.createElement('h3')
	answerTitle.textContent = result.text

	answerBlock.append(answerTitle)

	answerDisplay.append(answerBlock)

	const allAnswerBlocks = document.querySelectorAll('.answer-block')
	Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

	let pageToOpen = "";
	switch (result.text) {
		case "Maverick":
			pageToOpen = "maverick.html";
			break;
		case "Sparkplug":
			pageToOpen = "sparkplug.html";
			break;
		case "Feta":
			pageToOpen = "feta.html";
			break;
		case "Halloumi":
			pageToOpen = "halloumi.html";
			break;
		default:
			pageToOpen = "default.html";
	}

	// Open the specific HTML page in a new window
	window.open(pageToOpen, "_blank");
}




const disableQuestionBlock = (questionId, chosenAnswer) => {
	const currentQuestionBlock = document.getElementById(questionId + "-questions")

	Array.from(currentQuestionBlock.children).forEach(block => {
		if (block.children.item(1).innerText !== chosenAnswer) {
			block.style.opacity = "50%"
		}
	})
}


/*const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
questions.forEach(question => {
	const titleBlock = document.createElement('div')
	titleBlock.id = question.id
	titleBlock.classList.add('title-block')
	const titleHeading = document.createElement('h2')
	titleHeading.textContent = question.text
	titleBlock.append(titleHeading)
	questionDisplay.append(titleBlock)

	const answersBlock = document.createElement('div')
	answersBlock.id = question.id + "-questions"
	answersBlock.classList.add('answer-options')

	unansweredQuestions.push(question.id)

	question.answers.forEach(answer => {
		const answerBlock = document.createElement('div')
		answerBlock.classList.add('answer-block')
		answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))

		const answerTitle = document.createElement('h3')
		answerTitle.textContent = answer.text



		answerBlock.append(answerTitle)

		answersBlock.append(answerBlock)
	})

	questionDisplay.append(answersBlock)
})
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
if (unansweredQuestions.includes(questionId))
	chosenAnswers.push(chosenAnswer)
const itemToRemove = unansweredQuestions.indexOf(questionId)

if (itemToRemove > -1) {
	unansweredQuestions.splice(itemToRemove, 1)
}
console.log(chosenAnswers)
console.log(unansweredQuestions)

const lowestQuestionId = Math.min(...unansweredQuestions)
location.href = '#' + lowestQuestionId


if (!unansweredQuestions.length) {
	location.href = '#answers'
	showAnswer()
}
}

const showAnswer = () => {

let result
answers.forEach(answer => {
	if (chosenAnswers.includes(answer.combination[0]) +
		(chosenAnswers.includes(answer.combination[1])) +
		(chosenAnswers.includes(answer.combination[2])) +
		(chosenAnswers.includes(answer.combination[3])) +
		(chosenAnswers.includes(answer.combination[4])) +
		(chosenAnswers.includes(answer.combination[5])) +
		(chosenAnswers.includes(answer.combination[6])) +
		(chosenAnswers.includes(answer.combination[7])) +
		(chosenAnswers.includes(answer.combination[8]))

	) {
		result = answer
		return
	} else if (!result) {
		result = answers[0]
	}
})
const answerBlock = document.createElement('div')
answerBlock.classList.add('result-block')
const answerTitle = document.createElement('h3')
answerTitle.textContent = result.text

answerBlock.append(answerTitle)
answerDisplay.append(answerBlock)

const allAnswerBlocks = document.querySelectorAll('.answer-block')
Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}

*/
