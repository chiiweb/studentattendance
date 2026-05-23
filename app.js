/* ─── Theme System with Gradient Support ──────────────────────────── */
const THEMES = {
  teal: { name: 'Teal', primary: '#0d9488', gradient: 'linear-gradient(135deg, #0d9488, #14b8a6)' },
  indigo: { name: 'Indigo', primary: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #818cf8)' },
  rose: { name: 'Rose', primary: '#e11d48', gradient: 'linear-gradient(135deg, #e11d48, #fb7185)' },
  amber: { name: 'Amber', primary: '#d97706', gradient: 'linear-gradient(135deg, #d97706, #fbbf24)' },
  emerald: { name: 'Emerald', primary: '#059669', gradient: 'linear-gradient(135deg, #059669, #34d399)' },
  violet: { name: 'Violet', primary: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)' },
  sunset: { name: 'Sunset', primary: '#f43f5e', gradient: 'linear-gradient(135deg, #f43f5e, #f97316, #fbbf24)' },
  ocean: { name: 'Ocean', primary: '#0284c7', gradient: 'linear-gradient(135deg, #0284c7, #0ea5e9, #38bdf8)' },
  forest: { name: 'Forest', primary: '#16a34a', gradient: 'linear-gradient(135deg, #16a34a, #4ade80, #86efac)' },
  midnight: { name: 'Midnight', primary: '#4338ca', gradient: 'linear-gradient(135deg, #1e1b4b, #4338ca, #6366f1)' },
};

const SIDEBAR_PRESETS = [
  { name: 'Deep Teal', gradient: 'linear-gradient(135deg, #0b1f1d, #0d9488, #0b1f1d)' },
  { name: 'Midnight', gradient: 'linear-gradient(135deg, #0a0a0f, #1e1b4b, #0a0a0f)' },
  { name: 'Sunset Glow', gradient: 'linear-gradient(135deg, #1a0a10, #e11d48, #1a0a10)' },
  { name: 'Forest Dark', gradient: 'linear-gradient(135deg, #021f16, #059669, #021f16)' },
  { name: 'Ocean Deep', gradient: 'linear-gradient(135deg, #071428, #0284c7, #071428)' },
  { name: 'Royal Purple', gradient: 'linear-gradient(135deg, #130a2a, #7c3aed, #130a2a)' },
  { name: 'Warm Amber', gradient: 'linear-gradient(135deg, #1c1100, #d97706, #1c1100)' },
  { name: 'Rose Garden', gradient: 'linear-gradient(135deg, #1a0a10, #be123c, #1a0a10)' },
];

/* ─── Student Avatars ─────────────────────────────────────────────── */
const STUDENT_AVATARS = [
  { id: 'avatar1', emoji: '😀', color: '#0d9488', name: 'Happy' },
  { id: 'avatar2', emoji: '🌟', color: '#f59e0b', name: 'Star' },
  { id: 'avatar3', emoji: '🦊', color: '#f97316', name: 'Fox' },
  { id: 'avatar4', emoji: '🐱', color: '#8b5cf6', name: 'Cat' },
  { id: 'avatar5', emoji: '🐶', color: '#ec4899', name: 'Dog' },
  { id: 'avatar6', emoji: '🦁', color: '#fbbf24', name: 'Lion' },
  { id: 'avatar7', emoji: '🐧', color: '#3b82f6', name: 'Penguin' },
  { id: 'avatar8', emoji: '🐨', color: '#6b7280', name: 'Koala' },
  { id: 'avatar9', emoji: '🐼', color: '#1f2937', name: 'Panda' },
  { id: 'avatar10', emoji: '🦄', color: '#c084fc', name: 'Unicorn' },
  { id: 'avatar11', emoji: '🐸', color: '#10b981', name: 'Frog' },
  { id: 'avatar12', emoji: '🐙', color: '#ef4444', name: 'Octopus' },
];

/* ─── Achievement Badges ─────────────────────────────────────────── */
const ACHIEVEMENTS = [
  { id: 'perfect_week', name: 'Perfect Week', icon: '🌟', description: 'Perfect attendance for a full week' },
  { id: 'early_bird', name: 'Early Bird', icon: '🐦', description: 'Never late for a month' },
  { id: 'class_star', name: 'Class Star', icon: '⭐', description: '90%+ attendance rate' },
  { id: 'perfect_month', name: 'Perfect Month', icon: '🏆', description: 'Perfect attendance for a whole month' },
  { id: 'never_miss', name: 'Never Miss', icon: '💪', description: 'Never absent for 2 months' },
  { id: 'rocket', name: 'Rocket', icon: '🚀', description: 'Improved attendance by 20%' },
  { id: 'diamond', name: 'Diamond', icon: '💎', description: '100% attendance for a month' },
];

/* ─── Banner Presets with Custom Icons ────────────────────────────── */
const BANNER_PRESETS = [
  { id: 'none', name: 'No Banner', icon: '🚫', gradient: 'transparent' },
  { id: 'apples', name: 'Apple & Books', icon: '🍎📚', gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)' },
  { id: 'classroom', name: 'Classroom', icon: '🏫', gradient: 'linear-gradient(135deg, #6366f1, #4f46e5, #3730a3)' },
  { id: 'sports', name: 'Sports', icon: '⚽🏀', gradient: 'linear-gradient(135deg, #4ade80, #16a34a, #14532d)' },
  { id: 'rainbow', name: 'Rainbow', icon: '🌈', gradient: 'linear-gradient(135deg, #ef4444, #f97316, #fbbf24, #4ade80, #3b82f6, #8b5cf6)' },
  { id: 'space', name: 'Space', icon: '🚀🌙', gradient: 'linear-gradient(135deg, #1e1b4b, #3730a3, #4c1d95)' },
  { id: 'ocean', name: 'Ocean', icon: '🌊🐠', gradient: 'linear-gradient(135deg, #38bdf8, #0284c7, #075985)' },
  { id: 'sunset', name: 'Sunset', icon: '🌅', gradient: 'linear-gradient(135deg, #fbbf24, #f97316, #ec4899)' },
  { id: 'forest', name: 'Forest', icon: '🌲🍃', gradient: 'linear-gradient(135deg, #86efac, #22c55e, #166534)' },
  { id: 'flowers', name: 'Garden', icon: '🌸🌼', gradient: 'linear-gradient(135deg, #fda4af, #f472b6, #ec4899)' },
  { id: 'music', name: 'Music', icon: '🎵🎶', gradient: 'linear-gradient(135deg, #c084fc, #9333ea, #6b21a8)' },
  { id: 'stars', name: 'Starry Night', icon: '⭐🌙', gradient: 'linear-gradient(135deg, #0f172a, #1e3a5f, #0f2d4a)' },
  { id: 'confetti', name: 'Celebration', icon: '🎉✨', gradient: 'linear-gradient(135deg, #f43f5e, #f97316, #fbbf24, #4ade80, #3b82f6)' },
];

/* ─── Helper Functions ───────────────────────────────────────────── */
function applyTheme(id) {
  const t = THEMES[id] || THEMES.teal;
  document.documentElement.style.setProperty('--teal', t.primary);
  document.documentElement.style.setProperty('--teal-gradient', t.gradient);
  localStorage.setItem('classroom_theme', id);
}

function initTheme() { 
  const saved = localStorage.getItem('classroom_theme');
  applyTheme(saved || 'teal');
}

function applySidebarGradient(gradient) {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.style.background = gradient;
    sidebar.style.backgroundImage = gradient;
  }
  localStorage.setItem('sidebar_gradient', gradient);
}

function getSidebarGradient() {
  return localStorage.getItem('sidebar_gradient') || SIDEBAR_PRESETS[0].gradient;
}

