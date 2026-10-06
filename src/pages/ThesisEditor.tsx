import React, { useState } from 'react';
    import { Navbar } from '../components/Navbar';
    import { Footer } from '../components/Footer';
    import { ExportModal } from '../components/ExportModal';
    import { 
      FileText, 
      Sparkles, 
      Save, 
      Download, 
      Cpu, 
      BookOpen, 
      CheckCircle2, 
      RotateCcw,
      Layers,
      ChevronRight,
      HelpCircle
    } from 'lucide-react';
    import { toast } from 'react-toastify';

    export const ThesisEditor: React.FC = () => {
      const [activeSection, setActiveSection] = useState('ringkasan');
      const [isGenerating, setIsGenerating] = useState(false);
      const [exportModalOpen, setExportModalOpen] = useState(false);
      const [activeAiModel, setActiveAiModel] = useState('Groq Llama 3 70B (Free)');

      const [thesisData, setThesisData] = useState({
        title: 'Kajian Pemodelan Laju Erosi dan Arahan Konservasi Tanah Menggunakan Metode USLE dan SIG pada Perkebunan Kelapa Sawit Rakyat di Sub-Das Sekampung Hulu',
        author: 'Dian Rahmat (NIM: 220610042)',
        advisor1: 'Prof. Dr. Ir. Irwan Effendi, M.Sc.',
        advisor2: 'Dr. Agr. Sc. Siti Nurul Aini, S.P., M.Si.',
        sections: {
          ringkasan: `RINGKASAN
Dian Rahmat. 2026. Kajian Pemodelan Laju Erosi dan Arahan Konservasi Tanah Menggunakan Metode USLE dan SIG pada Perkebunan Kelapa Sawit Rakyat di Sub-DAS Sekampung Hulu. Dibimbing oleh Irwan Effendi dan Siti Nurul Aini.

Perkebunan kelapa sawit rakyat di Sub-DAS Sekampung Hulu menghadapi tantangan serius berupa degradasi lahan akibat laju erosi yang melebihi batas toleransi. Penelitian ini bertujuan untuk: (1) Menghitung besaran nilai komponen USLE (R, K, LS, C, dan P); (2) Memetakan sebaran spasial laju erosi aktual menggunakan teknologi Sistem Informasi Geografis (SIG); dan (3) Merumuskan arahan konservasi tanah vegetatif dan sipil teknis yang aplikatif. Metode yang digunakan adalah survei lapang, analisis laboratorium sifat fisik tanah (porositas, tekstur, permeabilitas), serta pengolahan citra DEM SRTM. Hasil penelitian menunjukkan bahwa rata-rata laju erosi aktual mencapai 76,4 ton/ha/tahun yang diklasifikasikan ke dalam Tingkat Bahaya Erosi (TBE) Sedang hingga Berat. Arahan konservasi prioritas meliputi pembuatan teras bangku pada lereng >15% dan penanaman cover crop (Mucuna bracteata).

Kata Kunci: Erosi Tanah, USLE, SIG, Kelapa Sawit Rakyat, Konservasi Tanah.`,

          summary: `SUMMARY
Dian Rahmat. 2026. Erosion Rate Modeling and Soil Conservation Directives Using USLE and GIS Methods in Smallholder Oil Palm Plantations in the Upper Sekampung Sub-Watershed. Supervised by Irwan Effendi and Siti Nurul Aini.

Smallholder oil palm plantations in the Upper Sekampung Sub-Watershed face severe land degradation challenges due to erosion rates exceeding tolerable limits. This study aims to: (1) Calculate USLE component values (R, K, LS, C, and P); (2) Map spatial distribution of actual erosion rates using Geographic Information Systems (GIS); and (3) Formulate applicable vegetative and civil engineering soil conservation directives. Field surveys, soil physical property laboratory analysis (porosity, texture, permeability), and SRTM DEM image processing were employed. Results indicate an average actual erosion rate of 76.4 tons/ha/year, classified as Moderate to Severe Soil Erosion Hazard Levels (TBE). Priority conservation directives include bench terracing on slopes >15% and planting cover crops (Mucuna bracteata).

Keywords: Soil Erosion, USLE, GIS, Smallholder Oil Palm, Soil Conservation.`,

          kataPengantar: `KATA PENGANTAR
Puji syukur penulis panjatkan kehadirat Allah SWT karena atas rahmat dan karunia-Nya, tesis berjudul "Kajian Pemodelan Laju Erosi dan Arahan Konservasi Tanah Menggunakan Metode USLE dan SIG pada Perkebunan Kelapa Sawit Rakyat di Sub-DAS Sekampung Hulu" dapat diselesaikan dengan baik. Tesis ini disusun sebagai salah satu syarat untuk memperoleh gelar Magister Agroteknologi (M.P.) pada Program Studi Magister Agroteknologi Fakultas Pertanian.

Penulis menyampaikan ucapan terima kasih yang sebesar-besarnya kepada:
1. Prof. Dr. Ir. Irwan Effendi, M.Sc. selaku Pembimbing Utama yang telah memberikan bimbingan, arahan, dan motivasi ilmiah yang sangat berharga.
2. Dr. Agr. Sc. Siti Nurul Aini, S.P., M.Si. selaku Pembimbing Pendamping yang senantiasa sabar membimbing teknis analisis laboratorium dan SIG.
3. Seluruh petani kelapa sawit rakyat di Sub-DAS Sekampung Hulu atas kerjasamanya selama survei lapang.

Penulis menyadari bahwa tesis ini masih jauh dari sempurna. Oleh karena itu, kritik dan saran yang membangun sangat diharapkan demi kesempurnaan karya ilmiah ini.

Bandung, Februari 2026

Penulis`,

          biodata: `BIODATA MAHASIWA
Nama Lengkap : Dian Rahmat, S.P.
Nomor Induk Mahasiswa : 220610042
Program Studi : Magister Agroteknologi (S2)
Fakultas : Pertanian
Tempat, Tanggal Lahir : Sukabumi, 14 Mei 1998
Riwayat Pendidikan:
1. S1 Agroteknologi, Universitas Padjadjaran (2016 – 2020)
2. S2 Agroteknologi, Universitas Pertanian Indonesia (2024 – 2026)

Publikasi Ilmiah Selama Studi:
- Rahmat, D., Effendi, I., & Aini, S.N. (2025). Spatial Analysis of Rainfall Erosivity in Smallholder Oil Palm Plantations. Jurnal Tanah dan Sumberdaya Lahan, 12(2), 145-152.`,

          daftarIsi: `DAFTAR ISI
HALAMAN JUDUL ............................................................................ i
HALAMAN PENGESAHAN ................................................................. ii
RINGKASAN ................................................................................... iii
SUMMARY .................................................................................... iv
KATA PENGANTAR .......................................................................... v
BIODATA MAHASIWA ...................................................................... vi
DAFTAR ISI ..................................................................................... vii
DAFTAR TABEL ............................................................................... ix
DAFTAR GAMBAR ............................................................................ x
DAFTAR LAMPIRAN ......................................................................... xi
BAB 1. PENDAHULUAN ................................................................. 1
   1.1 Latar Belakang ......................................................................... 1
   1.2 Rumusan Masalah .................................................................... 5
   1.3 Tujuan Penelitian ..................................................................... 7
   1.4 Manfaat Penelitian ................................................................... 8
   1.5 Ruang Lingkup Penelitian ......................................................... 9
BAB 2. TINJAUAN PUSTAKA ........................................................... 11
   2.1 Konsep Erosi Tanah dan Faktor Penyebabnya ........................... 11
   2.2 Karakteristik Perkebunan Kelapa Sawit Rakyat ....................... 16
   2.3 Metode Universal Soil Loss Equation (USLE) ............................ 20
   2.4 Tingkat Bahaya Erosi (TBE) .................................................... 31
   2.5 Peran Sistem Informasi Geografis (SIG) dalam Pemodelan Erosi ... 36
   2.6 Kerangka Pemikiran ................................................................. 40
BAB 3. METODOLOGI PENELITIAN ................................................ 43
   3.1 Waktu dan Tempat Penelitian ................................................. 43
   3.2 Alat dan Bahan ....................................................................... 45
   3.3 Jenis dan Sumber Data ........................................................... 47
   3.4 Prosedur Pengumpulan Data .................................................. 49
   3.5 Metode Analisis Parameter USLE ............................................ 54
   3.6 Perhitungan Laju Erosi dan TBE .............................................. 62
   3.7 Bagan Alir Penelitian .............................................................. 65
BAB 4. HASIL DAN PEMBAHASAN .................................................. 67
   4.1 Kondisi Umum Daerah Penelitian ........................................... 67
   4.2 Analisis Komponen Faktor USLE di Lokasi Penelitian ............. 72
   4.3 Prediksi Besaran Laju Erosi Perkebunan Kelapa Sawit Rakyat ..... 85
   4.4 Analisis Kelas Tingkat Bahaya Erosi (TBE) ............................... 90
   4.5 Arahan Pengelolaan dan Konservasi Tanah ............................ 95
BAB 5. KESIMPULAN DAN SARAN ................................................ 102
   5.1 Kesimpulan ............................................................................. 102
   5.2 Saran ....................................................................................... 104
DAFTAR PUSTAKA ........................................................................... 106
LAMPIRAN ...................................................................................... 112`,

          bab1: `BAB 1. PENDAHULUAN

1.1 Latar Belakang
Perkebunan kelapa sawit (Elaeis guineensis Jacq.) merupakan salah satu komoditas strategis perkebunan di Indonesia yang memberikan kontribusi signifikan terhadap devisa negara dan perekonomian pedesaan. Namun demikian, sebagian besar perkebunan kelapa sawit di Indonesia dikelola oleh petani rakyat (smallholders) dengan penerapan praktik agronomi yang masih konvensional (Ahadiyat et al., 2015). Pengelolaan lahan yang kurang memperhatikan kaidah konservasi tanah, terutama pada topografi bergelombang hingga berbukit, memicu percepatan degradasi lahan melalui proses erosi air (Wischmeier & Smith, 1978).

Erosi tanah di perkebunan kelapa sawit rakyat sering kali diperparah oleh pembukaan lahan terbuka tanpa tanaman penutup tanah (cover crop) pada fase TBM (Tanaman Belum Menghasilkan), serta pembersihan piringan pohon secara bersih (weed-free circle) yang membuka peluang jatuhnya air hujan langsung ke permukaan tanah dengan energi kinetik tinggi (Arsyad, 2012). Kondisi ini menyebabkan hancurnya agregat tanah (slaking), menurunnya kapasitas infiltrasi, dan meningkatnya aliran permukaan (surface runoff).

Sub-DAS Sekampung Hulu merupakan salah satu wilayah tangkapan air vital yang mengalami konversi lahan intensif menjadi perkebunan kelapa sawit. Berdasarkan data pendahuluan, laju erosi di kawasan ini menunjukkan tren peningkatan yang dapat mengancam kelestarian DAS dan memicu sedimentasi pada waduk di hilir. Oleh karena itu, diperlukan kajian mendalam mengenai pemodelan laju erosi menggunakan pendekatan Universal Soil Loss Equation (USLE) yang diintegrasikan dengan Sistem Informasi Geografis (SIG). Pemodelan spasial ini diharapkan mampu memberikan informasi akurat mengenai sebaran tingkat bahaya erosi serta merumuskan arahan konservasi tanah yang spesifik dan berkelanjutan (Asdak, 2010).

1.2 Rumusan Masalah
Berdasarkan latar belakang tersebut, rumusan masalah dalam penelitian ini adalah:
1. Bagaimanakah karakteristik dan sebaran nilai komponen USLE (erosivitas hujan R, erodibilitas tanah K, panjang dan kemiringan lereng LS, serta pengelolaan tanaman C dan P) pada perkebunan kelapa sawit rakyat di Sub-DAS Sekampung Hulu?
2. Berapakah besar laju erosi aktual yang terjadi pada berbagai kelas lereng di perkebunan kelapa sawit rakyat tersebut?
3. Bagaimana status Tingkat Bahaya Erosi (TBE) dan arahan tindakan konservasi tanah yang paling efektif dan aplikatif bagi petani kelapa sawit rakyat?

1.3 Tujuan Penelitian
Tujuan dari penelitian ini adalah:
1. Menganalisis dan memetakan komponen faktor USLE (R, K, LS, C, P) di lokasi penelitian menggunakan analisis laboratorium dan SIG.
2. Menghitung besaran laju erosi aktual pada perkebunan kelapa sawit rakyat di Sub-DAS Sekampung Hulu.
3. Menentukan kelas Tingkat Bahaya Erosi (TBE) serta merumuskan rekomendasi arahan konservasi tanah secara vegetatif dan sipil teknis.

1.4 Manfaat Penelitian
Penelitian ini diharapkan memberikan manfaat teoritis sebagai pengembangan ilmu konservasi tanah dan air pada ekosistem perkebunan kelapa sawit, serta manfaat praktis bagi petani dan instansi terkait dalam perencanaan tata guna lahan yang berkelanjutan.`,

          bab2: `BAB 2. TINJAUAN PUSTAKA

2.1 Konsep Erosi Tanah dan Faktor Penyebabnya
Erosi adalah peristiwa pindahnya atau terangkutnya tanah atau bagian-bagian tanah dari suatu tempat ke tempat lain oleh media air atau angin (Arsyad, 2012). Di daerah tropis basah seperti Indonesia, air hujan merupakan agen penyebab erosi yang paling dominan. Proses erosi dimulai dengan pelepasan partikel tanah akibat pukulan butir hujan, diikuti oleh pengangkutan partikel tersebut oleh aliran permukaan (overland flow).

2.2 Karakteristik Perkebunan Kelapa Sawit Rakyat
Perkebunan kelapa sawit rakyat memiliki karakteristik yang berbeda dengan perkebunan besar swasta atau negara, antara lain skala kepemilikan lahan yang relatif sempit (2–5 hektar), keterbatasan akses terhadap teknologi pemupukan berimbang, serta minimnya penerapan bangunan konservasi tanah seperti terasering (Fauzi et al., 2016). Praktik penyiangan gulma secara total di piringan pohon menyebabkan tanah terbuka terhadap pukulan air hujan langsung.

2.3 Metode Universal Soil Loss Equation (USLE)
Metode USLE yang dikembangkan oleh Wischmeier dan Smith (1978) merupakan model empiris yang dirancang untuk memperkirakan rata-rata kehilangan tanah jangka panjang dari suatu lahan akibat erosi lembar (sheet erosion) dan erosi alur (rill erosion). Persamaan matematis USLE dituliskan sebagai berikut:

$$A = R \times K \times LS \times C \times P$$

Keterangan:
$A$ = Laju erosi rata-rata tahunan (ton/ha/tahun)
$R$ = Faktor erosivitas hujan
$K$ = Faktor erodibilitas tanah
$LS$ = Faktor panjang dan kemiringan lereng
$C$ = Faktor pengelolaan tanaman
$P$ = Faktor tindakan konservasi tanah

2.3.1 Faktor Erosivitas Hujan ($R$)
Erosivitas hujan ($R$) adalah kemampuan air hujan untuk menyebabkan erosi. Nilai $R$ sangat ditentukan oleh jumlah curah hujan, intensitas hujan maksimum dalam 30 menit ($I_{30}$), serta energi kinetik badai hujan (Utomo, 2012).

2.3.2 Faktor Erodibilitas Tanah ($K$)
Erodibilitas tanah ($K$) menunjukkan ketahanan agregat tanah terhadap pelepasan dan pengangkutan oleh air hujan. Tanah dengan kandungan debu dan pasir halus yang tinggi umumnya memiliki nilai $K$ yang tinggi (rendah ketahanannya terhadap erosi).

2.3.3 Faktor Panjang dan Kemiringan Lereng ($LS$)
Faktor $LS$ merupakan rasio laju erosi pada panjang dan kemiringan lereng tertentu terhadap laju erosi pada lereng standar (panjang 22,1 meter dan kemiringan 9%). Semakin panjang dan curam lereng, semakin besar kecepatan aliran permukaan dan daya angkutnya.

2.3.4 Faktor Pengelolaan Tanaman dan Tindakan Konservasi ($C$ dan $P$)
Faktor $C$ adalah rasio erosi dari lahan dengan pengelolaan tanaman tertentu terhadap erosi dari lahan tanah berona bersih yang diolah terus-menerus. Faktor $P$ adalah rasio erosi dengan tindakan konservasi khusus (seperti konturing atau teras) terhadap erosi tanpa tindakan khusus.

2.4 Tingkat Bahaya Erosi (TBE)
Tingkat Bahaya Erosi (TBE) ditentukan dengan membandingkan laju erosi yang terjadi dengan nilai Tolerable Soil Loss (T) atau kedalaman solum tanah efektif. Klasifikasi TBE dibagi menjadi sangat ringan, ringan, sedang, berat, dan sangat berat (Pusat Penelitian Tanah, 1989).`,

          bab3: `BAB 3. METODOLOGI PENELITIAN

3.1 Waktu dan Tempat Penelitian
Penelitian ini dilaksanakan dari bulan Januari 2025 hingga Agustus 2025. Pengambilan sampel tanah dilakukan di perkebunan kelapa sawit rakyat di Sub-DAS Sekampung Hulu, Kabupaten Lampung Selatan. Analisis laboratorium sifat fisik dan kimia tanah dilaksanakan di Laboratorium Ilmu Tanah Fakultas Pertanian.

3.2 Alat dan Bahan
Alat yang digunakan meliputi bor tanah, ring sampel, GPS (Global Positioning System), double ring infiltrometer, oven laboratorium, timbangan analitik, serta perangkat lunak ArcGIS 10.8 untuk analisis SIG. Bahan yang digunakan meliputi peta rupa bumi Indonesia (RBI), peta tanah tinjauan, data curah hujan bulanan 10 tahun terakhir dari BMKG, serta citra DEM SRTM.

3.3 Jenis dan Sumber Data
Data yang digunakan terdiri atas data primer dan sekunder. Data primer diperoleh langsung dari pengukuran lapangan dan analisis laboratorium (tekstur, permeabilitas, bahan organik). Data sekunder meliputi data curah hujan stasiun klimatologi setempat dan peta tematik wilayah studi.

3.4 Prosedur Pengumpulan Data
Pengambilan sampel tanah dilakukan menggunakan metode purposive sampling berdasarkan satuan lahan yang homogen (kombinasi kemiringan lereng, jenis tanah, dan penggunaan lahan).

3.5 Metode Analisis Parameter USLE
1. Perhitungan $R$: Menggunakan rumus Bols (1978) berdasarkan curah hujan bulanan.
2. Perhitungan $K$: Menggunakan nomograf Wischmeier berdasarkan persentase pasir, debu, liat, bahan organik, struktur, dan permeabilitas tanah.
3. Perhitungan $LS$: Diekstrak dari DEM SRTM menggunakan formula Moore dan Burch (1986) di dalam perangkat lunak ArcGIS.
4. Penentuan $C$ dan $P$: Berdasarkan hasil studi literatur dan observasi penutupan tajuk kelapa sawit di lapang.

3.6 Perhitungan Laju Erosi dan Analisis Tingkat Bahaya Erosi (TBE)
Perhitungan nilai $A$ dilakukan dengan perkalian matriks sel grid (raster calculator) di ArcGIS berdasarkan persamaan USLE. Hasilnya diklasifikasikan ke dalam matriks TBE.`,

          bab4: `BAB 4. HASIL DAN PEMBAHASAN

4.1 Kondisi Umum Daerah Penelitian
Sub-DAS Sekampung Hulu memiliki luas wilayah sekitar 12.500 hektar dengan topografi yang bervariasi dari datar hingga berbukit (kemiringan 0–25%). Jenis tanah yang mendominasi adalah Ultisol dengan karakteristik solum sedang hingga dalam, bereaksi masam, dan memiliki kepekaan terhadap erosi yang cukup tinggi apabila lapisan vegetasi penutupnya terbuka.

4.2 Analisis Komponen Faktor USLE di Lokasi Penelitian

4.2.1 Sebaran Nilai Erosivitas Hujan ($R$)
Berdasarkan analisis data curah hujan 10 tahun terakhir menggunakan persamaan Bols, nilai erosivitas hujan ($R$) di wilayah penelitian berkisar antara 2.100 hingga 2.850 mm (ton.cm)/(ha.jam.tahun). Nilai tertinggi dijumpai pada bagian hulu yang memiliki curah hujan orografis lebih tinggi.

4.2.2 Sebaran Nilai Erodibilitas Tanah ($K$)
Analisis laboratorium terhadap sampel tanah dari 15 titik unit lahan menunjukkan nilai erodibilitas tanah ($K$) berkisar antara 0,22 hingga 0,45. Nilai $K$ tergolong sedang hingga agak tinggi, dipengaruhi oleh kandungan debu dan pasir halus yang cukup dominan pada lapisan topsoil Ultisol.

4.2.3 Sebaran Nilai Faktor Panjang dan Kemiringan Lereng ($LS$)
Ekstraksi DEM SRTM menunjukkan bahwa nilai faktor $LS$ di lokasi penelitian berkisar antara 1,2 hingga 12,4. Nilai $LS$ tertinggi ditemukan pada zona perbukitan bergelombang dengan kelerengan >20% di mana petani sawit rakyat belum membuat teras yang memadai.

4.2.4 Sebaran Nilai Faktor Pengelolaan Tanaman ($C$) dan Konservasi ($P$)
Nilai faktor $C$ untuk perkebunan kelapa sawit rakyat dengan penutupan tajuk (canopy cover) rapat adalah 0,15, sedangkan pada areal TBM atau piringan bersih bernilai 0,40. Faktor tindakan konservasi ($P$) bernilai 0,5 (untuk konturing sederhana) hingga 1,0 (tanpa tindakan konservasi).

4.3 Prediksi Besaran Laju Erosi Perkebunan Kelapa Sawit Rakyat
Hasil overlay spasial seluruh faktor USLE menggunakan ArcGIS menunjukkan bahwa laju erosi rata-rata di perkebunan kelapa sawit rakyat Sub-DAS Sekampung Hulu adalah 76,4 ton/ha/tahun. Sebaran laju erosi bervariasi dari yang ringan (<15 ton/ha/tahun) pada areal datar hingga sangat berat (>180 ton/ha/tahun) pada lereng curam tanpa konservasi.

4.4 Analisis Kelas Tingkat Bahaya Erosi (TBE)
Berdasarkan perbandingan dengan kedalaman solum efektif, kelas TBE di wilayah studi terbagi menjadi:
- Sangat Ringan: 18% dari total area
- Ringan: 32% dari total area
- Sedang: 28% dari total area
- Berat: 16% dari total area
- Sangat Berat: 6% dari total area

4.5 Arahan Pengelolaan dan Konservasi Tanah
Berdasarkan hasil analisis TBE berat dan sangat berat, arahan konservasi yang direkomendasikan meliputi:
1. Konservasi Vegetatif: Penanaman tanaman penutup tanah (Cover Crop) jenis *Mucuna bracteata* pada gawangan mati untuk meredam energi kinetik hujan.
2. Konservasi Sipil Teknis: Pembuatan teras bangku (bench terrace) dan rorak (silt pit) di antara tanaman kelapa sawit pada lereng dengan kemiringan >15% guna menampung limpasan permukaan dan meresapkan air kembali ke dalam tanah.`,

          bab5: `BAB 5. KESIMPULAN DAN SARAN

5.1 Kesimpulan
1. Nilai komponen USLE di perkebunan kelapa sawit rakyat Sub-DAS Sekampung Hulu bervariasi: erosivitas hujan ($R$) rata-rata 2.450, erodibilitas tanah ($K$) 0,32, faktor $LS$ rata-rata 4,85, serta faktor $C$ dan $P$ masing-masing 0,25 dan 0,7.
2. Prediksi rata-rata laju erosi aktual mencapai 76,4 ton/ha/tahun, yang diklasifikasikan ke dalam kategori sedang hingga berat.
3. Status Tingkat Bahaya Erosi (TBE) menunjukkan bahwa sekitar 22% wilayah memerlukan tindakan konservasi segera, dengan arahan prioritas berupa pembuatan teras bangku, rorak, dan penanaman *Mucuna bracteata*.

5.2 Saran
1. Petani kelapa sawit rakyat disarankan untuk tidak membersihkan piringan secara total (weed-free) pada musim hujan ekstrem guna mempertahankan seresah alami sebagai peredam erosi.
2. Pemerintah daerah dan instansi terkait perlu memberikan pendampingan teknis pembuatan rorak dan teras sipil teknis pada lahan perkebunan rakyat berlereng curam.
3. Penelitian lanjutan perlu dilakukan untuk mengukur efektivitas vegetatif *Mucuna bracteata* terhadap penurunan laju sedimen di outlet sub-DAS.`,

          daftarPustaka: `DAFTAR PUSTAKA
Ahadiyat, Y., Subardja, D., & Hidayat, A. (2015). Karakteristik dan Pengelolaan Lahan Kering di Indonesia. Jurnal Tanah dan Iklim, 39(2), 85-94.

Arsyad, S. (2012). Konservasi Tanah dan Air. IPB Press, Bogor.

Asdak, C. (2010). Hydrology and Management of Watersheds. Gadjah Mada University Press, Yogyakarta.

Fauzi, A., Widjaya, S., & Hakim, A. (2016). Analisis Usaha Tani Kelapa Sawit Rakyat di Sumatera. Agro Ekonomi, 34(1), 45-58.

Moore, I.D., & Burch, G.J. (1986). Sediment transport capacity of sheet and rill erosion. Hydrological Processes, 3(1), 33-40.

Pusat Penelitian Tanah. (1989). Petunjuk Teknis Evaluasi Lahan untuk Tanaman Pertanian. Bogor: Puslittanak.

Utomo, W.H. (2012). Erosion and Soil Conservation in Tropical Plantations. Alfabeta, Bandung.

Wischmeier, W.H., & Smith, D.D. (1978). Predicting Rainfall Erosion Losses: A Guide to Conservation Planning. Agriculture Handbook No. 537. USDA, Washington D.C.`,

          lampiran: `LAMPIRAN

Lampiran 1. Peta Lokasi Penelitian Sub-DAS Sekampung Hulu
(Menampilkan titik koordinat sampling tanah dari 15 stasiun pengamatan lapangan).

Lampiran 2. Data Hasil Analisis Laboratorium Sifat Fisik dan Kimia Tanah
- Titik 1: Pasir 42%, Debu 38%, Liat 20% (Sandy Clay Loam), Permeabilitas 4.2 cm/jam, Bahan Organik 1.8%.
- Titik 2: Pasir 35%, Debu 45%, Liat 20% (Silt Loam), Permeabilitas 2.8 cm/jam, Bahan Organik 1.5%.

Lampiran 3. Tabel Perhitungan Faktor R dan K USLE
Lampiran 4. Dokumentasi Lapangan (Pengambilan Sampel Bor Tanah & Pengukuran Infiltrometer)`
        }
      });

      const handleAiGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
          setIsGenerating(false);
          setThesisData(prev => ({
            ...prev,
            sections: {
              ...prev.sections,
              [activeSection]: prev.sections[activeSection as keyof typeof prev.sections] + 
                "\n\n[Tambahan Sintesis AI " + activeAiModel + "]: Berdasarkan pemodelan spasial terbaru, penambahan tindakan konservasi vegetatif dapat mereduksi laju erosi aktual hingga 34.5% dalam kurun waktu dua tahun penanaman cover crop."
            }
          }));
          toast.success("Bagian tesis berhasil diperkaya dan disempurnakan oleh AI!");
        }, 1500);
      };

      const handleSave = () => {
        toast.success("Perubahan dokumen tesis berhasil disimpan ke penyimpanan lokal.");
      };

      return (
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />

          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Top Toolbar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-card border border-border/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600">
                  <FileText className="w-4 h-4" /> Editor Tesis Pascasarjana Agroteknologi
                </div>
                <h1 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                  Penyusunan Tesis Lengkap & Pemodelan USLE
                </h1>
                <p className="text-xs text-muted-foreground">{thesisData.author} | {thesisData.advisor1}</p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button
                  onClick={handleSave}
                  className="px-4 py-2.5 rounded-xl bg-card border border-border hover:bg-muted text-foreground text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Save className="w-4 h-4 text-emerald-600" /> Simpan Progres
                </button>
                <button
                  onClick={() => setExportModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all hover:scale-105"
                >
                  <Download className="w-4 h-4" /> Export Dokumen
                </button>
              </div>
            </div>

            {/* AI Engine Status Bar */}
            <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground flex items-center gap-2">
                    Mesin AI Aktif: <span className="text-emerald-700 dark:text-emerald-400 font-mono">{activeAiModel}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">Siap merevisi, memperluas paragraf, dan menyusun referensi sitasi Harvard.</p>
                </div>
              </div>

              <button
                onClick={handleAiGenerate}
                disabled={isGenerating}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Sparkles className="w-4 h-4" /> {isGenerating ? 'AI Sedang Menulis...' : 'Perkaya Bab dengan AI'}
              </button>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Sidebar Navigation for Sections */}
              <div className="lg:col-span-1 space-y-1 bg-card border border-border rounded-2xl p-4 h-fit sticky top-24">
                <div className="font-mono text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-3 mb-3">
                  Struktur Dokumen Tesis
                </div>

                {[
                  { id: 'ringkasan', label: 'Ringkasan' },
                  { id: 'summary', label: 'Summary' },
                  { id: 'kataPengantar', label: 'Kata Pengantar' },
                  { id: 'biodata', label: 'Biodata Mahasiswa' },
                  { id: 'daftarIsi', label: 'Daftar Isi' },
                  { id: 'bab1', label: 'Bab 1. Pendahuluan' },
                  { id: 'bab2', label: 'Bab 2. Tinjauan Pustaka' },
                  { id: 'bab3', label: 'Bab 3. Metodologi' },
                  { id: 'bab4', label: 'Bab 4. Hasil & Pembahasan' },
                  { id: 'bab5', label: 'Bab 5. Kesimpulan & Saran' },
                  { id: 'daftarPustaka', label: 'Daftar Pustaka' },
                  { id: 'lampiran', label: 'Lampiran' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                      activeSection === item.id
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                ))}
              </div>

              {/* Editor Workspace */}
              <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col">
                <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-emerald-600 font-semibold uppercase tracking-wider">Bagian Aktif</span>
                    <h2 className="font-serif text-xl font-bold text-foreground capitalize">
                      {activeSection.replace(/([A-Z])/g, ' $1')}
                    </h2>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    Estimasi Kata: ~{thesisData.sections[activeSection as keyof typeof thesisData.sections]?.split(/\s+/).length || 0} kata
                  </div>
                </div>

                <div className="flex-1">
                  <textarea
                    value={thesisData.sections[activeSection as keyof typeof thesisData.sections]}
                    onChange={(e) => {
                      const val = e.target.value;
                      setThesisData(prev => ({
                        ...prev,
                        sections: {
                          ...prev.sections,
                          [activeSection]: val
                        }
                      }));
                    }}
                    rows={22}
                    className="w-full bg-muted/30 border border-border rounded-xl p-4 text-sm font-sans leading-relaxed focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-y text-foreground"
                    placeholder="Tulis atau minta AI untuk menyusun bagian ini..."
                  />
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Format sitasi Harvard otomatis aktif
                  </div>
                  <button
                    onClick={() => {
                      toast.info("Perubahan disinkronkan ke editor utama.");
                    }}
                    className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors"
                  >
                    Perbarui Blok
                  </button>
                </div>
              </div>

            </div>

          </main>

          <ExportModal 
            isOpen={exportModalOpen}
            onClose={() => setExportModalOpen(false)}
            thesisTitle={thesisData.title}
          />

          <Footer />
        </div>
      );
    };