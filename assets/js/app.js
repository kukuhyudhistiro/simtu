/* ============================================================
   App Core - Auth, Sidebar, Helpers
   ============================================================ */

const MENU = [
  { sec:'Utama' },
  { id:'dashboard', label:'Dashboard',         icon:'📊', href:'dashboard.html', roles:['admin','kepsek','wakasek','tu','staf_tu','guru'] },
  { id:'kalender',  label:'Kalender Kegiatan', icon:'📅', href:'kalender.html',  roles:['admin','kepsek','wakasek','tu','staf_tu','guru'] },

  { sec:'Manajemen Kegiatan' },
  { id:'kegiatan',  label:'Data Kegiatan',     icon:'🗂️', href:'kegiatan.html',  roles:['admin','kepsek','wakasek','tu','staf_tu','guru'] },

  { sec:'Persuratan' },
  { id:'surat',     label:'Permohonan Surat',  icon:'✉️', href:'surat.html',     roles:['admin','kepsek','wakasek','tu','staf_tu','guru'] },
  { id:'approval',  label:'Approval Surat',    icon:'✅', href:'approval.html',  roles:['admin','kepsek','wakasek','tu'], badge:2 },
  { id:'arsip',     label:'Arsip Surat',       icon:'📦', href:'arsip.html',     roles:['admin','kepsek','tu','staf_tu'] },

  { sec:'Laporan & Pengaturan' },
  { id:'laporan',   label:'Laporan',           icon:'📈', href:'laporan.html',   roles:['admin','kepsek','wakasek','tu','staf_tu'] },
  { id:'master',    label:'Master Data',       icon:'⚙️', href:'master.html',    roles:['admin','tu'] },
  { id:'users',     label:'Kelola User',       icon:'👥', href:'users.html',     roles:['admin'] }
];

/* ---------- AUTH ---------- */
function getCurrentUser(){
  try { return JSON.parse(sessionStorage.getItem('tu_user') || localStorage.getItem('tu_user') || 'null'); }
  catch(e){ return null; }
}
function setCurrentUser(u, remember){
  const s = JSON.stringify(u);
  sessionStorage.setItem('tu_user', s);
  if (remember) localStorage.setItem('tu_user', s);
}
function logout(){
  sessionStorage.removeItem('tu_user');
  localStorage.removeItem('tu_user');
  location.href = 'index.html';
}
function requireAuth(){
  const u = getCurrentUser();
  if (!u) { location.href = 'index.html'; return null; }
  return u;
}

/* ---------- SIDEBAR ---------- */
function renderSidebar(activeId){
  const el = document.getElementById('sidebar');
  if (!el) return;
  const u = getCurrentUser();
  if (!u) return;

  let nav = '';
  MENU.forEach(m => {
    if (m.sec) { nav += `<div class="sb-sec">${m.sec}</div>`; return; }
    if (!m.roles.includes(u.role)) return;
    const active = m.id === activeId ? ' active' : '';
    const badge = m.badge ? `<span class="pill">${m.badge}</span>` : '';
    nav += `<a class="sb-link${active}" href="${m.href}"><i>${m.icon}</i><span>${m.label}</span>${badge}</a>`;
  });

  const initials = u.nama.split(' ').filter(w=>/^[A-Z]/.test(w)).slice(0,2).map(w=>w[0]).join('').toUpperCase();

  el.innerHTML = `
    <div class="sb-brand">
      <div class="logo">🏫</div>
      <div>
        <b>SIMTU</b>
        <span>SMA Negeri 1 Nusantara</span>
      </div>
    </div>
    <nav class="sb-nav">${nav}</nav>
    <div class="sb-user">
      <div class="av">${initials}</div>
      <div class="meta">
        <b>${u.nama}</b>
        <span>${u.roleLabel}</span>
      </div>
      <button onclick="logout()" title="Keluar">⎋</button>
    </div>`;
}

/* ---------- TOPBAR ---------- */
function renderTopbar(title, crumb){
  const el = document.getElementById('topbar');
  if (!el) return;
  const notifDot = NOTIFICATIONS.some(n => !n.read) ? '<span class="dot"></span>' : '';
  el.innerHTML = `
    <div>
      <h1>${title}</h1>
      <div class="crumb">${crumb || 'SIMTU · Sistem Informasi Tata Usaha'}</div>
    </div>
    <div class="spacer"></div>
    <div class="tb-search">
      <span>🔍</span>
      <input placeholder="Cari kegiatan, surat, user..." onkeydown="if(event.key==='Enter')alert('Pencarian: '+this.value)">
    </div>
    <button class="tb-icon" title="Notifikasi" onclick="showNotifModal()">🔔${notifDot}</button>
    <button class="tb-icon" title="Bantuan" onclick="alert('Hubungi admin TU: admin@sekolah.sch.id')">❓</button>`;
}

