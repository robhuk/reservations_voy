const CACHE_NAME="xc-reservation-list-v4";
const APP_SHELL=["./","./index.html","./manifest.webmanifest","./icon.svg"];
self.addEventListener("install",event=>event.waitUntil((async()=>{
 const c=await caches.open(CACHE_NAME);await c.addAll(APP_SHELL);await self.skipWaiting();
})()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(k=>k.startsWith("xc-reservation-list-")&&k!==CACHE_NAME).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
self.addEventListener("fetch",event=>{
 if(event.request.method!=="GET")return;
 event.respondWith((async()=>{
  try{
   const response=await fetch(event.request);
   if(response.ok&&new URL(event.request.url).origin===self.location.origin){
    const c=await caches.open(CACHE_NAME);c.put(event.request,response.clone());
   }
   return response;
  }catch(e){
   const cached=await caches.match(event.request);if(cached)return cached;
   if(event.request.mode==="navigate")return (await caches.match("./index.html"))||Response.error();
   return Response.error();
  }
 })());
});
