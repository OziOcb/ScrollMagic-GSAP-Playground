let counter = 1;
const controller = new ScrollMagic.Controller({addIndicators: true});

const users = document.querySelectorAll('.user');
users.forEach(user => {
	console.log('user -->', user);
	new ScrollMagic.Scene({
		triggerElement: user,
		triggerHook: 0.6,
		duration: '90%',
	})
		.addIndicators({
			name: `user-${counter++}`,
			colorEnd: "#b00b55",
			colorTrigger: "#ddd"
		})
		.setClassToggle(user, "show")
		.addTo(controller);
})
