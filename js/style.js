// Tunggu sampai seluruh halaman HTML dimuat
window.addEventListener('DOMContentLoaded', (event) => {

    // 1. Ambil elemen header Anda berdasarkan ID-nya
    const header = document.getElementById("main-header");

    // 2. Tentukan di jarak scroll berapa header akan berubah (misal 50px)
    const scrollThreshold = 50; 

    // 3. Buat fungsi yang akan dijalankan setiap kali user scrolling
    function checkScroll() {
        // Cek posisi scroll vertikal saat ini
        if (window.scrollY > scrollThreshold) {
            // Jika sudah scroll melewati batas, TAMBAHKAN class
            header.classList.add("header-scrolled");
        } else {
            // Jika kembali ke atas, HAPUS class
            header.classList.remove("header-scrolled");
        }
    }

    // 4. "Dengarkan" event 'scroll' di window
    //    Setiap kali user scroll, jalankan fungsi checkScroll
    window.addEventListener("scroll", checkScroll);
});