function toast(msg, type = '') {
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.textContent = msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function esc(s) { 
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function todayStr() { 
  return new Date().toISOString().slice(0, 10);
}

function formatDate(str) {
  if (!str) return '';
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function iconSVG(name) {
  const icons = {
    'check': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
    'check-sm': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
    'x': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    'clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    'chevron-left': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>',
    'chevron-right': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>',
    'plus': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    'pencil': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
    'trash': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>',
    'users': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    'bar-chart': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    'logout': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
    'image': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    'bold': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4h8a4 4 0 018 0 4 4 0 01-4 4 4 4 0 014 4 4 4 0 01-4 4H6z"/><line x1="6" y1="12" x2="14" y2="12"/></svg>',
    'italic': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>',
    'underline': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3"/><line x1="4" y1="21" x2="20" y2="21"/></svg>',
  };
  return icons[name] || '';
}

/* ─── Rich Text Editor Functions ─────────────────────────────────── */
let currentTextSelection = null;

function applyFormatting(command, value = null) {
  document.execCommand(command, false, value);
  document.getElementById('message-input')?.focus();
}

function showColorPicker() {
  const color = prompt('Enter a color (hex, rgb, or name):', '#000000');
  if (color) {
    applyFormatting('foreColor', color);
  }
}

function showFontSize() {
  const size = prompt('Enter font size (1-7):', '3');
  if (size && size >= 1 && size <= 7) {
    applyFormatting('fontSize', size);
  }
}

function insertEmoji(emoji) {
  const input = document.getElementById('message-input');
  if (input) {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const text = input.value;
    input.value = text.substring(0, start) + emoji + text.substring(end);
    input.selectionStart = input.selectionEnd = start + emoji.length;
    input.focus();
  }
}

/* ─── Profile Picture Management ─────────────────────────────────── */
function getStudentProfilePic(studentId) {
  const pic = localStorage.getItem(`profile_pic_${studentId}`);
  if (pic && pic.startsWith('data:image')) return pic;
  const avatar = localStorage.getItem(`avatar_${studentId}`);
  if (avatar) {
    const avatarData = STUDENT_AVATARS.find(a => a.id === avatar);
    if (avatarData) return avatarData.emoji;
  }
  return '😀';
}

function setStudentProfilePic(studentId, data) {
  if (data.startsWith('data:image')) {
    localStorage.setItem(`profile_pic_${studentId}`, data);
    localStorage.removeItem(`avatar_${studentId}`);
  } else {
    localStorage.setItem(`avatar_${studentId}`, data);
    localStorage.removeItem(`profile_pic_${studentId}`);
  }
}

function getStudentAvatarDisplay(student) {
  const pic = localStorage.getItem(`profile_pic_${student.id}`);
  if (pic && pic.startsWith('data:image')) {
    return `<img src="${pic}" alt="${esc(student.name)}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
  }
  const avatarId = localStorage.getItem(`avatar_${student.id}`);
  if (avatarId) {
    const avatar = STUDENT_AVATARS.find(a => a.id === avatarId);
    if (avatar) return `<span style="font-size: 24px;">${avatar.emoji}</span>`;
  }
  return `<span style="font-size: 24px;">${student.name?.charAt(0).toUpperCase() || '?'}</span>`;
}

/* ─── Banner System ──────────────────────────────────────────────── */
function getBanner(uid) {
  try {
    return JSON.parse(localStorage.getItem(`banner_${uid}`)) || null;
  } catch { return null; }
}

function setBanner(uid, data) {
  if (!data || data.id === 'none') {
    localStorage.removeItem(`banner_${uid}`);
  } else {
    localStorage.setItem(`banner_${uid}`, JSON.stringify(data));
  }
}

function getBannerHeight(uid) {
  return parseInt(localStorage.getItem(`banner_h_${uid}`) || '150');
}

function setBannerHeight(uid, h) {
  localStorage.setItem(`banner_h_${uid}`, h);
}

function bannerHTML(uid) {
  const b = getBanner(uid);
  if (!b || b.id === 'none') return '';
  const h = getBannerHeight(uid);
  const style = `background: ${b.gradient}; height: ${h}px;`;
  return `<div class="dash-banner" style="${style}">
    <div class="banner-icon" style="font-size: 48px;">${b.icon}</div>
  </div>`;
}

/* ─── Achievement System ────────────────────────────────────────── */
function calculateAchievements(attendanceRecords) {
  const earned = [];
  const present = attendanceRecords.filter(r => r.status === 'present').length;
  const total = attendanceRecords.length;
  const rate = total > 0 ? (present / total) * 100 : 0;
  
  let currentStreak = 0;
  let maxStreak = 0;
  const sortedDates = [...attendanceRecords]
    .filter(r => r.status === 'present')
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  
  for (let i = 0; i < sortedDates.length; i++) {
    if (i === 0) {
      currentStreak = 1;
    } else {
      const prevDate = new Date(sortedDates[i - 1].date);
      const currDate = new Date(sortedDates[i].date);
      const diffDays = (currDate - prevDate) / (1000 * 60 * 60 * 24);
      if (diffDays === 1) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }
    }
    maxStreak = Math.max(maxStreak, currentStreak);
  }
  
  if (maxStreak >= 5) earned.push(ACHIEVEMENTS[0]);
  if (attendanceRecords.filter(r => r.status === 'late').length === 0 && total >= 20) earned.push(ACHIEVEMENTS[1]);
  if (rate >= 90) earned.push(ACHIEVEMENTS[2]);
  if (maxStreak >= 20) earned.push(ACHIEVEMENTS[3]);
  if (maxStreak >= 40) earned.push(ACHIEVEMENTS[4]);
  if (rate >= 100 && total >= 20) earned.push(ACHIEVEMENTS[5]);
  
  return { earned, rate, maxStreak, present, total };
}

/* ─── App State ─────────────────────────────────────────────────── */
let currentUser = null;
let currentPage = 'attendance';
let currentDate = todayStr();
let currentClassId = null;
let students = [];
let attendance = [];
let attendanceMap = {};
let editingStudentId = null;
let chatUnsubscribe = null;

/* ─── LocalStorage DB ───────────────────────────────────────────── */
class LocalStorageDB {
  constructor() {
    this.initData();
  }
  
  initData() {
    if (!localStorage.getItem('students')) {
      localStorage.setItem('students', JSON.stringify([]));
    }
    if (!localStorage.getItem('attendance')) {
      localStorage.setItem('attendance', JSON.stringify([]));
    }
    if (!localStorage.getItem('classes')) {
      localStorage.setItem('classes', JSON.stringify([
        { id: 1, name: 'My Class', schoolName: 'My School', grade: '3rd Grade' }
      ]));
    }
  }
  
  async getStudents(classId = null) {
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    if (classId) {
      return students.filter(s => s.classId === classId);
    }
    return students;
  }
  
  async addStudent(student) {
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    const newStudent = { ...student, id: Date.now() };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    return newStudent;
  }
  
  async updateStudent(id, data) {
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
      students[index] = { ...students[index], ...data };
      localStorage.setItem('students', JSON.stringify(students));
      return students[index];
    }
    return null;
  }
  
  async deleteStudent(id) {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    students = students.filter(s => s.id !== id);
    localStorage.setItem('students', JSON.stringify(students));
    
    let attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
    attendance = attendance.filter(a => a.studentId !== id);
    localStorage.setItem('attendance', JSON.stringify(attendance));
  }
  
  async getAttendance(date = null, studentId = null) {
    let attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
    if (date) attendance = attendance.filter(a => a.date === date);
    if (studentId) attendance = attendance.filter(a => a.studentId === studentId);
    return attendance;
  }
  
  async saveAttendance(record) {
    const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
    const existingIndex = attendance.findIndex(a => a.studentId === record.studentId && a.date === record.date);
    if (existingIndex !== -1) {
      attendance[existingIndex] = { ...attendance[existingIndex], ...record };
    } else {
      attendance.push({ ...record, id: Date.now() });
    }
    localStorage.setItem('attendance', JSON.stringify(attendance));
    return record;
  }
  
  async getClasses() {
    return JSON.parse(localStorage.getItem('classes') || '[]');
  }
  
  async addClass(cls) {
    const classes = JSON.parse(localStorage.getItem('classes') || '[]');
    const newClass = { ...cls, id: Date.now() };
    classes.push(newClass);
    localStorage.setItem('classes', JSON.stringify(classes));
    return newClass;
  }
  
  async updateClass(id, data) {
    const classes = JSON.parse(localStorage.getItem('classes') || '[]');
    const index = classes.findIndex(c => c.id === id);
    if (index !== -1) {
      classes[index] = { ...classes[index], ...data };
      localStorage.setItem('classes', JSON.stringify(classes));
      return classes[index];
    }
    return null;
  }
  
  async deleteClass(id) {
    let classes = JSON.parse(localStorage.getItem('classes') || '[]');
    classes = classes.filter(c => c.id !== id);
    localStorage.setItem('classes', JSON.stringify(classes));
  }
  
  async getAttendanceSummary() {
    const students = await this.getStudents();
    const attendance = await this.getAttendance();
    const summary = students.map(student => {
      const studentRecords = attendance.filter(a => a.studentId === student.id);
      const present = studentRecords.filter(r => r.status === 'present').length;
      const absent = studentRecords.filter(r => r.status === 'absent').length;
      const late = studentRecords.filter(r => r.status === 'late').length;
      return {
        studentId: student.id,
        studentName: student.name,
        present,
        absent,
        late,
        total: studentRecords.length
      };
    });
    return summary;
  }
}

const db = new LocalStorageDB();

/* ─── API Wrapper ───────────────────────────────────────────────── */
const GET = async (path) => {
  if (path === '/auth/me') {
    const user = localStorage.getItem('current_user');
    if (!user) throw new Error('Not logged in');
    return JSON.parse(user);
  }
  if (path === '/students') return await db.getStudents(currentClassId);
  if (path === '/attendance') return await db.getAttendance(currentDate);
  if (path === '/attendance/summary') return await db.getAttendanceSummary();
  if (path === '/classes') return await db.getClasses();
  return [];
};

const POST = async (path, data) => {
  if (path === '/auth/logout') {
    localStorage.removeItem('current_user');
    return {};
  }
  if (path === '/students') return await db.addStudent(data);
  if (path === '/attendance') return await db.saveAttendance(data);
  if (path === '/classes') return await db.addClass(data);
  return {};
};

const PATCH = async (path, data) => {
  if (path.startsWith('/attendance/')) {
    const id = parseInt(path.split('/')[2]);
    return await db.saveAttendance({ id, ...data });
  }
  if (path.startsWith('/students/')) {
    const id = parseInt(path.split('/')[2]);
    return await db.updateStudent(id, data);
  }
  if (path.startsWith('/classes/')) {
    const id = parseInt(path.split('/')[2]);
    return await db.updateClass(id, data);
  }
  return {};
};

const DEL = async (path) => {
  if (path.startsWith('/students/')) {
    const id = parseInt(path.split('/')[2]);
    await db.deleteStudent(id);
  }
  if (path.startsWith('/classes/')) {
    const id = parseInt(path.split('/')[2]);
    await db.deleteClass(id);
  }
};

/* ─── Settings Functions ────────────────────────────────────────── */
const SETTINGS_KEY = 'classroom_settings';
function loadSettings() { 
  try { 
    return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}; 
  } catch { 
    return {}; 
  } 
}
function saveSettings(d) { 
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(d)); 
}
function applyBrand(s) {
  const t = document.getElementById('brand-title-el');
  const b = document.getElementById('brand-sub-el');
  if (t) t.textContent = s.className || 'My Class';
  if (b) b.textContent = s.schoolName || 'Attendance Tracker';
}

/* ─── Auth Functions ────────────────────────────────────────────── */
async function showLoginScreen() {
  document.getElementById('app-layout').style.display = 'none';
  const login = document.getElementById('login-screen');
  login.style.display = 'flex';
  login.innerHTML = `
    <div class="login-left">
      <div class="login-brand">
        <div class="login-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/>
          </svg>
        </div>
        <div class="login-brand-name">Classroom</div>
        <div class="login-brand-sub">Attendance Tracker</div>
      </div>
      <div class="login-tagline">Track attendance, manage your class — all in one place.</div>
    </div>
    <div class="login-right">
      <div class="login-card">
        <div class="login-card-title">Sign in to your account</div>
        <div class="login-card-sub">Demo accounts: teacher / password123 | student / password123</div>
        <div class="role-tabs">
          <button class="role-tab active" data-role="teacher">Teacher</button>
          <button class="role-tab" data-role="student">Student</button>
        </div>
        <div id="login-form-area"></div>
      </div>
    </div>
  `;
  
  renderRoleForm('teacher');
  
  login.querySelectorAll('.role-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      login.querySelectorAll('.role-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRoleForm(btn.dataset.role);
    });
  });
}

function renderRoleForm(role) {
  const area = document.getElementById('login-form-area');
  area.innerHTML = `
    <form id="login-form" class="auth-form">
      <div class="form-group"><label class="form-label">Username</label><input class="form-input" id="auth-username" type="text" placeholder="${role === 'teacher' ? 'teacher' : 'student'}" value="${role === 'teacher' ? 'teacher' : 'student'}" autocomplete="username"/></div>
      <div class="form-group"><label class="form-label">Password</label><input class="form-input" id="auth-password" type="password" placeholder="password123" value="password123" autocomplete="current-password"/></div>
      <div id="auth-error" class="auth-error" style="display:none"></div>
      <button type="submit" class="btn btn-primary auth-submit">Sign In as ${role === 'teacher' ? 'Teacher' : 'Student'}</button>
      ${role === 'teacher' ? `<div class="auth-divider"><span>New teacher?</span></div>
      <button type="button" class="btn btn-ghost auth-submit" id="show-register-btn">Create Teacher Account</button>` : ''}
    </form>`;
  
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    await handleLogin(role);
  });
  
  document.getElementById('show-register-btn')?.addEventListener('click', renderRegisterForm);
}

function renderRegisterForm() {
  const area = document.getElementById('login-form-area');
  area.innerHTML = `
    <form id="register-form" class="auth-form">
      <div class="register-note"><strong>First-time setup</strong> — Create your teacher account.</div>
      <div class="form-group"><label class="form-label">School Name <span class="required">*</span></label><input class="form-input" id="reg-school" type="text" placeholder="e.g. Lincoln Elementary" required/></div>
      <div class="register-row">
        <div class="form-group"><label class="form-label">Class Name <span class="required">*</span></label><input class="form-input" id="reg-class" type="text" placeholder="e.g. Mrs. Smith's Class" required/></div>
        <div class="form-group"><label class="form-label">Grade</label><input class="form-input" id="reg-grade" type="text" placeholder="e.g. 3rd Grade"/></div>
      </div>
      <div class="form-group"><label class="form-label">Username <span class="required">*</span></label><input class="form-input" id="reg-username" type="text" required autocomplete="username"/></div>
      <div class="form-group"><label class="form-label">Password <span class="required">*</span></label><input class="form-input" id="reg-password" type="password" placeholder="At least 4 characters" required autocomplete="new-password"/></div>
      <div id="auth-error" class="auth-error" style="display:none"></div>
      <button type="submit" class="btn btn-primary auth-submit">Create Account &amp; Get Started</button>
      <button type="button" class="btn btn-ghost auth-submit" id="back-to-login">Back to Sign In</button>
    </form>`;
  
  document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const school = document.getElementById('reg-school').value;
    const className = document.getElementById('reg-class').value;
    const grade = document.getElementById('reg-grade').value;
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const errEl = document.getElementById('auth-error');
    
    if (!username || !password || !school || !className) {
      errEl.textContent = 'Please fill in all required fields';
      errEl.style.display = 'block';
      return;
    }
    
    try {
      localStorage.setItem('current_user', JSON.stringify({ 
        id: 'teacher_' + Date.now(),
        username: username, 
        role: 'teacher' 
      }));
      saveSettings({ schoolName: school, className: className, grade: grade });
      currentUser = JSON.parse(localStorage.getItem('current_user'));
      document.getElementById('login-screen').style.display = 'none';
      launchApp();
      toast('Account created successfully!', 'success');
    } catch (err) {
      errEl.textContent = err.message;
      errEl.style.display = 'block';
    }
  });
  
  document.getElementById('back-to-login').addEventListener('click', () => showLoginScreen());
}

async function handleLogin(role) {
  const username = document.getElementById('auth-username').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-error');
  
  if (!username || !password) {
    errEl.textContent = 'Please enter username and password';
    errEl.style.display = 'block';
    return;
  }
  
  // Demo login - accept any password for demo purposes
  currentUser = {
    id: role === 'teacher' ? 'teacher_123' : 'student_456',
    username: username,
    role: role
  };
  
  localStorage.setItem('current_user', JSON.stringify(currentUser));
  document.getElementById('login-screen').style.display = 'none';
  launchApp();
  toast(`Welcome back, ${username}!`, 'success');
}

/* ─── Launch App ────────────────────────────────────────────────── */
async function launchApp() {
  const isStudent = currentUser?.role === 'student';
  
  if (isStudent) {
    showStudentDashboard();
    return;
  }
  
  const settings = loadSettings();
  applyBrand(settings);
  applySidebarGradient(getSidebarGradient());
  document.getElementById('app-layout').style.display = 'flex';
  
  await loadAndApplyClasses();
  
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.dataset.page) {
      btn.addEventListener('click', () => navigate(btn.dataset.page));
    }
  });
  
  document.getElementById('logout-btn').addEventListener('click', async () => {
    localStorage.removeItem('current_user');
    currentUser = null;
    location.reload();
  });
  
  // Modal handlers
  const modalClose = document.getElementById('modal-close-btn');
  const modalCancel = document.getElementById('modal-cancel-btn');
  if (modalClose) modalClose.addEventListener('click', closeAddModal);
  if (modalCancel) modalCancel.addEventListener('click', closeAddModal);
  
  const addStudentForm = document.getElementById('add-student-form');
  if (addStudentForm) {
    addStudentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('student-name').value.trim();
      const grade = document.getElementById('student-grade').value.trim();
      const notes = document.getElementById('student-notes').value.trim();
      if (!name) return;
      try {
        await POST('/students', { name, grade, notes, classId: currentClassId });
        toast('Student added!', 'success');
        closeAddModal();
        await render();
      } catch {
        toast('Failed to add student', 'error');
      }
    });
  }
  
  navigate('attendance');
}

async function loadAndApplyClasses() {
  try {
    const classes = await GET('/classes');
    if (classes.length === 0) {
      const classSwitcher = document.getElementById('class-switcher');
      if (classSwitcher) classSwitcher.style.display = 'none';
      return;
    }
    const stored = parseInt(localStorage.getItem('current_class_id'));
    const found = classes.find(c => c.id === stored) || classes[0];
    currentClassId = found.id;
    localStorage.setItem('current_class_id', currentClassId);
    applyBrand({ className: found.name, schoolName: found.schoolName || '', grade: found.grade });
    updateClassSwitcher(found, classes);
  } catch {
    const classSwitcher = document.getElementById('class-switcher');
    if (classSwitcher) classSwitcher.style.display = 'none';
  }
}

function updateClassSwitcher(activeClass, classes) {
  const el = document.getElementById('class-switcher');
  const nameEl = document.getElementById('class-switcher-name');
  if (!activeClass || classes.length === 0) {
    if (el) el.style.display = 'none';
    return;
  }
  if (el) el.style.display = 'block';
  if (nameEl) nameEl.textContent = activeClass.name;
  const switcherBtn = document.getElementById('class-switcher-btn');
  if (switcherBtn) switcherBtn.onclick = () => showClassDropdown(classes, activeClass.id);
}

function showClassDropdown(classes, activeId) {
  const btn = document.getElementById('class-switcher-btn');
  let dd = document.getElementById('class-dd');
  if (dd) { dd.remove(); return; }
  dd = document.createElement('div');
  dd.id = 'class-dd';
  dd.className = 'class-dropdown';
  dd.innerHTML = classes.map(c => `
    <button class="class-dd-item${c.id === activeId ? ' active' : ''}" data-id="${c.id}">${esc(c.name)}</button>
  `).join('') + `<hr style="border:none;border-top:1px solid rgba(255,255,255,.1);margin:4px 0"/>
  <button class="class-dd-item" data-action="manage">Manage classes →</button>`;
  if (btn && btn.parentElement) {
    btn.parentElement.style.position = 'relative';
    btn.parentElement.appendChild(dd);
  }
  dd.addEventListener('click', async e => {
    const item = e.target.closest('[data-id],[data-action]');
    if (!item) return;
    if (item.dataset.action === 'manage') { dd.remove(); navigate('classes'); return; }
    const id = Number(item.dataset.id);
    currentClassId = id;
    localStorage.setItem('current_class_id', id);
    const cls = classes.find(c => c.id === id);
    if (cls) applyBrand({ className: cls.name, schoolName: cls.schoolName || '', grade: cls.grade });
    updateClassSwitcher(cls, classes);
    dd.remove();
    await render();
  });
  setTimeout(() => {
    document.addEventListener('click', () => dd?.remove(), { once: true });
  }, 50);
}

function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });
  if (chatUnsubscribe && page !== 'chat') {
    chatUnsubscribe();
    chatUnsubscribe = null;
  }
  render();
}

async function render() {
  const main = document.getElementById('main');
  if (!main) return;
  main.innerHTML = `<div class="loading-full"><div class="spinner"></div></div>`;
  if (currentPage === 'attendance') await renderAttendance(main);
  else if (currentPage === 'roster') await renderRoster(main);
  else if (currentPage === 'summary') await renderSummary(main);
  else if (currentPage === 'classes') await renderMyClasses(main);
  else if (currentPage === 'chat') await renderChat(main);
  else if (currentPage === 'settings') renderSettings(main);
}

/* ─── Student Dashboard ─────────────────────────────────────────── */
async function showStudentDashboard() {
  document.getElementById('app-layout').style.display = 'flex';
  document.querySelectorAll('.nav-item').forEach(b => { if (b) b.style.display = 'none'; });
  
  const studentId = currentUser.id;
  const studentsList = await GET('/students');
  const studentInfo = studentsList.find(s => s.id === studentId);
  const allAttendance = await GET('/attendance');
  const myRecords = allAttendance.filter(a => a.studentId === studentId);
  const classmates = studentsList.filter(s => s.id !== studentId);
  
  const { earned: achievements, rate, maxStreak, present, total } = calculateAchievements(myRecords);
  const absent = myRecords.filter(r => r.status === 'absent').length;
  const late = myRecords.filter(r => r.status === 'late').length;
  
  let currentStreak = 0;
  const sortedPresent = myRecords.filter(r => r.status === 'present').sort((a, b) => new Date(b.date) - new Date(a.date));
  for (let i = 0; i < sortedPresent.length; i++) {
    if (i === 0) {
      currentStreak = 1;
    } else {
      const prevDate = new Date(sortedPresent[i - 1].date);
      const currDate = new Date(sortedPresent[i].date);
      const diffDays = (prevDate - currDate) / (1000 * 60 * 60 * 24);
      if (diffDays === 1) {
        currentStreak++;
      } else {
        break;
      }
    }
  }
  
  const settings = loadSettings();
  document.getElementById('brand-title-el').textContent = settings.className || 'My Class';
  document.getElementById('brand-sub-el').textContent = settings.schoolName || 'Attendance Tracker';
  
  const uid = currentUser.id || 'student';
  const avatarDisplay = getStudentAvatarDisplay(studentInfo || { id: studentId, name: studentInfo?.name || 'Student' });
  
  const main = document.getElementById('main');
  if (!main) return;
  main.innerHTML = `
    ${bannerHTML(uid)}
    <div class="student-dash">
      <div class="student-dash-header">
        <div class="student-avatar-large" id="change-avatar-btn" style="cursor: pointer;">
          ${avatarDisplay}
        </div>
        <div style="flex:1">
          <div class="page-title">Welcome, ${esc(studentInfo?.name || 'Student')}!</div>
          <div class="page-sub">${esc(settings.className || 'Your class')}${studentInfo?.grade ? ` · ${studentInfo.grade}` : ''}</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-ghost btn-sm" id="change-banner-btn">🎨 Customize Banner</button>
          <button class="btn btn-ghost btn-sm" id="view-classmates-btn">👥 View Classmates (${classmates.length})</button>
          <button class="btn btn-ghost" id="student-logout-btn">${iconSVG('logout')} Sign Out</button>
        </div>
      </div>
      
      <div class="stat-grid">
        <div class="stat-card green"><div class="stat-label">Present</div><div class="stat-value">${present}</div></div>
        <div class="stat-card red"><div class="stat-label">Absent</div><div class="stat-value">${absent}</div></div>
        <div class="stat-card amber"><div class="stat-label">Late</div><div class="stat-value">${late}</div></div>
        <div class="stat-card"><div class="stat-label">Attendance Rate</div><div class="stat-value" style="color:var(--teal)">${Math.round(rate)}%</div></div>
      </div>
      
      <div class="card streak-card">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:20px;">
          <div>
            <div class="streak-value">${currentStreak}</div>
            <div class="streak-label">Current Streak 🔥</div>
          </div>
          <div style="text-align:right">
            <div class="streak-value">${maxStreak}</div>
            <div class="streak-label">Best Streak 🏆</div>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <span>🏆 Achievements & Badges</span>
          <span>${achievements.length} / ${ACHIEVEMENTS.length} earned</span>
        </div>
        <div class="badges-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;padding:20px;">
          ${ACHIEVEMENTS.map(ach => {
            const earned = achievements.some(e => e.id === ach.id);
            return `
              <div class="badge-card ${earned ? 'badge-earned' : ''}" style="${earned ? 'background: linear-gradient(135deg, var(--teal), #0891b2); color: white;' : 'background: var(--bg);'}padding:16px;text-align:center;border-radius:12px;">
                <div class="badge-icon" style="font-size:40px;">${ach.icon}</div>
                <div class="badge-name" style="font-weight:700;margin-top:8px;">${ach.name}</div>
                <div class="badge-description" style="font-size:10px;margin-top:4px;">${ach.description}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      
      <div class="card">
        <div class="card-header"><span>📅 Attendance History</span><span>${total} record${total === 1 ? '' : 's'}</span></div>
        <div style="padding:4px">
          ${myRecords.length === 0 ? `
            <div class="empty-state">
              <div class="empty-icon">${iconSVG('bar-chart')}</div>
              <div class="empty-title">No records yet</div>
              <div class="empty-sub">Your attendance will appear here once your teacher starts recording.</div>
            </div>
          ` : myRecords.sort((a,b) => new Date(b.date) - new Date(a.date)).map(r => `
            <div class="student-history-row" style="display:grid;grid-template-columns:180px 100px 1fr;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border);">
              <div class="student-history-date" style="font-weight:600;">${formatDate(r.date)}</div>
              <span class="badge ${r.status === 'present' ? 'badge-green' : r.status === 'absent' ? 'badge-red' : r.status === 'late' ? 'badge-amber' : 'badge-indigo'}">
                ${r.status.charAt(0).toUpperCase() + r.status.slice(1)}
              </span>
              ${r.notes ? `<div class="student-history-note" style="font-size:12px;color:var(--text-mute);">📝 ${esc(r.notes)}</div>` : '<div></div>'}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('student-logout-btn')?.addEventListener('click', async () => {
    localStorage.removeItem('current_user');
    currentUser = null;
    location.reload();
  });
  
  document.getElementById('change-avatar-btn')?.addEventListener('click', () => {
    openProfilePictureModal(studentId, studentInfo?.name, () => showStudentDashboard());
  });
  
  document.getElementById('change-banner-btn')?.addEventListener('click', () => {
    openBannerPicker(uid, () => showStudentDashboard());
  });
  
  document.getElementById('view-classmates-btn')?.addEventListener('click', () => {
    showClassmatesGallery(classmates, myRecords);
  });
}

/* ─── Classmates Gallery ────────────────────────────────────────── */
async function showClassmatesGallery(classmates, myRecords) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';
  modal.innerHTML = `
    <div class="modal modal-wide" style="max-width: 800px;">
      <div class="modal-header">
        <h2 class="modal-title">👥 Your Classmates</h2>
        <button class="modal-close" id="gallery-close">&times;</button>
      </div>
      <div class="classmates-grid" id="classmates-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;max-height:500px;overflow-y:auto;padding:4px;"></div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  const grid = modal.querySelector('#classmates-grid');
  grid.innerHTML = classmates.map(classmate => {
    const classmateRecords = myRecords.filter(r => r.studentId === classmate.id);
    const present = classmateRecords.filter(r => r.status === 'present').length;
    const total = classmateRecords.length;
    const rate = total > 0 ? Math.round((present / total) * 100) : 0;
    const avatarDisplay = getStudentAvatarDisplay(classmate);
    
    return `
      <div class="classmate-card" data-id="${classmate.id}" style="background:var(--white);border:1px solid var(--border);border-radius:16px;padding:20px;cursor:pointer;">
        <div class="classmate-header" style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div class="student-avatar-small" style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--teal),#0891b2);display:flex;align-items:center;justify-content:center;font-size:24px;">${avatarDisplay}</div>
          <div class="classmate-info" style="flex:1;">
            <div class="classmate-name" style="font-weight:800;font-size:16px;">${esc(classmate.name)}</div>
            <div class="classmate-grade" style="font-size:12px;color:var(--text-mute);">${classmate.grade || 'No grade'}</div>
          </div>
        </div>
        <div class="classmate-stats" style="display:flex;gap:12px;padding-top:12px;border-top:1px solid var(--border);">
          <div class="classmate-stat" style="flex:1;text-align:center;">
            <div class="classmate-stat-value" style="font-size:20px;font-weight:800;color:var(--teal);">${rate}%</div>
            <div class="classmate-stat-label" style="font-size:10px;color:var(--text-mute);text-transform:uppercase;">Attendance</div>
          </div>
          <div class="classmate-stat" style="flex:1;text-align:center;">
            <div class="classmate-stat-value" style="font-size:20px;font-weight:800;color:var(--green);">${present}</div>
            <div class="classmate-stat-label" style="font-size:10px;color:var(--text-mute);text-transform:uppercase;">Present</div>
          </div>
          <div class="classmate-stat" style="flex:1;text-align:center;">
            <div class="classmate-stat-value" style="font-size:20px;font-weight:800;color:var(--text-mid);">${total}</div>
            <div class="classmate-stat-label" style="font-size:10px;color:var(--text-mute);text-transform:uppercase;">Total Days</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  modal.querySelector('#gallery-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

/* ─── Profile Picture Modal ─────────────────────────────────────── */
function openProfilePictureModal(studentId, studentName, onSave) {
  const modal = document.getElementById('modal-profile-picture');
  if (!modal) {
    console.error('Profile picture modal not found');
    return;
  }
  
  const grid = document.getElementById('avatars-grid');
  if (!grid) return;
  
  let selectedAvatar = localStorage.getItem(`avatar_${studentId}`) || 'avatar1';
  let selectedFile = null;
  
  grid.innerHTML = STUDENT_AVATARS.map(avatar => `
    <div class="profile-avatar-option ${selectedAvatar === avatar.id ? 'selected' : ''}" data-avatar="${avatar.id}" style="background: ${avatar.color};aspect-ratio:1;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;cursor:pointer;border:3px solid ${selectedAvatar === avatar.id ? 'var(--teal)' : 'transparent'};">
      <span style="font-size: 32px;">${avatar.emoji}</span>
    </div>
  `).join('');
  
  grid.querySelectorAll('.profile-avatar-option').forEach(option => {
    option.addEventListener('click', () => {
      grid.querySelectorAll('.profile-avatar-option').forEach(o => {
        o.classList.remove('selected');
        o.style.border = '3px solid transparent';
      });
      option.classList.add('selected');
      option.style.border = '3px solid var(--teal)';
      selectedAvatar = option.dataset.avatar;
      selectedFile = null;
    });
  });
  
  const fileInput = document.getElementById('profile-photo-input');
  const uploadBtn = document.getElementById('upload-photo-btn');
  
  if (uploadBtn) {
    uploadBtn.onclick = () => fileInput.click();
  }
  if (fileInput) {
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          selectedFile = ev.target.result;
          selectedAvatar = null;
          toast('Photo loaded! Click Save to apply', 'success');
        };
        reader.readAsDataURL(file);
      }
    };
  }
  
  modal.style.display = 'flex';
  
  const saveBtn = document.getElementById('profile-pic-save');
  const cancelBtn = document.getElementById('profile-pic-cancel');
  const closeBtn = document.getElementById('profile-pic-close');
  
  const cleanup = () => {
    modal.style.display = 'none';
    if (saveBtn) saveBtn.removeEventListener('click', saveHandler);
    if (cancelBtn) cancelBtn.removeEventListener('click', cleanup);
    if (closeBtn) closeBtn.removeEventListener('click', cleanup);
  };
  
  const saveHandler = () => {
    if (selectedFile) {
      setStudentProfilePic(studentId, selectedFile);
    } else if (selectedAvatar) {
      setStudentProfilePic(studentId, selectedAvatar);
    }
    toast('Profile picture updated!', 'success');
    cleanup();
    if (onSave) onSave();
  };
  
  if (saveBtn) saveBtn.addEventListener('click', saveHandler);
  if (cancelBtn) cancelBtn.addEventListener('click', cleanup);
  if (closeBtn) closeBtn.addEventListener('click', cleanup);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) cleanup();
  });
}

/* ─── Banner Picker Modal ───────────────────────────────────────── */
function openBannerPicker(uid, onSave) {
  const modal = document.getElementById('modal-banner');
  if (!modal) return;
  
  modal.style.display = 'flex';
  const stored = getBanner(uid);
  const grid = document.getElementById('banner-modal-grid');
  if (!grid) return;
  
  grid.innerHTML = BANNER_PRESETS.map(b => {
    const active = (!stored && b.id === 'none') || stored?.id === b.id;
    return `
      <button class="banner-tile ${active ? 'banner-tile-active' : ''}" data-bid="${b.id}" style="background: ${b.gradient}; height: 80px; border-radius: 12px; border: 2px solid ${active ? 'var(--teal)' : 'transparent'}; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer;">
        <span style="font-size: 28px;">${b.icon}</span>
        <span style="font-size: 10px; font-weight: 700; margin-top: 4px;">${b.name}</span>
      </button>
    `;
  }).join('');
  
  let pendingBanner = stored;
  
  grid.querySelectorAll('.banner-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const bid = tile.dataset.bid;
      pendingBanner = bid === 'none' ? null : BANNER_PRESETS.find(b => b.id === bid);
      grid.querySelectorAll('.banner-tile').forEach(t => {
        t.classList.remove('banner-tile-active');
        t.style.border = '2px solid transparent';
      });
      tile.classList.add('banner-tile-active');
      tile.style.border = '2px solid var(--teal)';
    });
  });
  
  const saveBtn = document.getElementById('banner-save-btn');
  const closeBtn = document.getElementById('banner-close-btn');
  const closeBtn2 = document.getElementById('banner-close-btn2');
  
  const cleanup = () => {
    modal.style.display = 'none';
    if (saveBtn) saveBtn.removeEventListener('click', saveHandler);
    if (closeBtn) closeBtn.removeEventListener('click', cleanup);
    if (closeBtn2) closeBtn2.removeEventListener('click', cleanup);
  };
  
  const saveHandler = () => {
    setBanner(uid, pendingBanner);
    cleanup();
    if (onSave) onSave();
    toast('Banner updated!', 'success');
  };
  
  if (saveBtn) saveBtn.addEventListener('click', saveHandler);
  if (closeBtn) closeBtn.addEventListener('click', cleanup);
  if (closeBtn2) closeBtn2.addEventListener('click', cleanup);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) cleanup();
  });
}

