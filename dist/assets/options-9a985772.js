import"./modulepreload-polyfill-d01a6f05.js";document.getElementById("login-form").addEventListener("submit",(async e=>{e.preventDefault();const t=document.getElementById("username"),s=document.getElementById("password"),n=t.value.trim(),o=s.value,r=document.getElementById("status");r.innerText="Logging in...";try{const e=await fetch("https://bsky.social/xrpc/com.atproto.server.createSession",{method:"POST",headers:{"Content-Type":"application/json","User-Agent":"Bluesky Comments Extension"},body:JSON.stringify({identifier:n,password:o})});if(!e.ok)throw new Error("Invalid username or password");const t=await e.json();chrome.storage.sync.set({blueskyAccessJwt:t.accessJwt,blueskyRefreshJwt:t.refreshJwt,blueskyDid:t.did,blueskyHandle:t.handle},(()=>{r.style.color="green",r.innerText="Logged in successfully!"}))}catch(a){r.style.color="red",r.innerText=`Error: ${a.message}`}}));