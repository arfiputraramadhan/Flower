onload = () => {
    document.body.classList.remove("container");
    
    // Memutar musik background
    const audio = document.getElementById("background-music");
    if (audio) {
        audio.volume = 0.5; // Atur volume (opsional, 0.0 - 1.0)
        audio.play().catch(e => {
            console.log("Autoplay diblokir oleh browser:", e);
            // Opsi: Tambahkan tombol untuk memutar musik jika autoplay diblokir
            const playButton = document.createElement('button');
            playButton.textContent = 'Putar Musik';
            playButton.style.cssText = 'position:fixed; top:20px; right:20px; z-index:9999; padding:10px; background:#4CAF50; color:white; border:none; border-radius:5px; cursor:pointer;';
            playButton.onclick = () => {
                audio.play();
                playButton.remove();
            };
            document.body.appendChild(playButton);
        });
    }
    
    // Fungsi animasi ketik
    function typeWriter(text, element, speed = 80) {
        let i = 0;
        element.innerHTML = "";
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Mulai animasi ketik setelah halaman dimuat
    setTimeout(() => {
        const textElement = document.getElementById("typed-text");
        if (textElement) {
            const message = "Selamat sudah lulus menjadi s1 manajemen, Nayla Fariza Aulia! 🎉";
            typeWriter(message, textElement, 80);
            
            // Opsional: Sembunyikan cursor setelah selesai mengetik
            setTimeout(() => {
                const cursor = document.querySelector('.typing-cursor');
                if (cursor) {
                    cursor.style.opacity = '0';
                }
            }, message.length * 80 + 1000);
        }
    }, 1000); // Delay 1 detik sebelum mulai mengetik
};