/* ─── Render Functions ──────────────────────────────────────────── */
async function renderAttendance(main) {
  const students = await GET('/students');
  const attendanceRecords = await GET('/attendance');
  const attendanceMap = {};
  attendanceRecords.forEach(r => { attendanceMap[r.studentId] = r; });
  
  const present = attendanceRecords.filter(r => r.status === 'present').length;
  const absent = attendanceRecords.filter(r => r.status === 'absent').length;
  const late = attendanceRecords.filter(r => r.status === 'late').length;
  const recorded = attendanceRecords.length;
  const total = students.length;
  
  const rows = students.length === 0
    ? `<div class="empty-state"><div class="empty-icon">${iconSVG('users')}</div><div class="empty-title">No students yet</div><div class="empty-sub">Add students to start tracking attendance</div></div>`
    : students.map(s => `
      <div class="student-row" data-student-id="${s.id}" style="display:flex;align-items:center;gap:16px;padding:12px 16px;border-radius:12px;">
        <div class="student-avatar-small" style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--teal),#0891b2);display:flex;align-items:center;justify-content:center;font-size:20px;">${getStudentAvatarDisplay(s)}</div>
        <div class="student-info" style="flex:1;">
          <div class="student-name" style="font-weight:700;">${esc(s.name)}</div>
          ${s.grade ? `<div class="student-grade" style="font-size:11px;color:var(--text-mute);">${esc(s.grade)}</div>` : ''}
        </div>
        <div class="student-controls" style="display:flex;align-items:center;gap:12px;">
          <div class="status-group" style="display:flex;gap:6px;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:4px;">
            <button class="status-btn ${attendanceMap[s.id]?.status === 'present' ? 'active-present' : ''}" data-status="present" data-student-id="${s.id}" style="width:38px;height:32px;border-radius:7px;border:none;cursor:pointer;">${iconSVG('check')}</button>
            <button class="status-btn ${attendanceMap[s.id]?.status === 'absent' ? 'active-absent' : ''}" data-status="absent" data-student-id="${s.id}" style="width:38px;height:32px;border-radius:7px;border:none;cursor:pointer;">${iconSVG('x')}</button>
            <button class="status-btn ${attendanceMap[s.id]?.status === 'late' ? 'active-late' : ''}" data-status="late" data-student-id="${s.id}" style="width:38px;height:32px;border-radius:7px;border:none;cursor:pointer;">${iconSVG('clock')}</button>
          </div>
          <input class="notes-input" type="text" placeholder="Add note..." value="${esc(attendanceMap[s.id]?.notes || '')}" data-student-id="${s.id}" style="border:1px solid var(--border);border-radius:8px;padding:8px 12px;width:160px;">
        </div>
      </div>
    `).join('');
  
  main.innerHTML = `
    ${bannerHTML(currentUser?.id)}
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
      <div>
        <div class="page-title" style="font-size:28px;font-weight:800;">Daily Attendance</div>
        <div class="page-sub" style="color:var(--text-mute);margin-top:4px;">${formatDate(currentDate)}</div>
      </div>
      <div class="date-bar" style="display:flex;align-items:center;gap:8px;background:var(--white);border:1px solid var(--border);border-radius:12px;padding:6px 10px;">
        <button class="date-btn" id="prev-day" style="width:32px;height:32px;border:none;background:transparent;border-radius:8px;cursor:pointer;">◀</button>
        <input type="date" id="date-picker" value="${currentDate}" class="date-input" style="background:transparent;border:none;font-weight:700;text-align:center;">
        <button class="date-btn" id="next-day" style="width:32px;height:32px;border:none;background:transparent;border-radius:8px;cursor:pointer;">▶</button>
        <button class="today-btn" id="today-btn" style="padding:6px 14px;border:1px solid var(--border);border-radius:6px;background:transparent;cursor:pointer;">Today</button>
      </div>
    </div>
    
    <div class="stat-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;">
      <div class="stat-card" style="background:var(--white);border:1px solid var(--border);border-radius:16px;padding:20px;">
        <div class="stat-label" style="font-size:11px;font-weight:700;color:var(--text-mute);">Total Students</div>
        <div class="stat-value" style="font-size:36px;font-weight:800;margin-top:8px;">${total}</div>
      </div>
      <div class="stat-card green" style="background:var(--green-bg);border:1px solid var(--green-bdr);border-radius:16px;padding:20px;">
        <div class="stat-label" style="font-size:11px;font-weight:700;color:var(--green);">Present</div>
        <div class="stat-value" style="font-size:36px;font-weight:800;margin-top:8px;">${present}</div>
      </div>
      <div class="stat-card red" style="background:var(--red-bg);border:1px solid var(--red-bdr);border-radius:16px;padding:20px;">
        <div class="stat-label" style="font-size:11px;font-weight:700;color:var(--red);">Absent</div>
        <div class="stat-value" style="font-size:36px;font-weight:800;margin-top:8px;">${absent}</div>
      </div>
      <div class="stat-card amber" style="background:var(--amber-bg);border:1px solid var(--amber-bdr);border-radius:16px;padding:20px;">
        <div class="stat-label" style="font-size:11px;font-weight:700;color:var(--amber);">Completion</div>
        <div class="stat-value" style="font-size:36px;font-weight:800;margin-top:8px;">${total > 0 ? Math.round(recorded/total*100) : 0}%</div>
      </div>
    </div>
    
    <div class="card" style="background:var(--white);border:1px solid var(--border);border-radius:16px;overflow:hidden;">
      <div class="card-header" style="padding:14px 20px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;">
        <span>Student List</span>
        <span id="recorded-count">${recorded} of ${total} recorded</span>
      </div>
      <div class="student-list" id="student-list">${rows}</div>
    </div>
  `;
  
  // Event listeners
  document.getElementById('prev-day')?.addEventListener('click', () => {
    currentDate = new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() - 1)).toISOString().split('T')[0];
    render();
  });
  document.getElementById('next-day')?.addEventListener('click', () => {
    currentDate = new Date(new Date(currentDate).setDate(new Date(currentDate).getDate() + 1)).toISOString().split('T')[0];
    render();
  });
  document.getElementById('today-btn')?.addEventListener('click', () => {
    currentDate = todayStr();
    render();
  });
  document.getElementById('date-picker')?.addEventListener('change', (e) => {
    currentDate = e.target.value;
    render();
  });
  
  // Save attendance on button click
  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const studentId = parseInt(btn.dataset.studentId);
      const status = btn.dataset.status;
      const row = document.querySelector(`.student-row[data-student-id="${studentId}"]`);
      const notes = row?.querySelector('.notes-input')?.value || '';
      
      try {
        await POST('/attendance', { studentId, date: currentDate, status, notes });
        toast(`Marked as ${status}`, 'success');
        render();
      } catch (err) {
        toast('Failed to save', 'error');
      }
    });
  });
  
  // Save notes on blur
  document.querySelectorAll('.notes-input').forEach(input => {
    input.addEventListener('blur', async (e) => {
      const studentId = parseInt(input.dataset.studentId);
      const notes = input.value;
      const existingRecord = attendanceMap[studentId];
      
      try {
        if (existingRecord) {
          await PATCH(`/attendance/${existingRecord.id}`, { notes });
        } else {
          await POST('/attendance', { studentId, date: currentDate, status: 'present', notes });
        }
        toast('Note saved', 'success');
      } catch (err) {
        toast('Failed to save note', 'error');
      }
    });
  });
}

