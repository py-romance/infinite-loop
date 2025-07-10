
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
                    glyph.classList.add('hovered');
                });

                glyph.addEventListener('mouseleave', () => {
                    glyph.classList.remove('hovered');
                });
            });
        }

        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            initializeGlyphs();
        });
