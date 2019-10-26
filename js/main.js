const curtainItems = document.querySelectorAll('.curtain__item');
const curtianToggleBtn = document.querySelector('.sectionCurtain__btn');

const changeButtonText = direction => {
	curtianToggleBtn.removeAttribute('disabled');
	direction === 'reverse'
		? (curtianToggleBtn.textContent = 'Click to Show Me')
		: (curtianToggleBtn.textContent = 'Click to Hide Me..');
};

const curtainTl = new TimelineMax({
	paused: true,
	reversed: true,
	onComplete: changeButtonText,
	onReverseComplete: changeButtonText,
	onReverseCompleteParams: ['reverse']
});
curtainTl
	.staggerTo(curtainItems, 1, { y: 0 }, 0.2)
	.staggerTo(curtainItems, 1, { filter: 'saturate(1)' }, 0.1)
	.to(
		curtianToggleBtn,
		1,
		{
			backgroundColor: 'black',
			y: -100,
			scale: 1.4,
			ease: Power2.easeOut
		},
		0.3
	);

curtianToggleBtn.addEventListener('click', () => {
	curtianToggleBtn.textContent = 'wait!';
	curtianToggleBtn.setAttribute('disabled', true);
	curtainTl.reversed() ? curtainTl.play() : curtainTl.reverse();
});

let counter = 1;
const controller = new ScrollMagic.Controller({ addIndicators: true });

// users fading ing
const users = document.querySelectorAll('.user');
users.forEach(user => {
	new ScrollMagic.Scene({
		triggerElement: user,
		triggerHook: 0.6,
		duration: '90%'
	})
		.addIndicators({
			name: `user-${counter++}`,
			colorEnd: '#b00b55',
			colorTrigger: '#ddd'
		})
		.setClassToggle(user, 'show')
		.addTo(controller);
});

// parallax section
const parallaxTimeLine = new TimelineMax();
parallaxTimeLine
	.from(
		'.sectionParallax__content',
		0.15,
		{ autoAlpha: 0, ease: Power0.easeNone },
		0.5
	)
	.from('.sectionParallax__bg', 2, { y: '-25%', ease: Power0.easeNone }, 0);

const sectionParallaxScene = new ScrollMagic.Scene({
	triggerElement: '.sectionParallax',
	triggerHook: 1,
	duration: '200%'
})
	.addIndicators({
		name: `parallax`,
		colorEnd: '#b00b55',
		colorTrigger: '#ddd'
	})
	.setTween(parallaxTimeLine)
	.addTo(controller);
