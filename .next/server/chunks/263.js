exports.id=263,exports.ids=[263],exports.modules={78033:(e,t,a)=>{let r={"0e91ee77b993be1e3682f31d37ba0ccd1017afb7":()=>Promise.resolve().then(a.bind(a,25567)).then(e=>e.createBooking),"1eda4f4b37716337e07b6d7fb68729d7273a0db7":()=>Promise.resolve().then(a.bind(a,25567)).then(e=>e.signOutAction),"381a2ba26357e4459204946457360d6bd76c7b09":()=>Promise.resolve().then(a.bind(a,25567)).then(e=>e.deleteBooking),"4c47d189dfdee72f5e712c4a274581ac5d12a2b2":()=>Promise.resolve().then(a.bind(a,25567)).then(e=>e.updateGuest),"7a094a0e84af70467919753c3411c2a8c3115119":()=>Promise.resolve().then(a.bind(a,25567)).then(e=>e.updateBooking),da1cfaf08f02c15753e897a6cebaf68b15db40f8:()=>Promise.resolve().then(a.bind(a,25567)).then(e=>e.signInAction)};async function n(e,...t){return(await r[e]()).apply(null,t)}e.exports={"0e91ee77b993be1e3682f31d37ba0ccd1017afb7":n.bind(null,"0e91ee77b993be1e3682f31d37ba0ccd1017afb7"),"1eda4f4b37716337e07b6d7fb68729d7273a0db7":n.bind(null,"1eda4f4b37716337e07b6d7fb68729d7273a0db7"),"381a2ba26357e4459204946457360d6bd76c7b09":n.bind(null,"381a2ba26357e4459204946457360d6bd76c7b09"),"4c47d189dfdee72f5e712c4a274581ac5d12a2b2":n.bind(null,"4c47d189dfdee72f5e712c4a274581ac5d12a2b2"),"7a094a0e84af70467919753c3411c2a8c3115119":n.bind(null,"7a094a0e84af70467919753c3411c2a8c3115119"),da1cfaf08f02c15753e897a6cebaf68b15db40f8:n.bind(null,"da1cfaf08f02c15753e897a6cebaf68b15db40f8")}},82084:(e,t,a)=>{"use strict";a.d(t,{FF:()=>o,NH:()=>n,TB:()=>i,sF:()=>s}),a(13664);var r=a(28371),n=(0,r.$)("1eda4f4b37716337e07b6d7fb68729d7273a0db7"),s=(0,r.$)("4c47d189dfdee72f5e712c4a274581ac5d12a2b2"),i=(0,r.$)("0e91ee77b993be1e3682f31d37ba0ccd1017afb7"),o=(0,r.$)("381a2ba26357e4459204946457360d6bd76c7b09");(0,r.$)("7a094a0e84af70467919753c3411c2a8c3115119"),(0,r.$)("da1cfaf08f02c15753e897a6cebaf68b15db40f8")},89410:(e,t,a)=>{"use strict";a.d(t,{default:()=>n.a});var r=a(37412),n=a.n(r)},37412:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{getImageProps:function(){return o},default:function(){return d}});let r=a(39694),n=a(83855),s=a(31900),i=r._(a(74931)),o=e=>{let{props:t}=(0,n.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}},d=s.Image},25567:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createBooking:()=>u,deleteBooking:()=>b,signInAction:()=>f,signOutAction:()=>g,updateBooking:()=>l,updateGuest:()=>c});var r=a(60398);a(75811);var n=a(20390),s=a(97411),i=a(2075),o=a(43811),d=a(52810);async function c(e){let t=await (0,n.auth)();if(!t)throw Error("You must be logged in");let a=e.get("nationalID"),[r,s]=e.get("nationality").split("%");if(!/^[a-zA-Z0-9]{6,12}$/.test(a))throw Error("Please provide a valid national ID");let{data:d,error:c}=await i.supabase.from("guests").update({nationality:r,countryFlag:s,nationalID:a}).eq("id",t.user.guestId);if(c)throw Error("Guest could not be updated");(0,o.revalidatePath)("/account/profile")}async function u(e,t){let a=await (0,n.auth)();if(!a)throw Error("You must be logged in");let r={...e,guestId:a.user.guestId,numGuests:Number(t.get("numGuests")),observations:t.get("observations").slice(0,1e3),extrasPrice:0,totalPrice:e.cabinPrice,isPaid:!1,hasBreakfast:!1,status:"unconfirmed"},{error:s}=await i.supabase.from("bookings").insert([r]);if(s)throw Error("Booking could not be created");(0,o.revalidatePath)(`/cabins/${e.cabinId}`),(0,d.redirect)("/cabins/thankyou")}async function b(e){let t=await (0,n.auth)();if(!t)throw Error("You must be logged in");if(!(await (0,s.getBookings)(t.user.guestId)).map(e=>e.id).includes(e))throw Error("You are not allowed to delete this booking");let{error:a}=await i.supabase.from("bookings").delete().eq("id",e);if(a)throw Error("Booking could not be deleted");(0,o.revalidatePath)("/account/reservations")}async function l(e){let t=Number(e.get("bookingId")),a=await (0,n.auth)();if(!a)throw Error("You must be logged in");if(!(await (0,s.getBookings)(a.user.guestId)).map(e=>e.id).includes(t))throw Error("You are not allowed to update this booking");let r={numGuests:Number(e.get("numGuests")),observations:e.get("observations").slice(0,1e3)},{error:c}=await i.supabase.from("bookings").update(r).eq("id",t).select().single();if(c)throw Error("Booking could not be updated");(0,o.revalidatePath)(`/account/reservations/edit/${t}`),(0,o.revalidatePath)("/account/reservations"),(0,d.redirect)("/account/reservations")}async function f(){await (0,n.signIn)("google",{redirectTo:"/account"})}async function g(){await (0,n.signOut)({redirectTo:"/"})}(0,a(46893).ensureServerEntryExports)([c,u,b,l,f,g]),(0,r.registerServerReference)("4c47d189dfdee72f5e712c4a274581ac5d12a2b2",c),(0,r.registerServerReference)("0e91ee77b993be1e3682f31d37ba0ccd1017afb7",u),(0,r.registerServerReference)("381a2ba26357e4459204946457360d6bd76c7b09",b),(0,r.registerServerReference)("7a094a0e84af70467919753c3411c2a8c3115119",l),(0,r.registerServerReference)("da1cfaf08f02c15753e897a6cebaf68b15db40f8",f),(0,r.registerServerReference)("1eda4f4b37716337e07b6d7fb68729d7273a0db7",g)},20390:(e,t,a)=>{"use strict";a.d(t,{auth:()=>o,signIn:()=>d,signOut:()=>c});var r=a(29538),n=a(67152),s=a(97411);let i={providers:[(0,n.default)({clientId:process.env.AUTH_GOOGLE_ID,clientSecret:process.env.AUTH_GOOGLE_SECRET})],callbacks:{authorized:({auth:e,request:t})=>!!e?.user,async signIn({user:e,account:t,profile:a}){try{return await (0,s.getGuest)(e.email)||await (0,s.createGuest)({email:e.email,fullName:e.name}),!0}catch{return!1}},async session({session:e,user:t}){let a=await (0,s.getGuest)(e.user.email);return e.user.guestId=a.id,e}},pages:{signIn:"/login"}},{auth:o,signIn:d,signOut:c,handlers:{GET:u,POST:b}}=(0,r.default)(i)},97411:(e,t,a)=>{"use strict";a.d(t,{createGuest:()=>i,getBookings:()=>s,getGuest:()=>n}),a(52810);var r=a(2075);async function n(e){let{data:t,error:a}=await r.supabase.from("guests").select("*").eq("email",e).single();return t}async function s(e){let{data:t,error:a,count:n}=await r.supabase.from("bookings").select("id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)").eq("guestId",e).order("startDate");if(a)throw console.error(a),Error("Bookings could not get loaded");return t}async function i(e){let{data:t,error:a}=await r.supabase.from("guests").insert([e]);if(a)throw console.error(a),Error("Guest could not be created");return t}},2075:(e,t,a)=>{"use strict";a.d(t,{supabase:()=>r});let r=(0,a(53094).createClient)(process.env.SUPABASE_URL,process.env.SUPABASE_KEY)},4474:(e,t,a)=>{"use strict";a.d(t,{T:()=>n});var r=a(60522);function n(e,t){let a=(0,r.Q)(e),n=(0,r.Q)(t);return 12*(a.getFullYear()-n.getFullYear())+(a.getMonth()-n.getMonth())}},15802:(e,t,a)=>{"use strict";a.d(t,{V:()=>n});var r=a(60522);function n(e){let t=(0,r.Q)(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}},54019:(e,t,a)=>{"use strict";a.d(t,{C:()=>n});var r=a(60522);function n(e){return+(0,r.Q)(e)<Date.now()}},11657:(e,t,a)=>{"use strict";a.d(t,{K:()=>n});var r=a(63519);function n(e,t){return+(0,r.b)(e)==+(0,r.b)(t)}}};