
        // Generate random stars
        function createStars() {
            const starsContainer = document.querySelector('.stars');
            const numStars = 100;
            
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Pentagon glyph hover effects
        function initializeGlyphs() {
            const glyphs = document.querySelectorAll('.pentagon-glyph');
            
            glyphs.forEach(glyph => {
                // Ensure they can receive pointer events
                glyph.style.pointerEvents = 'auto';
                
                glyph.addEventListener('mouseenter', () => {
                    if (!glyph.classList.contains('active')) {
                        glyph.classList.add('hovered');
                    }
                });
                
                glyph.addEventListener('mouseleave', () => {
                    glyph.classList.remove('hovered');
                });
            });
        }

        // Pentagon interaction logic
        const glyphs = document.querySelectorAll('.pentagon-glyph');
        const contentSections = document.querySelectorAll('.content-section');
        const title = document.getElementById('title');
        let activeGlyph = null;

        function initializeInteractions() {
            glyphs.forEach(glyph => {
                glyph.addEventListener('click', function() {
                    const contentId = this.getAttribute('data-content');
                    
                    // If clicking the same glyph, deactivate
                    if (activeGlyph === this) {
                        deactivateAll();
                        return;
                    }
                    
                    // Deactivate all first
                    deactivateAll();
                    
                    // Activate clicked glyph and its content
                    this.classList.add('active');
                    this.classList.remove('hovered'); // Remove hover class when active
                    document.getElementById('content-' + contentId).classList.add('active');
                    title.classList.add('hidden');
                    
                    activeGlyph = this;
                });
            });
        }

        function deactivateAll() {
            glyphs.forEach(g => {
                g.classList.remove('active');
                g.classList.remove('hovered');
            });
            contentSections.forEach(c => c.classList.remove('active'));
            title.classList.remove('hidden');
            activeGlyph = null;
        }

        // Click outside to deactivate
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.pentagon-glyph') && !e.target.closest('.content-section')) {
                deactivateAll();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                deactivateAll();
            }
        });

        // Initialize on load
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            initializeGlyphs();
            initializeInteractions();
        });
    