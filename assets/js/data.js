/* ============================================================
   DUMMY DATA - Sistem Informasi TU Sekolah
   ============================================================ */

const UNITS = [
  { id:'U-TU',   nama:'Tata Usaha' },
  { id:'U-KUR',  nama:'Kurikulum' },
  { id:'U-KES',  nama:'Kesiswaan' },
  { id:'U-SAR',  nama:'Sarpras' },
  { id:'U-HUM',  nama:'Humas' },
  { id:'U-OSIS', nama:'OSIS / Ekstrakurikuler' }
];

const CATEGORIES = [
  { id:'C1', nama:'Upacara',      warna:'red'    },
  { id:'C2', nama:'Rapat',        warna:'cyan'   },
  { id:'C3', nama:'Ujian',        warna:'orange' },
  { id:'C4', nama:'Lomba',        warna:'purple' },
  { id:'C5', nama:'Studi Tour',   warna:'green'  },
  { id:'C6', nama:'Pelatihan',    warna:'cyan'   },
  { id:'C7', nama:'Sosialisasi',  warna:'blue'   },
  { id:'C8', nama:'Kegiatan Siswa',warna:'purple'}
];

const LETTER_TYPES = [
  { id:'LT1', kode:'UND', nama:'Surat Undangan',         butuhApproval:'wakasek', leadTime:3, template:'template_undangan' },
  { id:'LT2', kode:'ST',  nama:'Surat Tugas',            butuhApproval:'kepsek',  leadTime:3, template:'template_tugas' },
  { id:'LT3', kode:'SK',  nama:'Surat Keterangan',       butuhApproval:'tu',      leadTime:2, template:'template_keterangan' },
  { id:'LT4', kode:'PMH', nama:'Surat Permohonan',       butuhApproval:'wakasek', leadTime:3, template:'template_permohonan' },
  { id:'LT5', kode:'SED', nama:'Surat Edaran',           butuhApproval:'kepsek',  leadTime:4, template:'template_edaran' },
  { id:'LT6', kode:'SK-P',nama:'SK Panitia',            butuhApproval:'kepsek',  leadTime:5, template:'template_sk' }
];

const USERS = [
  { id:'U01', nama:'Dra. Siti Rahayu',           username:'admin',   password:'admin123',  role:'admin',   roleLabel:'Super Admin',      unit:'U-TU',  jabatan:'Administrator Sistem', email:'admin@sekolah.sch.id',   hp:'0812-1111-0001', status:'aktif' },
  { id:'U02', nama:'Drs. Bambang Sutrisno, M.Pd',username:'kepsek',  password:'kepsek123', role:'kepsek',  roleLabel:'Kepala Sekolah',   unit:'U-TU',  jabatan:'Kepala Sekolah',       email:'kepsek@sekolah.sch.id',  hp:'0812-1111-0002', status:'aktif' },
  { id:'U03', nama:'Ahmad Fauzi, S.Pd',          username:'waka',    password:'waka123',   role:'wakasek', roleLabel:'Wakasek',          unit:'U-KUR', jabatan:'Wakasek Kurikulum',    email:'waka@sekolah.sch.id',    hp:'0812-1111-0003', status:'aktif' },
  { id:'U04', nama:'Rina Kartika, S.E',          username:'kabagtu', password:'tu123',     role:'tu',      roleLabel:'Kepala TU',        unit:'U-TU',  jabatan:'Kepala Tata Usaha',    email:'kabagtu@sekolah.sch.id', hp:'0812-1111-0004', status:'aktif' },
  { id:'U05', nama:'Dewi Lestari',               username:'staftu',  password:'staf123',   role:'staf_tu', roleLabel:'Staf TU',          unit:'U-TU',  jabatan:'Staf Administrasi',    email:'staftu@sekolah.sch.id',  hp:'0812-1111-0005', status:'aktif' },
  { id:'U06', nama:'Joko Prasetyo, S.Pd',        username:'guru',    password:'guru123',   role:'guru',    roleLabel:'Guru / Staf',      unit:'U-KUR', jabatan:'Guru Biologi',         email:'joko@sekolah.sch.id',    hp:'0812-1111-0006', status:'aktif' },
  { id:'U07', nama:'Maya Anggraini, S.Pd',       username:'maya',    password:'guru123',   role:'guru',    roleLabel:'Guru / Staf',      unit:'U-KES', jabatan:'Guru BK',              email:'maya@sekolah.sch.id',    hp:'0812-1111-0007', status:'aktif' },
  { id:'U08', nama:'Hendra Wijaya, S.Kom',       username:'hendra',  password:'guru123',   role:'guru',    roleLabel:'Guru / Staf',      unit:'U-SAR', jabatan:'Guru TIK',             email:'hendra@sekolah.sch.id',  hp:'0812-1111-0008', status:'aktif' }
];

