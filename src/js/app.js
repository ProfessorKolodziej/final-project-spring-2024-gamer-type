

console.log('hi')


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
		text: "Middle school: capture the flag",
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
		text: "Someone needs to make a sacrifice",
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
		text: "New game, what turn are you taking?",
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
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		//left off here
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Mastermind",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Tactican",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Mastermind",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Mastermind",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Strategist",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Synergist",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Daredevil",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Synergist",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Synergist",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Mastermind",
	},
	//here
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Catalyst",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["High risk, high reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "With the friend.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ll be going for the flag.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To win.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "The underdog. Always the underdog.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "Rather not, I have somewhere to be.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It’s not gonna be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’d prefer to go last", "I’m asking others what they want to do"],
		text: "Sparkplug",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m telling others what to do"],
		text: "Maverick",
	},
	{
		combination: ["Low risk, calculated reward", "By myself.", "I’ve got defense.", "To see if I can get away with it.", "Let’s be for real, I’m taking the guaranteed champ.", "I’m always down for a lil detour.", "It could very well be me.", "I’ve got first", "I’m asking others what they want to do"],
		text: "Sparkplug",
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


			const answerTitle = document.createElement('h3')
			answerTitle.textContent = answer.text

			const answerInfo = document.createElement('p')

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



	let pageToOpen = "";
	switch (result.text) {
		case "Maverick":
			pageToOpen = "maverickR.html";
			break;
		case "Sparkplug":
			pageToOpen = "sparkplugR.html";
			break;
		case "Catalyst":
			pageToOpen = "catalystR.html";
			break;
		case "Mastermind":
			pageToOpen = "mastermindR.html";
			break;
		case "Daredevil":
			pageToOpen = "daredevilR.html";
			break;
		case "Strategist":
			pageToOpen = "strategistR.html";
			break;
		case "Synergist":
			pageToOpen = "synergistR.html";
			break;
		case "Tactician":
			pageToOpen = "tacticianR.html";
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