async function renderRoster(main) {
  const students = await GET('/students');
  main.innerHTML = `
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
      <div>
        <div class="page-title" style="font-size:28px;font-weight:800;">Class Roster</div>
        <div class="page-sub" style="color:var(--text-mute);margin-top:4px;">${students.length} students enrolled</div>
      </div>
      <button class="btn btn-primary" id="open-add-modal" style="display:flex;align-items:center;gap:6px;padding:8px 16px;background:var(--teal);color:white;border:none;border-radius:8px;cursor:pointer;">${iconSVG('plus')} Add Student</button>
    </div>
    <div class="card" style="background:var(--white);border:1px solid var(--border);border-radius:16px;overflow:hidden;">
      <div id="roster-list">
        ${students.map(s => `
          <div class="roster-row" style="display:flex;align-items:center;gap:16px;padding:16px 20px;border-bottom:1px solid var(--border);">
            <div class="student-avatar-small" style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--teal),#0891b2);display:flex;align-items:center;justify-content:center;font-size:24px;">${getStudentAvatarDisplay(s)}</div>
            <div class="roster-info" style="flex:1;">
              <div class="roster-name" style="font-weight:700;font-size:14px;">${esc(s.name)}</div>
              ${s.grade ? `<div class="roster-meta" style="font-size:12px;color:var(--text-mute);">${esc(s.grade)}</div>` : ''}
              ${s.notes ? `<div class="roster-notes-text" style="font-size:12px;color:var(--text-mid);margin-top:6px;">${esc(s.notes)}</div>` : ''}
            </div>
            <div class="roster-actions" style="display:flex;gap:8px;">
              <button class="btn btn-danger btn-sm" data-action="delete" data-id="${s.id}" style="padding:6px 12px;background:transparent;color:var(--red);border:1px solid var(--red-bdr);border-radius:8px;cursor:pointer;">${iconSVG('trash')}</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.getElementById('open-add-modal')?.addEventListener('click', () => {
    document.getElementById('modal-add-student').style.display = 'flex';
  });
  
  document.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const id = parseInt(btn.dataset.id);
      if (confirm('Delete this student?')) {
        await DEL(`/students/${id}`);
        toast('Student deleted', 'success');
        renderRoster(main);
      }
    });
  });
}