/* ---------- NOTIF MODAL ---------- */
function showNotifModal(){
  const list = NOTIFICATIONS.map(n => `
    <div class="tl-item" style="padding:14px 0">
      <div style="width:36px;height:36px;border-radius:9px;background:var(--g100);display:grid;place-items:center;font-size:16px">
        ${n.tipe==='surat'?'✉️':n.tipe==='kegiatan'?'📅':n.tipe==='approval'?'✅':'⏰'}
      </div>
      <div style="flex:1">
        <div style="font-weight:600;font-size:13px;${n.read?'':'color:var(--primary)'}">${n.judul}</div>
        <div class="muted text-sm">${n.pesan}</div>
        <div class="muted" style="font-size:11px;margin-top:3px">${n.waktu}</div>
      </div>
    </div>`).join('');

  openModal('Notifikasi', `<div style="margin:-8px 0">${list}</div>`,
    `<button class="btn btn-outline" onclick="closeModal()">Tutup</button>
     <button class="btn btn-primary" onclick="alert('Semua notifikasi ditandai dibaca')">Tandai Semua Dibaca</button>`);
}

/* ---------- MODAL HELPERS ---------- */
function openModal(title, body, footer){
  let ov = document.getElementById('globalOverlay');
  if (!ov){
    ov = document.createElement('div');
    ov.id = 'globalOverlay'; ov.className = 'overlay';
    ov.innerHTML = `<div class="modal" id="globalModal"></div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) closeModal(); });
  }
  document.getElementById('globalModal').innerHTML = `
    <div class="modal-h"><h3>${title}</h3><button onclick="closeModal()">✕</button></div>
    <div class="modal-b">${body}</div>
    ${footer ? `<div class="modal-f">${footer}</div>` : ''}`;
  ov.classList.add('show');
}
function closeModal(){
  const ov = document.getElementById('globalOverlay');
  if (ov) ov.classList.remove('show');
}

/* ---------- HELPERS ---------- */
const BULAN = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const BULAN_S = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
const HARI = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];

function fmtDate(iso, withDay){
  if (!iso) return '-';
  const d = new Date(iso + 'T00:00:00');
  const base = `${d.getDate()} ${BULAN_S[d.getMonth()]} ${d.getFullYear()}`;
  return withDay ? `${HARI[d.getDay()]}, ${base}` : base;
}
function todayISO(){ const d=new Date(); return d.toISOString().slice(0,10); }

function unitName(id){ const u = UNITS.find(x=>x.id===id); return u ? u.nama : id; }
function catName(id){ const c = CATEGORIES.find(x=>x.id===id); return c ? c.nama : ''; }
function catColor(id){ const c = CATEGORIES.find(x=>x.id===id); return c ? c.warna : 'blue'; }
function typeName(id){ const t = LETTER_TYPES.find(x=>x.id===id); return t ? t.nama : ''; }
function initialsOf(name){
  return name.replace(/,.*/,'').split(' ').filter(w=>/^[A-Z]/.test(w)).slice(0,2).map(w=>w[0]).join('').toUpperCase();
}

const STATUS_MAP = {
  diajukan:         { label:'Diajukan',         cls:'badge-info' },
  verifikasi:       { label:'Verifikasi TU',    cls:'badge-warning' },
  menunggu_approval:{ label:'Menunggu Approval',cls:'badge-purple' },
  disetujui:        { label:'Disetujui',        cls:'badge-primary' },
  diproses:         { label:'Diproses',         cls:'badge-info' },
  selesai:          { label:'Selesai',          cls:'badge-success' },
  ditolak:          { label:'Ditolak',          cls:'badge-danger' }
};
function statusBadge(st){
  const s = STATUS_MAP[st] || { label:st, cls:'badge-gray' };
  return `<span class="badge ${s.cls}">${s.label}</span>`;
}
function priorityBadge(p){
  const m = { normal:['badge-gray','Normal'], urgent:['badge-warning','Urgent'], sangat_urgent:['badge-danger','Sangat Urgent'] };
  const [cls,lbl] = m[p] || m.normal;
  return `<span class="badge ${cls}">${lbl}</span>`;
}

/* ---------- CALENDAR ---------- */
function expandEvents(year, month){
  const out = [];
  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);

  EVENTS.forEach(ev => {
    if (!ev.recurring){
      const d = new Date(ev.mulai + 'T00:00:00');
      if (d.getFullYear()===year && d.getMonth()===month) out.push({ ...ev, _date:ev.mulai });
      return;
    }
    if (ev.recurring === 'harian'){
      for (let d=1; d<=monthEnd.getDate(); d++){
        const iso = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        out.push({ ...ev, _date:iso, _rec:true });
      }
    } else if (ev.recurring === 'mingguan'){
      for (let d=1; d<=monthEnd.getDate(); d++){
        const dt = new Date(year, month, d);
        if (dt.getDay() === ev.dayOfWeek){
          const iso = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
          out.push({ ...ev, _date:iso, _rec:true });
        }
      }
    }
  });
  return out;
}

function renderCalendar(containerId, year, month, opts){
  opts = opts || {};
  const el = document.getElementById(containerId);
  if (!el) return;
  const events = expandEvents(year, month);
  const first = new Date(year, month, 1);
  const startDow = first.getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const daysPrev = new Date(year, month, 0).getDate();
  const today = todayISO();

  let cells = '';
  // prev month filler
  for (let i = startDow - 1; i >= 0; i--){
    cells += `<div class="cal-cell out"><div class="cal-date">${daysPrev - i}</div></div>`;
  }
  // current month
  for (let d=1; d<=daysInMonth; d++){
    const iso = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayEvents = events.filter(e => e._date === iso).slice(0,3);
    const more = events.filter(e => e._date === iso).length - dayEvents.length;
    const isToday = iso === today ? ' today' : '';
    cells += `<div class="cal-cell${isToday}">
      <div class="cal-date">${d}</div>
      ${dayEvents.map(e => `<div class="cal-ev ${catColor(e.kategori)}" title="${e.judul} · ${e.waktu} · ${e.lokasi}"
          onclick="showEventDetail('${e.id}','${e._date}')">${e.waktu.split(' ')[0]} ${e.judul}</div>`).join('')}
      ${more>0?`<div class="cal-more">+${more} kegiatan lain</div>`:''}
    </div>`;
  }
  // next month filler
  const totalCells = startDow + daysInMonth;
  const remain = (7 - (totalCells % 7)) % 7;
  for (let i=1; i<=remain; i++){
    cells += `<div class="cal-cell out"><div class="cal-date">${i}</div></div>`;
  }

  el.innerHTML = `
    <div class="cal-grid">
      ${['Min','Sen','Sel','Rab','Kam','Jum','Sab'].map(d=>`<div class="cal-dow">${d}</div>`).join('')}
      ${cells}
    </div>`;
}

function showEventDetail(id, dateISO){
  const ev = EVENTS.find(e => e.id === id);
  if (!ev) return;
  openModal('Detail Kegiatan', `
    <div class="info-list">
      <dt>Judul</dt><dd>${ev.judul}</dd>
      <dt>Kategori</dt><dd><span class="badge badge-${catColor(ev.kategori)}">${catName(ev.kategori)}</span></dd>
      <dt>Unit</dt><dd>${unitName(ev.unit)}</dd>
      <dt>Tanggal</dt><dd>${fmtDate(dateISO || ev.mulai, true)}${ev.selesai!==ev.mulai?' s/d '+fmtDate(ev.selesai,true):''}</dd>
      <dt>Waktu</dt><dd>${ev.waktu}</dd>
      <dt>Lokasi</dt><dd>${ev.lokasi}</dd>
      <dt>Penanggung Jawab</dt><dd>${ev.pic}</dd>
      <dt>Visibilitas</dt><dd>${ev.visibility === 'publik' ? 'Publik Sekolah' : 'Internal'}</dd>
      ${ev.recurring ? `<dt>Berulang</dt><dd>${ev.recurring === 'harian' ? 'Setiap hari' : 'Setiap ' + HARI[ev.dayOfWeek]}</dd>` : ''}
    </div>
    <div class="divider"></div>
    <p class="muted text-sm">${ev.deskripsi || 'Tidak ada deskripsi.'}</p>
  `, `<button class="btn btn-outline" onclick="closeModal()">Tutup</button>
      <a class="btn btn-primary" href="kegiatan-form.html?id=${ev.id}">Edit Kegiatan</a>`);
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'login') return;
  const u = requireAuth();
  if (!u) return;
  renderSidebar(page);
  renderTopbar(document.body.dataset.title || 'Dashboard', document.body.dataset.crumb);
});