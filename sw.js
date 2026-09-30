const C='agri-v1',A=['./','index.html','manifest.json','icon.svg','https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css','https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||e.request.url.includes('open-meteo'))return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok){const k=n.clone();caches.open(C).then(c=>c.put(e.request,k))}return n}).catch(()=>caches.match('index.html'))))});