/* Kegiatan - Oktober 2026 */
const EVENTS = [
  { id:'EV001', judul:'Upacara Hari Kesaktian Pancasila', kategori:'C1', unit:'U-KES', pic:'Maya Anggraini', mulai:'2026-10-01', selesai:'2026-10-01', waktu:'07:00 - 08:30', lokasi:'Lapangan Sekolah', status:'terjadwal', visibility:'publik', recurring:null, deskripsi:'Upacara peringatan Hari Kesaktian Pancasila seluruh siswa dan guru.' },
  { id:'EV002', judul:'Rapat Koordinasi Wakasek',         kategori:'C2', unit:'U-KUR', pic:'Ahmad Fauzi',    mulai:'2026-10-05', selesai:'2026-10-05', waktu:'13:00 - 15:00', lokasi:'Ruang Rapat',      status:'terjadwal', visibility:'internal', recurring:null, deskripsi:'Koordinasi persiapan UTS dan evaluasi program bulanan.' },
  { id:'EV003', judul:'Ujian Tengah Semester Ganjil',     kategori:'C3', unit:'U-KUR', pic:'Ahmad Fauzi',    mulai:'2026-10-08', selesai:'2026-10-14', waktu:'07:00 - 12:00', lokasi:'Seluruh Kelas',    status:'terjadwal', visibility:'publik', recurring:null, deskripsi:'UTS semester ganjil tahun pelajaran 2026/2027.' },
  { id:'EV004', judul:'Study Tour Kelas XI',              kategori:'C5', unit:'U-KES', pic:'Maya Anggraini', mulai:'2026-10-12', selesai:'2026-10-13', waktu:'06:00 - 18:00', lokasi:'Bandung',          status:'terjadwal', visibility:'publik', recurring:null, deskripsi:'Kunjungan edukasi ke Museum Geologi dan Observatorium Bosscha.' },
  { id:'EV005', judul:'Pelatihan Peningkatan Kompetensi Guru', kategori:'C6', unit:'U-KUR', pic:'Ahmad Fauzi', mulai:'2026-10-17', selesai:'2026-10-17', waktu:'08:00 - 16:00', lokasi:'Aula Sekolah', status:'terjadwal', visibility:'internal', recurring:null, deskripsi:'Pelatihan implementasi kurikulum merdeka.' },
  { id:'EV006', judul:'Rapat Wali Murid Kelas XII',       kategori:'C2', unit:'U-HUM', pic:'Rina Kartika',   mulai:'2026-10-20', selesai:'2026-10-20', waktu:'09:00 - 11:30', lokasi:'Aula Sekolah',     status:'terjadwal', visibility:'publik', recurring:null, deskripsi:'Sosialisasi persiapan SNBP dan kelulusan.' },
  { id:'EV007', judul:'Lomba Kebersihan Antar Kelas',     kategori:'C4', unit:'U-KES', pic:'Maya Anggraini', mulai:'2026-10-22', selesai:'2026-10-22', waktu:'10:00 - 12:00', lokasi:'Seluruh Kelas',    status:'terjadwal', visibility:'publik', recurring:null, deskripsi:'Penilaian kebersihan dan kerapian kelas.' },
  { id:'EV008', judul:'Sosialisasi SNBP 2027',            kategori:'C7', unit:'U-KUR', pic:'Ahmad Fauzi',    mulai:'2026-10-28', selesai:'2026-10-28', waktu:'08:00 - 10:00', lokasi:'Aula Sekolah',     status:'terjadwal', visibility:'publik', recurring:null, deskripsi:'Sosialisasi seleksi nasional berbasis prestasi untuk kelas XII.' },
  { id:'EV009', judul:'Upacara Bendera Senin',            kategori:'C1', unit:'U-KES', pic:'Maya Anggraini', mulai:'2026-10-05', selesai:'2026-10-05', waktu:'07:00 - 07:45', lokasi:'Lapangan Sekolah', status:'terjadwal', visibility:'publik', recurring:'mingguan', dayOfWeek:1, deskripsi:'Upacara bendera rutin setiap hari Senin.' },
  { id:'EV010', judul:'Ekstrakurikuler Pramuka',          kategori:'C8', unit:'U-OSIS',pic:'Hendra Wijaya',  mulai:'2026-10-03', selesai:'2026-10-03', waktu:'14:00 - 16:00', lokasi:'Lapangan',         status:'terjadwal', visibility:'publik', recurring:'mingguan', dayOfWeek:6, deskripsi:'Latihan rutin pramuka setiap Sabtu.' },
  { id:'EV011', judul:'Kegiatan Literasi Pagi',           kategori:'C8', unit:'U-KUR', pic:'Ahmad Fauzi',    mulai:'2026-10-01', selesai:'2026-10-01', waktu:'06:45 - 07:00', lokasi:'Seluruh Kelas',    status:'terjadwal', visibility:'publik', recurring:'harian', deskripsi:'Kegiatan membaca 15 menit sebelum pelajaran.' }
];

