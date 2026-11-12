const products = [
 {id:1,name:"Nusantara Latte",type:"coffee",label:"COFFEE",desc:"Espresso khas dengan susu creamy dan sentuhan gula aren.",price:28000,image:"images/drink-latte.svg"},
 {id:2,name:"Kopi Susu Gula Aren",type:"coffee",label:"COFFEE",desc:"Perpaduan kopi, susu segar, dan manis legit gula aren.",price:25000,image:"images/drink-aren.svg"},
 {id:3,name:"Americano",type:"coffee",label:"COFFEE",desc:"Espresso dan air dengan karakter rasa kopi yang bersih.",price:22000,image:"images/drink-americano.svg"},
 {id:4,name:"Caramel Macchiato",type:"coffee",label:"COFFEE",desc:"Espresso, susu lembut, dan aroma karamel yang hangat.",price:32000,image:"images/drink-caramel.svg"},
 {id:5,name:"Matcha Cream",type:"noncoffee",label:"NON COFFEE",desc:"Matcha pilihan dengan susu creamy dan rasa earthy.",price:29000,image:"images/drink-matcha.svg"},
 {id:6,name:"Chocolate Signature",type:"noncoffee",label:"NON COFFEE",desc:"Cokelat pekat yang lembut untuk teman bersantai.",price:27000,image:"images/drink-chocolate.svg"},
 {id:7,name:"Butter Croissant",type:"food",label:"FOOD",desc:"Pastry berlapis yang renyah di luar dan lembut di dalam.",price:24000,image:"images/food-croissant.svg"},
 {id:8,name:"Classic Toast",type:"food",label:"FOOD",desc:"Roti panggang hangat dengan olesan butter pilihan.",price:20000,image:"images/food-toast.svg"}
];
let cart = [];
const rupiah = n => new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const grid = document.getElementById("menuGrid");
function renderProducts(filter="all",query=""){
 const shown=products.filter(p=>(filter==="all"||p.type===filter)&&(p.name.toLowerCase().includes(query.toLowerCase())||p.desc.toLowerCase().includes(query.toLowerCase())));
 grid.innerHTML=shown.length?shown.map(p=>`<div class="col-6 col-lg-3"><article class="menu-card"><div class="menu-thumb"><img src="${p.image}" alt="${p.name}"></div><div class="menu-card-body"><span class="menu-type">${p.label}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="menu-card-foot"><span class="menu-price">${rupiah(p.price)}</span><button class="add-btn" aria-label="Tambah ${p.name}" onclick="addToCart(${p.id})">+</button></div></div></article></div>`).join(""):'<div class="col-12 text-center py-5 text-muted small">Menu tidak ditemukan. Coba kata kunci lain.</div>';
}
let activeFilter="all";
document.querySelectorAll(".filter-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));btn.classList.add("active");activeFilter=btn.dataset.filter;renderProducts(activeFilter,document.getElementById("menuSearch").value)}));
document.getElementById("menuSearch").addEventListener("input",e=>renderProducts(activeFilter,e.target.value));
function addToCart(id){const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});renderCart();bootstrap.Toast.getOrCreateInstance(document.getElementById("addedToast")).show();}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);renderCart();}
function renderCart(){
 const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0);
 document.getElementById("cartCount").textContent=count;document.getElementById("cartTotal").textContent=rupiah(total);
 document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>{const p=products.find(z=>z.id===x.id);return `<div class="cart-line"><div><b>${p.name}</b><small>${rupiah(p.price)} / item</small></div><div class="qty-controls"><button onclick="changeQty(${p.id},-1)" aria-label="Kurangi">−</button><span>${x.qty}</span><button onclick="changeQty(${p.id},1)" aria-label="Tambah">+</button></div></div>`}).join(""):'<p class="empty-cart">Keranjang masih kosong. Yuk pilih menu favoritmu.</p>';
}
document.getElementById("checkoutBtn").addEventListener("click",()=>{
 if(!cart.length){alert("Keranjang masih kosong. Silakan pilih menu terlebih dahulu.");return;}
 const lines=cart.map(x=>{const p=products.find(z=>z.id===x.id);return `• ${p.name} x${x.qty} — ${rupiah(p.price*x.qty)}`});
 const total=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0);
 const msg=`Halo Kopi Indonesia, saya ingin memesan:%0A${encodeURIComponent(lines.join("\n"))}%0A%0ATotal: ${encodeURIComponent(rupiah(total))}%0A%0AMohon konfirmasi pesanan saya.`;
 window.open(`https://wa.me/6281234567890?text=${msg}`,"_blank","noopener");
});
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();

