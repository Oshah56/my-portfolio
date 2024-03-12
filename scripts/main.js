// Animate skill bars function
function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');

    skillFills.forEach(skillFill => {
        const level = skillFill.getAttribute('data-level');
        skillFill.style.width = level;
    });
}

// Add window event listener for when all DOM content is loaded
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Existing code for footer images
document.querySelectorAll('footer img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(0.5)';
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Existing code for .img-box hover effect
document.querySelectorAll('.img-box').forEach(function(box) {
    box.addEventListener('mouseenter', function() {
        // On mouse enter
        this.querySelector('img').style.transform = 'scale(1.1)';
        this.querySelector('.transparent-box').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        this.querySelector('.caption').style.transform = 'translateY(-20px)';
        this.querySelector('.caption').style.opacity = '1';
    });

    box.addEventListener('mouseleave', function() {
        // On mouse leave
        this.querySelector('img').style.transform = 'scale(1)';
        this.querySelector('.transparent-box').style.backgroundColor = 'rgba(0, 0, 0, 0)';
        this.querySelector('.caption').style.transform = 'translateY(0)';
        this.querySelector('.caption').style.opacity = '0';
    });
});



  
      