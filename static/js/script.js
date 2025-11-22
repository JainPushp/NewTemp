const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');
const projectCards = document.querySelectorAll('.project-card');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const projectData = {
    swarovski: {
        title: 'Swarovski Rebranding Campaign',
        subtitle: 'Brand Strategy & Marketing Campaign',
        description: 'A comprehensive marketing campaign designed to attract younger audiences to Swarovski while maintaining the brand\'s signature elegance and luxury positioning.',
        role: 'Lead Designer & Brand Strategist',
        context: 'Swarovski wanted to modernize their brand appeal for younger consumers without losing their elegant, luxury positioning. The challenge was to create a fresh, youthful approach while honoring the brand\'s heritage of craftsmanship and sophistication.',
        solution: 'Developed two distinct design directions: an aesthetic approach featuring trendy diamond rings for minimalist fashion lovers, and an elegance approach with modern layered necklaces for classic beauty enthusiasts. Both directions maintain Swarovski\'s signature sparkle while feeling contemporary and accessible.',
        deliverables: [
            'Complete brand strategy presentation',
            'Two design direction concepts (Aesthetic & Elegance)',
            'Social media campaign assets (Instagram, TikTok, Pinterest)',
            'Digital marketing materials and short-form video content',
            'In-store marketing materials including posters and window displays',
            'Website and e-commerce visual designs',
            'Print advertisements for magazines and lookbooks',
            'Packaging and retail point-of-sale designs',
            'Influencer collaboration guidelines',
            'Complete budget breakdown and timeline'
        ],
        outcomes: [
            'Created cohesive brand narrative appealing to younger demographics',
            'Designed comprehensive marketing ecosystem across multiple touchpoints',
            'Developed scalable visual system maintaining brand consistency',
            'Balanced modern trends with timeless elegance',
            'Proposed 3-week campaign launch strategy with clear success metrics'
        ],
        skills: 'Brand Strategy, Campaign Design, Digital Marketing, Social Media Design, Print Design, Packaging Design, Visual Identity'
    },
    logo: {
        title: 'Professional Logo Design',
        subtitle: 'Brand Identity Development',
        description: 'Custom logo design project combining modern aesthetics with timeless appeal to create memorable brand identities.',
        role: 'Logo Designer',
        context: 'Logo design requires understanding brand essence and translating it into a visual mark that is both distinctive and versatile. This project showcases my ability to create professional, scalable logos that work across all applications.',
        solution: 'Created a sophisticated logo design using Adobe Illustrator, focusing on clean lines, balanced composition, and versatility. The design works seamlessly across digital and print applications while maintaining visual impact at any size.',
        deliverables: [
            'Primary logo design in multiple formats (AI, PDF)',
            'Logo variations (full color, monochrome, reversed)',
            'Brand mark and wordmark versions',
            'Usage guidelines and specifications',
            'Color palette and typography recommendations'
        ],
        outcomes: [
            'Delivered versatile logo system working across all mediums',
            'Created memorable visual identity with strong brand recognition',
            'Established scalable design that maintains integrity at any size',
            'Provided comprehensive file formats for all applications'
        ],
        skills: 'Logo Design, Brand Identity, Adobe Illustrator, Typography, Color Theory, Visual Identity Systems'
    },
    moneyheist: {
        title: 'Money Heist Brand Campaign',
        subtitle: 'Netflix Series Brand Guidelines & Marketing',
        description: 'Complete brand guidelines and marketing materials for Money Heist Netflix presentation, including visual identity, poster design, and storyboard development.',
        role: 'Brand Designer & Creative Director',
        context: 'Created comprehensive brand guidelines and marketing materials for a Money Heist themed project, capturing the show\'s bold, dramatic aesthetic while maintaining professional presentation standards for Netflix.',
        solution: 'Developed complete brand identity system including detailed brand guidelines, dramatic poster designs, and comprehensive storyboards. The visual approach captures the series\' iconic red and black color scheme, tension-filled atmosphere, and sophisticated heist narrative.',
        deliverables: [
            'Complete Money Heist brand guideline document (PDF)',
            'Promotional poster designs',
            'Comprehensive storyboard for visual narrative',
            'Netflix presentation video (NETFLIX PRESENTS.mp4)',
            'Brand color palette and typography system',
            'Visual identity standards and usage guidelines'
        ],
        outcomes: [
            'Created cohesive brand system capturing show\'s dramatic essence',
            'Delivered professional presentation materials for Netflix standard',
            'Established consistent visual language across all touchpoints',
            'Demonstrated ability to work with existing IP and brand guidelines'
        ],
        skills: 'Brand Guidelines, Poster Design, Storyboarding, Video Production, Visual Identity, Adobe Creative Suite, Brand Standards Documentation'
    },
    midnightbrunch: {
        title: 'Midnight Brunch Event Branding',
        subtitle: 'Complete Event Identity & Marketing Collateral',
        description: 'Comprehensive event branding package for Midnight Brunch, including invitations, tickets, promotional materials, and complete visual identity system.',
        role: 'Event Brand Designer',
        context: 'Midnight Brunch required a sophisticated yet approachable brand identity that would appeal to the target audience and create excitement around the event. The challenge was creating a cohesive system across multiple touchpoints from digital to print.',
        solution: 'Developed complete event branding starting with creative brief and moodboard, then executing across all necessary materials. The design balances elegance with contemporary style, using carefully selected typography, color palette, and visual elements that create a memorable event experience.',
        deliverables: [
            'Creative brief structure and strategy document',
            'Event details documentation',
            'Visual moodboard establishing aesthetic direction',
            'Postcard designs (front and back)',
            'Event ticket designs (front and back)',
            'Visiting card designs (front and back)',
            'Two complete mockup presentations',
            'Brand color palette and typography system'
        ],
        outcomes: [
            'Created unified brand experience across all event touchpoints',
            'Delivered print-ready designs for all marketing materials',
            'Established scalable visual system for future events',
            'Balanced sophistication with accessibility in design approach',
            'Provided professional mockups demonstrating real-world applications'
        ],
        skills: 'Event Branding, Print Design, Invitation Design, Mockup Creation, Adobe Illustrator, Typography, Layout Design, Brand Systems'
    },
    calgarystampede: {
        title: 'Calgary Stampede Event Poster',
        subtitle: 'Event Poster Design & Visual Communication',
        description: 'Dynamic poster design for Calgary Stampede, capturing the excitement and western heritage of one of the world\'s largest rodeo events.',
        role: 'Poster Designer',
        context: 'Calgary Stampede is an iconic annual rodeo and festival celebrating western heritage and culture. The poster needed to capture the high-energy atmosphere, cowboy spirit, and community excitement while being visually striking and instantly recognizable.',
        solution: 'Created a bold, high-impact poster design featuring a striking silhouette of a bull rider on a vibrant red background. The design uses strong typography and a cut-paper effect to create depth and drama, immediately communicating the event\'s energy and western theme.',
        deliverables: [
            'Main event poster design',
            'Typography layout with clear event information',
            'Silhouette illustration of iconic rodeo imagery',
            'Color scheme emphasizing brand recognition (Calgary red)',
            'Print-ready format for large-scale production',
            'Scalable design for various applications'
        ],
        outcomes: [
            'Created memorable visual identity for major cultural event',
            'Achieved strong visual impact through bold color and composition',
            'Delivered clear event communication with engaging aesthetics',
            'Designed scalable artwork suitable for multiple formats',
            'Captured authentic western heritage while feeling contemporary'
        ],
        skills: 'Poster Design, Event Graphics, Typography, Illustration, Adobe Illustrator, Print Design, Visual Communication, Brand Identity'
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        const project = projectData[projectId];
        
        if (project) {
            modalBody.innerHTML = `
                <div class="modal-project-content">
                    <h2>${project.title}</h2>
                    <p style="color: var(--secondary-color); font-size: 1.1rem; margin-bottom: 2rem;">${project.subtitle}</p>
                    
                    <p style="font-size: 1.1rem; line-height: 1.8;">${project.description}</p>
                    
                    <div class="project-details">
                        <p><strong>Role:</strong> ${project.role}</p>
                    </div>
                    
                    <h3>Project Context</h3>
                    <p>${project.context}</p>
                    
                    <h3>Solution & Approach</h3>
                    <p>${project.solution}</p>
                    
                    <h3>Deliverables</h3>
                    <ul>
                        ${project.deliverables.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    
                    <h3>Outcomes</h3>
                    <ul>
                        ${project.outcomes.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    
                    <div class="project-details" style="margin-top: 2rem;">
                        <p><strong>Skills Applied:</strong> ${project.skills}</p>
                    </div>
                </div>
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});
