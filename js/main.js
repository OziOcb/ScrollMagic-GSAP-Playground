let counter = 1;
const controller = new ScrollMagic.Controller({addIndicators: true});

// users fading ing
const users = document.querySelectorAll('.user');
users.forEach(user => {
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

// parallax section
const parallaxTimeLine = new TimelineMax();
parallaxTimeLine
	.from('.sectionParallax__content', .15, {autoAlpha: 0, ease:Power0.easeNone}, .5)
	.from('.sectionParallax__bg', 2, {y: '-25%', ease:Power0.easeNone}, 0);

const sectionParallaxScene = new ScrollMagic.Scene({
	triggerElement: '.sectionParallax',
	triggerHook: 1,
	duration: '200%'
})
	.addIndicators({
		name: `parallax`,
		colorEnd: "#b00b55",
		colorTrigger: "#ddd"
	})
	.setTween(parallaxTimeLine)
	.addTo(controller)
