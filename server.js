const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const dataDir = path.join(__dirname, 'data');
app.use(express.json({limit:'100kb'}));
app.use(express.urlencoded({extended:true, limit:'100kb'}));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (_req,res) => res.json({status:'ok', app:'Grace College of Medical Sciences'}));
app.post('/api/admissions', (req,res) => {
  const {name, phone, email, course, qualification, message, consent} = req.body || {};
  if (!name || !phone || !course || consent !== 'yes') return res.status(400).json({ok:false, message:'Please complete the required fields and consent.'});
  const entry = {id:Date.now().toString(36), submittedAt:new Date().toISOString(), name:String(name).slice(0,120), phone:String(phone).slice(0,30), email:String(email||'').slice(0,160), course:String(course).slice(0,120), qualification:String(qualification||'').slice(0,120), message:String(message||'').slice(0,1000)};
  try { fs.mkdirSync(dataDir,{recursive:true}); fs.appendFileSync(path.join(dataDir,'admissions.jsonl'), JSON.stringify(entry)+'\n', {mode:0o600}); return res.json({ok:true, message:'Thank you. Your enquiry has been recorded. The admissions team can contact you using the details provided.'}); }
  catch(e) { console.error('Unable to save admission enquiry:', e.message); return res.status(500).json({ok:false, message:'We could not save your enquiry right now. Please contact the college directly.'}); }
});
app.get('*', (_req,res) => res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(PORT, () => console.log(`Grace College website running on port ${PORT}`));