async function renderSummary(main) {
  const summary = await GET('/attendance/summary');
  main.innerHTML = `
    <div class="page-header" style="margin-bottom:24px;">
      <div>
        <div class="page-title" style="font-size:28px;font-weight:800;">Attendance Summary</div>
        <div class="page-sub" style="color:var(--text-mute);margin-top:4px;">Overall statistics for all students</div>
      </div>
    </div>
    <div class="card" style="background:var(--white);border:1px solid var(--border);border-radius:16px;overflow:auto;">
      <table class="summary-table" style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="background:var(--bg);">
            <th style="text-align:left;padding:12px 16px;font-size:11px;font-weight:700;color:var(--text-mute);">Student</th>
            <th style="text-align:center;padding:12px 16px;font-size:11px;font-weight:700;color:var(--text-mute);">Present</th>
            <th style="text-align:center;padding:12px 16px;font-size:11px;font-weight:700;color:var(--text-mute);">Absent</th>
            <th style="text-align:center;padding:12px 16px;font-size:11px;font-weight:700;color:var(--text-mute);">Late</th>
            <th style="text-align:center;padding:12px 16px;font-size:11px;font-weight:700;color:var(--text-mute);">Total Days</th>
            <th style="text-align:center;padding:12px 16px;font-size:11px;font-weight:700;color:var(--text-mute);">Rate</th>
          </tr>
        </thead>
        <tbody>
          ${summary.map(s => {
            const rate = s.total > 0 ? Math.round((s.present / s.total) * 100) : 0;
            return `
              <tr style="border-bottom:1px solid var(--border);">
                <td style="padding:12px 16px;font-weight:600;">${esc(s.studentName)}</td>
                <td style="text-align:center;padding:12px 16px;"><span class="badge badge-green" style="background:var(--green-bg);color:#14532d;padding:3px 10px;border-radius:99px;font-size:12px;">${s.present}</span></td>
                <td style="text-align:center;padding:12px 16px;"><span class="badge badge-red" style="background:var(--red-bg);color:#7f1d1d;padding:3px 10px;border-radius:99px;font-size:12px;">${s.absent}</span></td>
                <td style="text-align:center;padding:12px 16px;"><span class="badge badge-amber" style="background:var(--amber-bg);color:#78350f;padding:3px 10px;border-radius:99px;font-size:12px;">${s.late}</span></td>
                <td style="text-align:center;padding:12px 16px;font-weight:600;">${s.total}</td>
                <td style="padding:12px 16px;">
                  <div style="display:flex;align-items:center;gap:8px;">
                    <div style="font-size:13px;font-weight:700;color:var(--teal);">${rate}%</div>
                    <div class="rate-bar" style="flex:1;height:5px;background:var(--border);border-radius:99px;overflow:hidden;">
                      <div class="rate-fill" style="width:${rate}%;height:100%;background:linear-gradient(90deg,var(--teal),#0891b2);border-radius:99px;"></div>
                    </div>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

async function renderMyClasses(main) {
  const classes = await GET('/classes');
  main.innerHTML = `
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
      <div>
        <div class="page-title" style="font-size:28px;font-weight:800;">My Classes</div>
        <div class="page-sub" style="color:var(--text-mute);margin-top:4px;">Manage your class periods</div>
      </div>
      <button class="btn btn-primary" id="new-class-btn" style="display:flex;align-items:center;gap:6px;padding:8px 16px;background:var(--teal);color:white;border:none;border-radius:8px;cursor:pointer;">${iconSVG('plus')} New Class</button>
    </div>
    <div class="classes-list" style="display:flex;flex-direction:column;gap:12px;">
      ${classes.map(c => `
        <div class="class-card ${currentClassId === c.id ? 'class-card-active' : ''}" style="background:var(--white);border:1px solid var(--border);border-radius:16px;padding:18px 20px;display:flex;align-items:center;gap:16px;${currentClassId === c.id ? 'border-color:var(--teal);box-shadow:0 0 0 3px var(--teal-glow);' : ''}">
          <div class="class-card-info" style="flex:1;">
            <div class="class-card-name" style="font-size:15px;font-weight:800;">${esc(c.name)}</div>
            <div class="class-card-meta" style="font-size:13px;color:var(--text-mute);">${c.schoolName || ''} ${c.grade ? `· ${c.grade}` : ''}</div>
          </div>
          <div class="class-card-actions" style="display:flex;gap:8px;">
            <button class="btn btn-sm btn-ghost" data-action="switch" data-id="${c.id}" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:8px;cursor:pointer;">${currentClassId === c.id ? 'Current' : 'Switch'}</button>
            <button class="btn btn-sm btn-danger" data-action="delete" data-id="${c.id}" style="padding:6px 12px;background:transparent;color:var(--red);border:1px solid var(--red-bdr);border-radius:8px;cursor:pointer;">${iconSVG('trash')}</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  document.getElementById('new-class-btn')?.addEventListener('click', () => {
    document.getElementById('modal-add-class').style.display = 'flex';
  });
  
  document.querySelectorAll('[data-action="switch"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      currentClassId = parseInt(btn.dataset.id);
      localStorage.setItem('current_class_id', currentClassId);
      await loadAndApplyClasses();
      renderMyClasses(main);
      toast('Class switched', 'success');
    });
  });
  
  document.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = parseInt(btn.dataset.id);
      if (confirm('Delete this class?')) {
        await DEL(`/classes/${id}`);
        if (currentClassId === id) currentClassId = null;
        renderMyClasses(main);
        toast('Class deleted', 'success');
      }
    });
  });
}

