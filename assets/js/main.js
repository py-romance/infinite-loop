
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
                glyph.addEventListener('mouseenter', function() {
                    this.style.transform = this.style.transform.replace('translateX(-50%)', 'translateX(-50%) scale(1.2)') || 'scale(1.2)';
                });
                
                glyph.addEventListener('mouseleave', function() {
                    this.style.transform = this.style.transform.replace('scale(1.2)', '') || '';
                });
            });
        }
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            initializeGlyphs();
        });