const LETTER_REQUESTS = [
  {
    id:'SR-2026-0041', jenis:'LT1', jenisNama:'Surat Undangan',
    pemohon:'Ahmad Fauzi, S.Pd', pemohonId:'U03', unit:'U-KUR',
    keperluan:'Undangan rapat koordinasi wali murid kelas XII',
    tujuan:'Wali Murid Kelas XII',
    tanggalPengajuan:'2026-10-08', tanggalDibutuhkan:'2026-10-18',
    prioritas:'normal', status:'selesai',
    nomorSurat:'041/TU/X/2026', tanggalSurat:'2026-10-10',
    approver:'Drs. Bambang Sutrisno, M.Pd', approvedAt:'2026-10-09 09:15',
    lampiran:'daftar_hadir.xlsx', filePdf:'041-TU-X-2026.pdf', signedBy:'Drs. Bambang Sutrisno, M.Pd',
    riwayat:[
      { waktu:'2026-10-08 08:20', aktor:'Ahmad Fauzi, S.Pd', aksi:'Mengajukan permohonan surat', status:'diajukan' },
      { waktu:'2026-10-08 10:05', aktor:'Rina Kartika, S.E', aksi:'Verifikasi kelengkapan permohonan', status:'diverifikasi' },
      { waktu:'2026-10-09 09:15', aktor:'Drs. Bambang Sutrisno, M.Pd', aksi:'Approval disetujui', status:'disetujui' },
      { waktu:'2026-10-10 13:40', aktor:'Dewi Lestari', aksi:'Surat diproses & diberi nomor', status:'diproses' },
      { waktu:'2026-10-10 15:00', aktor:'Dewi Lestari', aksi:'Surat selesai dan diarsipkan', status:'selesai' }
    ]
  },
  {
    id:'SR-2026-0042', jenis:'LT2', jenisNama:'Surat Tugas',
    pemohon:'Maya Anggraini, S.Pd', pemohonId:'U07', unit:'U-KES',
    keperluan:'Surat tugas pendampingan Study Tour Kelas XI',
    tujuan:'Guru Pendamping',
    tanggalPengajuan:'2026-10-09', tanggalDibutuhkan:'2026-10-11',
    prioritas:'urgent', status:'diproses',
    nomorSurat:'042/TU/X/2026', tanggalSurat:'2026-10-10',
    approver:'Drs. Bambang Sutrisno, M.Pd', approvedAt:'2026-10-09 16:20',
    lampiran:'daftar_peserta.pdf', filePdf:null, signedBy:null,
    riwayat:[
      { waktu:'2026-10-09 13:10', aktor:'Maya Anggraini, S.Pd', aksi:'Mengajukan permohonan surat', status:'diajukan' },
      { waktu:'2026-10-09 14:00', aktor:'Rina Kartika, S.E', aksi:'Verifikasi kelengkapan permohonan', status:'diverifikasi' },
      { waktu:'2026-10-09 16:20', aktor:'Drs. Bambang Sutrisno, M.Pd', aksi:'Approval disetujui', status:'disetujui' },
      { waktu:'2026-10-10 08:30', aktor:'Dewi Lestari', aksi:'Surat sedang diproses', status:'diproses' }
    ]
  },
  {
    id:'SR-2026-0043', jenis:'LT5', jenisNama:'Surat Edaran',
    pemohon:'Rina Kartika, S.E', pemohonId:'U04', unit:'U-TU',
    keperluan:'Edaran libur semester ganjil 2026/2027',
    tujuan:'Seluruh Siswa & Orang Tua',
    tanggalPengajuan:'2026-10-10', tanggalDibutuhkan:'2026-10-25',
    prioritas:'normal', status:'menunggu_approval',
    nomorSurat:null, tanggalSurat:null,
    approver:'Drs. Bambang Sutrisno, M.Pd', approvedAt:null,
    lampiran:null, filePdf:null, signedBy:null,
    riwayat:[
      { waktu:'2026-10-10 09:00', aktor:'Rina Kartika, S.E', aksi:'Mengajukan permohonan surat', status:'diajukan' },
      { waktu:'2026-10-10 10:30', aktor:'Dewi Lestari', aksi:'Verifikasi kelengkapan permohonan', status:'diverifikasi' },
      { waktu:'2026-10-10 10:35', aktor:'Sistem', aksi:'Menunggu approval Kepala Sekolah', status:'menunggu_approval' }
    ]
  },
  {
    id:'SR-2026-0044', jenis:'LT3', jenisNama:'Surat Keterangan',
    pemohon:'Joko Prasetyo, S.Pd', pemohonId:'U06', unit:'U-KUR',
    keperluan:'Surat keterangan aktif mengajar untuk keperluan beasiswa',
    tujuan:'Pribadi',
    tanggalPengajuan:'2026-10-11', tanggalDibutuhkan:'2026-10-13',
    prioritas:'normal', status:'verifikasi',
    nomorSurat:null, tanggalSurat:null,
    approver:'Rina Kartika, S.E', approvedAt:null,
    lampiran:'ktp.pdf', filePdf:null, signedBy:null,
    riwayat:[
      { waktu:'2026-10-11 07:45', aktor:'Joko Prasetyo, S.Pd', aksi:'Mengajukan permohonan surat', status:'diajukan' },
      { waktu:'2026-10-11 08:10', aktor:'Sistem', aksi:'Menunggu verifikasi TU', status:'verifikasi' }
    ]
  },
  {
    id:'SR-2026-0045', jenis:'LT4', jenisNama:'Surat Permohonan',
    pemohon:'Hendra Wijaya, S.Kom', pemohonId:'U08', unit:'U-SAR',
    keperluan:'Permohonan peminjaman ruang aula untuk kegiatan ekstrakurikuler',
    tujuan:'Kepala Sekolah',
    tanggalPengajuan:'2026-10-12', tanggalDibutuhkan:'2026-10-13',
    prioritas:'sangat_urgent', status:'menunggu_approval',
    nomorSurat:null, tanggalSurat:null,
    approver:'Ahmad Fauzi, S.Pd', approvedAt:null,
    lampiran:null, filePdf:null, signedBy:null,
    riwayat:[
      { waktu:'2026-10-12 15:30', aktor:'Hendra Wijaya, S.Kom', aksi:'Mengajukan permohonan (mendadak)', status:'diajukan' },
      { waktu:'2026-10-12 15:45', aktor:'Sistem', aksi:'⚠ Permohonan kurang dari lead time - butuh approval khusus', status:'verifikasi' },
      { waktu:'2026-10-12 16:00', aktor:'Rina Kartika, S.E', aksi:'Diteruskan ke Wakasek untuk approval khusus', status:'menunggu_approval' }
    ]
  },
  {
    id:'SR-2026-0046', jenis:'LT6', jenisNama:'SK Panitia',
    pemohon:'Maya Anggraini, S.Pd', pemohonId:'U07', unit:'U-KES',
    keperluan:'SK Panitia Lomba Kebersihan Antar Kelas',
    tujuan:'Panitia Kegiatan',
    tanggalPengajuan:'2026-10-13', tanggalDibutuhkan:'2026-10-20',
    prioritas:'normal', status:'ditolak',
    nomorSurat:null, tanggalSurat:null,
    approver:'Drs. Bambang Sutrisno, M.Pd', approvedAt:null,
    lampiran:'susunan_panitia.docx', filePdf:null, signedBy:null,
    riwayat:[
      { waktu:'2026-10-13 08:00', aktor:'Maya Anggraini, S.Pd', aksi:'Mengajukan permohonan surat', status:'diajukan' },
      { waktu:'2026-10-13 09:15', aktor:'Rina Kartika, S.E', aksi:'Verifikasi kelengkapan permohonan', status:'verifikasi' },
      { waktu:'2026-10-13 11:00', aktor:'Drs. Bambang Sutrisno, M.Pd', aksi:'Ditolak - susunan panitia belum lengkap', status:'ditolak' }
    ]
  }
];

const NOTIFICATIONS = [
  { id:'N1', tipe:'surat',    judul:'Permohonan surat mendadak',      pesan:'SR-2026-0045 diajukan kurang dari lead time (1 hari)', waktu:'5 menit lalu',  read:false },
  { id:'N2', tipe:'kegiatan', judul:'Kegiatan baru ditambahkan',     pesan:'Study Tour Kelas XI pada 12-13 Oktober 2026',          waktu:'1 jam lalu',    read:false },
  { id:'N3', tipe:'approval', judul:'Menunggu approval Anda',        pesan:'SR-2026-0043 Surat Edaran Libur Semester',             waktu:'2 jam lalu',    read:false },
  { id:'N4', tipe:'surat',    judul:'Surat selesai diproses',        pesan:'SR-2026-0041 telah selesai dan diarsipkan',            waktu:'1 hari lalu',   read:true  },
  { id:'N5', tipe:'reminder', judul:'Reminder H-3',                  pesan:'Ujian Tengah Semester dimulai 8 Oktober 2026',         waktu:'2 hari lalu',   read:true  }
];