/* ─── CHAT SYSTEM WITH RICH TEXT ───────────────────────────────── */
async function renderChat(main) {
  const roomKey = localStorage.getItem('chat_room_key') || 'default-room';
  const displayName = currentUser?.role === 'teacher' 
    ? `👩‍🏫 ${currentUser?.username || 'Teacher'}`
    : `👤 ${currentUser?.username || 'Student'}`;
  
  main.innerHTML = `
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
      <div>
        <div class="page-title" style="font-size:28px;font-weight:800;">💬 Class Chat</div>
        <div class="page-sub" style="color:var(--text-mute);margin-top:4px;">Real-time messaging · Room: <strong>${escapeHtml(roomKey)}</strong></div>
      </div>
      <button class="btn btn-ghost" id="change-room-btn" style="padding:8px 16px;background:var(--white);border:1px solid var(--border);border-radius:8px;cursor:pointer;">🏠 Change Room</button>
    </div>
    
    <div class="chat-container" style="background:var(--white);border:1px solid var(--border);border-radius:16px;display:flex;flex-direction:column;height:calc(100vh - 200px);overflow:hidden;">
      <!-- Rich Text Toolbar -->
      <div class="chat-toolbar" style="display:flex;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border);background:var(--bg);flex-wrap:wrap;">
        <button type="button" class="toolbar-btn" onclick="applyFormatting('bold')" title="Bold" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;font-weight:bold;">B</button>
        <button type="button" class="toolbar-btn" onclick="applyFormatting('italic')" title="Italic" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;font-style:italic;">I</button>
        <button type="button" class="toolbar-btn" onclick="applyFormatting('underline')" title="Underline" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;text-decoration:underline;">U</button>
        <button type="button" class="toolbar-btn" onclick="showColorPicker()" title="Text Color" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;">🎨 Color</button>
        <button type="button" class="toolbar-btn" onclick="showFontSize()" title="Font Size" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;">📏 Size</button>
        <div class="toolbar-divider" style="width:1px;height:30px;background:var(--border);margin:0 4px;"></div>
        <button type="button" class="toolbar-btn" onclick="insertEmoji('😀')" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;">😀</button>
        <button type="button" class="toolbar-btn" onclick="insertEmoji('😂')" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;">😂</button>
        <button type="button" class="toolbar-btn" onclick="insertEmoji('❤️')" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;">❤️</button>
        <button type="button" class="toolbar-btn" onclick="insertEmoji('👍')" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;">👍</button>
        <button type="button" class="toolbar-btn" onclick="insertEmoji('🎉')" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;">🎉</button>
        <button type="button" class="toolbar-btn" onclick="insertEmoji('📚')" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;">📚</button>
        <button type="button" class="toolbar-btn" onclick="insertEmoji('🏆')" style="padding:6px 12px;background:var(--white);border:1px solid var(--border);border-radius:6px;cursor:pointer;">🏆</button>
      </div>
      
      <div class="chat-messages" id="chat-messages" style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:12px;">
        <div class="chat-loading" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;flex:1;color:var(--text-mute);">
          <div class="spinner"></div>
          <p>Loading messages...</p>
        </div>
      </div>
      
      <div class="chat-input-area" style="padding:16px;border-top:1px solid var(--border);background:var(--white);">
        <form class="chat-input-form" id="chat-form" style="display:flex;gap:10px;">
          <div style="flex:1;position:relative;">
            <div id="message-editor" contenteditable="true" class="chat-input-rich" style="border:1px solid var(--border);border-radius:24px;padding:10px 16px;min-height:44px;max-height:120px;overflow-y:auto;background:var(--bg);font-family:inherit;font-size:13px;line-height:1.5;outline:none;" placeholder="Type your message here..."></div>
          </div>
          <button type="submit" class="chat-send-btn" style="padding:8px 20px;background:var(--teal);color:white;border:none;border-radius:24px;font-weight:700;cursor:pointer;">📤 Send</button>
        </form>
      </div>
    </div>
  `;
  
  // Make toolbar functions global
  window.applyFormatting = applyFormatting;
  window.showColorPicker = showColorPicker;
  window.showFontSize = showFontSize;
  window.insertEmoji = insertEmoji;
  
  // Store messages in localStorage for demo
  let messages = JSON.parse(localStorage.getItem(`chat_messages_${roomKey}`) || '[]');
  renderChatMessages(messages);
  
  const chatForm = document.getElementById('chat-form');
  if (chatForm) {
    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const editor = document.getElementById('message-editor');
      const text = editor.innerHTML;
      
      if (!text || text === '<br>') return;
      
      editor.innerHTML = '';
      
      const newMessage = {
        id: Date.now(),
        text: text,
        senderId: currentUser?.id || 'anonymous',
        senderName: displayName,
        senderRole: currentUser?.role || 'student',
        timestamp: new Date().toISOString()
      };
      
      messages.push(newMessage);
      localStorage.setItem(`chat_messages_${roomKey}`, JSON.stringify(messages));
      renderChatMessages(messages);
      toast('Message sent!', 'success');
    });
  }
  
  document.getElementById('change-room-btn')?.addEventListener('click', () => {
    const newRoom = prompt('Enter room name:', roomKey);
    if (newRoom && newRoom.trim()) {
      localStorage.setItem('chat_room_key', newRoom.trim());
      renderChat(main);
      toast(`Switched to room: ${newRoom}`, 'success');
    }
  });
}

