/**
 * 主交互脚本
 */

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // 导航链接点击效果
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active状态
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加当前 active
            this.classList.add('active');
            
            // 平滑滚动到目标
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