function renderChatMessages(messages) {
  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;
  
  if (messages.length === 0) {
    messagesDiv.innerHTML = `<div class="chat-empty" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;flex:1;color:var(--text-mute);padding:40px;">
      <div class="empty-icon" style="font-size:48px;">💬</div>
      <div class="empty-title" style="font-size:16px;font-weight:700;">No messages yet</div>
      <div class="empty-sub" style="font-size:13px;">Be the first to say hello! 👋</div>
    </div>`;
    return;
  }
  
  const currentUserId = currentUser?.id;
  
  messagesDiv.innerHTML = messages.map(msg => {
    const isMe = msg.senderId === currentUserId;
    const time = msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
    
    return `
      <div class="chat-message ${isMe ? 'chat-message-me' : 'chat-message-them'}" style="display:flex;flex-direction:column;max-width:70%;${isMe ? 'align-self:flex-end;align-items:flex-end;' : 'align-self:flex-start;align-items:flex-start;'}">
        ${!isMe ? `<div class="chat-sender" style="font-size:11px;font-weight:700;color:var(--text-mute);margin-bottom:4px;padding:0 4px;">${escapeHtml(msg.senderName || 'Unknown')}</div>` : ''}
        <div class="chat-bubble" style="padding:10px 14px;border-radius:14px;font-size:13px;font-weight:500;word-break:break-word;${isMe ? 'background:var(--teal);color:#fff;border-bottom-right-radius:4px;' : 'background:var(--bg);color:var(--text);border:1px solid var(--border);border-bottom-left-radius:4px;'}">
          ${msg.text}
          <div class="chat-time" style="font-size:10px;color:${isMe ? 'rgba(255,255,255,0.7)' : 'var(--text-mute)'};margin-top:4px;">${time}</div>
        </div>
      </div>
    `;
  }).join('');
  
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function renderSettings(main) {
  main.innerHTML = `
    <div class="page-header" style="margin-bottom:24px;">
      <div>
        <div class="page-title" style="font-size:28px;font-weight:800;">Settings</div>
        <div class="page-sub" style="color:var(--text-mute);margin-top:4px;">Customize your experience</div>
      </div>
    </div>
    <div class="settings-grid" style="display:flex;flex-direction:column;gap:20px;">
      <div class="settings-section" style="background:var(--white);border:1px solid var(--border);border-radius:16px;padding:24px;">
        <div class="settings-section-header" style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
          <div class="settings-section-icon" style="width:40px;height:40px;background:var(--teal-glow);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--teal);">🎨</div>
          <div>
            <div class="settings-section-title" style="font-size:15px;font-weight:700;">Sidebar Gradient</div>
            <div class="settings-section-sub" style="font-size:13px;color:var(--text-mute);">Choose a custom gradient for the sidebar</div>
          </div>
        </div>
        <div class="sidebar-swatches" style="display:flex;gap:8px;flex-wrap:wrap;">
          ${SIDEBAR_PRESETS.map(p => `
            <button class="sidebar-swatch" data-gradient="${p.gradient}" style="background: ${p.gradient}; width: 80px; height: 50px; border-radius: 8px; border: 2px solid transparent; cursor: pointer;" title="${p.name}"></button>
          `).join('')}
        </div>
      </div>
      
      <div class="settings-section" style="background:var(--white);border:1px solid var(--border);border-radius:16px;padding:24px;">
        <div class="settings-section-header" style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
          <div class="settings-section-icon" style="width:40px;height:40px;background:var(--teal-glow);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--teal);">💬</div>
          <div>
            <div class="settings-section-title" style="font-size:15px;font-weight:700;">Chat Room</div>
            <div class="settings-section-sub" style="font-size:13px;color:var(--text-mute);">Set a custom room name for your class chat</div>
          </div>
        </div>
        <div class="form-group" style="margin-bottom:16px;">
          <label class="form-label" style="font-size:12px;font-weight:700;">Room Key</label>
          <input type="text" id="chat-room-input" class="form-input" value="${localStorage.getItem('chat_room_key') || 'default-room'}" placeholder="e.g. mrs-smith-class" style="width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:8px;">
        </div>
        <button class="btn btn-primary" id="save-room-btn" style="padding:8px 16px;background:var(--teal);color:white;border:none;border-radius:8px;cursor:pointer;">Save Room Key</button>
      </div>
    </div>
  `;
  
  document.querySelectorAll('.sidebar-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      applySidebarGradient(btn.dataset.gradient);
      document.querySelectorAll('.sidebar-swatch').forEach(b => b.style.border = '2px solid transparent');
      btn.style.border = '2px solid var(--teal)';
      toast('Sidebar updated!', 'success');
    });
  });
  
  document.getElementById('save-room-btn')?.addEventListener('click', () => {
    const roomKey = document.getElementById('chat-room-input').value.trim();
    if (roomKey) {
      localStorage.setItem('chat_room_key', roomKey);
      toast('Chat room saved!', 'success');
    }
  });
}

function openAddModal() { 
  const modal = document.getElementById('modal-add-student');
  if (modal) modal.style.display = 'flex'; 
}

function closeAddModal() { 
  const modal = document.getElementById('modal-add-student');
  if (modal) modal.style.display = 'none'; 
  const form = document.getElementById('add-student-form');
  if (form) form.reset();
}

/* ─── Initialize App ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  applySidebarGradient(getSidebarGradient());
  
  const savedUser = localStorage.getItem('current_user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    launchApp();
  } else {
    showLoginScreen();
  }
});